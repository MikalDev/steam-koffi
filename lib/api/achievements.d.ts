/**
 * Achievement-related functionality for the Steamworks API.
 * @module api/achievements
 */
import { CallbackRegistry } from '../callbacks/registry.js';
/**
 * Achievement information
 */
export interface Achievement {
    /**
     * The achievement name (API name)
     */
    name: string;
    /**
     * The achievement display name
     */
    displayName: string;
    /**
     * The achievement description
     */
    description: string;
    /**
     * Whether the achievement is unlocked
     */
    unlocked: boolean;
    /**
     * The time the achievement was unlocked (Unix timestamp)
     */
    unlockTime: number;
    /**
     * The achievement icon ID
     */
    iconId: number;
}
/**
 * Achievement-related functionality
 */
export declare class Achievements {
    private steamUserStats;
    private callbackRegistry;
    /**
     * Create a new Achievements instance
     * @param steamUserStats The Steam User Stats interface
     * @param callbackRegistry The callback registry
     */
    constructor(steamUserStats: object, callbackRegistry: CallbackRegistry);
    /**
     * Request current stats from the server
     * @returns A promise that resolves when the stats are received
     */
    requestCurrentStats(): Promise<boolean>;
    /**
     * Check if an achievement is unlocked
     * @param name The achievement name
     * @returns A promise that resolves to true if the achievement is unlocked, false otherwise
     */
    isUnlocked(name: string): Promise<boolean>;
    /**
     * Unlock an achievement
     * @param name The achievement name
     * @returns A promise that resolves when the achievement is unlocked
     */
    unlock(name: string): Promise<void>;
    /**
     * Clear an achievement
     * @param name The achievement name
     * @returns A promise that resolves when the achievement is cleared
     */
    clear(name: string): Promise<void>;
    /**
     * Get achievement information
     * @param name The achievement name
     * @returns A promise that resolves to the achievement information
     */
    getAchievement(name: string): Promise<Achievement>;
    /**
     * Get all achievements
     * @returns A promise that resolves to an array of all achievements
     */
    getAll(): Promise<Achievement[]>;
    /**
     * Reset all stats and optionally achievements
     * @param includeAchievements Whether to reset achievements as well
     * @returns A promise that resolves when the stats are reset
     */
    resetAllStats(includeAchievements?: boolean): Promise<void>;
    /**
     * Indicate achievement progress
     * @param name The achievement name
     * @param currentProgress The current progress
     * @param maxProgress The maximum progress
     * @returns A promise that resolves when the progress is indicated
     */
    indicateProgress(name: string, currentProgress: number, maxProgress: number): Promise<void>;
}
