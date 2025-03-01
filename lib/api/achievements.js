/**
 * Achievement-related functionality for the Steamworks API.
 * @module api/achievements
 */
import { SteamAPI } from '../bindings/koffi.js';
/**
 * Achievement-related functionality
 */
export class Achievements {
    /**
     * Create a new Achievements instance
     * @param steamUserStats The Steam User Stats interface
     * @param callbackRegistry The callback registry
     */
    constructor(steamUserStats, callbackRegistry) {
        this.steamUserStats = steamUserStats;
        this.callbackRegistry = callbackRegistry;
    }
    /**
     * Request current stats from the server
     * @returns A promise that resolves when the stats are received
     */
    requestCurrentStats() {
        console.log('Requesting current stats through API');
        const result = SteamAPI.SteamAPI_ISteamUserStats_RequestCurrentStats(this.steamUserStats);
        return result;
    }
    /**
     * Check if an achievement is unlocked
     * @param name The achievement name
     * @returns A promise that resolves to true if the achievement is unlocked, false otherwise
     */
    async isUnlocked(name) {
        return new Promise((resolve, reject) => {
            try {
                // Create a buffer to store the result
                const achieved = Buffer.alloc(4);
                // Get the achievement
                const result = SteamAPI.SteamAPI_ISteamUserStats_GetAchievement(this.steamUserStats, name, achieved);
                if (!result) {
                    reject(new Error(`Failed to get achievement: ${name}`));
                    return;
                }
                // Read the result from the buffer
                const isUnlocked = achieved.readInt32LE(0) !== 0;
                resolve(isUnlocked);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    /**
     * Unlock an achievement
     * @param name The achievement name
     * @returns A promise that resolves when the achievement is unlocked
     */
    async unlock(name) {
        return new Promise((resolve, reject) => {
            try {
                // Set the achievement
                const result = SteamAPI.SteamAPI_ISteamUserStats_SetAchievement(this.steamUserStats, name);
                if (!result) {
                    reject(new Error(`Failed to set achievement: ${name}`));
                    return;
                }
                // Store the stats
                const storeResult = SteamAPI.SteamAPI_ISteamUserStats_StoreStats(this.steamUserStats);
                if (!storeResult) {
                    reject(new Error(`Failed to store stats for achievement: ${name}`));
                    return;
                }
                resolve();
            }
            catch (error) {
                reject(error);
            }
        });
    }
    /**
     * Clear an achievement
     * @param name The achievement name
     * @returns A promise that resolves when the achievement is cleared
     */
    async clear(name) {
        return new Promise((resolve, reject) => {
            try {
                // Clear the achievement
                const result = SteamAPI.SteamAPI_ISteamUserStats_ClearAchievement(this.steamUserStats, name);
                if (!result) {
                    reject(new Error(`Failed to clear achievement: ${name}`));
                    return;
                }
                // Store the stats
                const storeResult = SteamAPI.SteamAPI_ISteamUserStats_StoreStats(this.steamUserStats);
                if (!storeResult) {
                    reject(new Error(`Failed to store stats for achievement: ${name}`));
                    return;
                }
                resolve();
            }
            catch (error) {
                reject(error);
            }
        });
    }
    /**
     * Get achievement information
     * @param name The achievement name
     * @returns A promise that resolves to the achievement information
     */
    async getAchievement(name) {
        return new Promise((resolve, reject) => {
            try {
                // Create buffers to store the results
                const achieved = Buffer.alloc(4);
                const unlockTime = Buffer.alloc(4);
                // Get the achievement and unlock time
                const result = SteamAPI.SteamAPI_ISteamUserStats_GetAchievementAndUnlockTime(this.steamUserStats, name, achieved, unlockTime);
                if (!result) {
                    reject(new Error(`Failed to get achievement: ${name}`));
                    return;
                }
                // Read the results from the buffers
                const isUnlocked = achieved.readInt32LE(0) !== 0;
                const unlockTimeValue = unlockTime.readUInt32LE(0);
                // Get the achievement display name and description
                const displayName = SteamAPI.SteamAPI_ISteamUserStats_GetAchievementDisplayAttribute(this.steamUserStats, name, 'name');
                const description = SteamAPI.SteamAPI_ISteamUserStats_GetAchievementDisplayAttribute(this.steamUserStats, name, 'desc');
                // Get the achievement icon
                const iconId = SteamAPI.SteamAPI_ISteamUserStats_GetAchievementIcon(this.steamUserStats, name);
                // Create the achievement object
                const achievement = {
                    name,
                    displayName,
                    description,
                    unlocked: isUnlocked,
                    unlockTime: unlockTimeValue,
                    iconId,
                };
                resolve(achievement);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    /**
     * Get all achievements
     * @returns A promise that resolves to an array of all achievements
     */
    async getAll() {
        return new Promise(async (resolve, reject) => {
            try {
                // Request current stats
                await this.requestCurrentStats();
                // Get the number of achievements
                const numAchievements = SteamAPI.SteamAPI_ISteamUserStats_GetNumAchievements(this.steamUserStats);
                if (numAchievements === 0) {
                    resolve([]);
                    return;
                }
                // Get all achievements
                const achievements = [];
                for (let i = 0; i < numAchievements; i++) {
                    // Get the achievement name
                    const name = SteamAPI.SteamAPI_ISteamUserStats_GetAchievementName(this.steamUserStats, i);
                    // Get the achievement information
                    const achievement = await this.getAchievement(name);
                    achievements.push(achievement);
                }
                resolve(achievements);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    /**
     * Reset all stats and optionally achievements
     * @param includeAchievements Whether to reset achievements as well
     * @returns A promise that resolves when the stats are reset
     */
    async resetAllStats(includeAchievements = false) {
        return new Promise((resolve, reject) => {
            try {
                // Reset all stats
                const result = SteamAPI.SteamAPI_ISteamUserStats_ResetAllStats(this.steamUserStats, includeAchievements);
                if (!result) {
                    reject(new Error('Failed to reset all stats'));
                    return;
                }
                resolve();
            }
            catch (error) {
                reject(error);
            }
        });
    }
    /**
     * Indicate achievement progress
     * @param name The achievement name
     * @param currentProgress The current progress
     * @param maxProgress The maximum progress
     * @returns A promise that resolves when the progress is indicated
     */
    async indicateProgress(name, currentProgress, maxProgress) {
        return new Promise((resolve, reject) => {
            try {
                // Indicate achievement progress
                const result = SteamAPI.SteamAPI_ISteamUserStats_IndicateAchievementProgress(this.steamUserStats, name, currentProgress, maxProgress);
                if (!result) {
                    reject(new Error(`Failed to indicate achievement progress: ${name}`));
                    return;
                }
                resolve();
            }
            catch (error) {
                reject(error);
            }
        });
    }
}
//# sourceMappingURL=achievements.js.map