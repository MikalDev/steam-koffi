/**
 * App-related functionality for the Steamworks API.
 * @module api/app
 */
import { SteamAPI } from '../bindings/koffi.js';
/**
 * App-related functionality
 */
export class App {
    /**
     * Create a new App instance
     * @param steamApps The Steam Apps interface
     * @param callbackRegistry The callback registry
     * @param appId The app ID
     */
    constructor(steamApps, callbackRegistry, appId) {
        this.steamApps = steamApps;
        this.callbackRegistry = callbackRegistry;
        this.appId = appId;
    }
    /**
     * Get the current game language
     * @returns The current game language
     */
    getCurrentLanguage() {
        return SteamAPI.SteamAPI_ISteamApps_GetCurrentGameLanguage(this.steamApps);
    }
    /**
     * Get the available game languages
     * @returns The available game languages as a comma-separated string
     */
    getAvailableLanguages() {
        return SteamAPI.SteamAPI_ISteamApps_GetAvailableGameLanguages(this.steamApps);
    }
    /**
     * Check if the user is subscribed to the app
     * @returns True if the user is subscribed to the app, false otherwise
     */
    isSubscribed() {
        return SteamAPI.SteamAPI_ISteamApps_BIsSubscribed(this.steamApps);
    }
    /**
     * Check if the user is subscribed to a specific app
     * @param appId The app ID to check
     * @returns True if the user is subscribed to the app, false otherwise
     */
    isSubscribedApp(appId = this.appId) {
        return SteamAPI.SteamAPI_ISteamApps_BIsSubscribedApp(this.steamApps, appId);
    }
    /**
     * Check if the user is subscribed from a free weekend
     * @returns True if the user is subscribed from a free weekend, false otherwise
     */
    isSubscribedFromFreeWeekend() {
        return SteamAPI.SteamAPI_ISteamApps_BIsSubscribedFromFreeWeekend(this.steamApps);
    }
    /**
     * Check if the user is VAC banned
     * @returns True if the user is VAC banned, false otherwise
     */
    isVacBanned() {
        return SteamAPI.SteamAPI_ISteamApps_BIsVACBanned(this.steamApps);
    }
    /**
     * Check if the user is in low violence mode
     * @returns True if the user is in low violence mode, false otherwise
     */
    isLowViolence() {
        return SteamAPI.SteamAPI_ISteamApps_BIsLowViolence(this.steamApps);
    }
    /**
     * Check if the user is in a cybercafe
     * @returns True if the user is in a cybercafe, false otherwise
     */
    isCybercafe() {
        return SteamAPI.SteamAPI_ISteamApps_BIsCybercafe(this.steamApps);
    }
    /**
     * Check if a DLC is installed
     * @param appId The DLC app ID
     * @returns True if the DLC is installed, false otherwise
     */
    isDlcInstalled(appId) {
        return SteamAPI.SteamAPI_ISteamApps_BIsDlcInstalled(this.steamApps, appId);
    }
    /**
     * Get the earliest purchase time of the app
     * @param appId The app ID (optional, defaults to the current app ID)
     * @returns The earliest purchase time of the app (Unix timestamp)
     */
    getEarliestPurchaseTime(appId = this.appId) {
        return SteamAPI.SteamAPI_ISteamApps_GetEarliestPurchaseUnixTime(this.steamApps, appId);
    }
    /**
     * Get the number of DLCs
     * @returns The number of DLCs
     */
    getDlcCount() {
        return SteamAPI.SteamAPI_ISteamApps_GetDLCCount(this.steamApps);
    }
    /**
     * Install a DLC
     * @param appId The DLC app ID
     */
    installDlc(appId) {
        SteamAPI.SteamAPI_ISteamApps_InstallDLC(this.steamApps, appId);
    }
    /**
     * Uninstall a DLC
     * @param appId The DLC app ID
     */
    uninstallDlc(appId) {
        SteamAPI.SteamAPI_ISteamApps_UninstallDLC(this.steamApps, appId);
    }
    /**
     * Get app ownership information
     * @param appId The app ID (optional, defaults to the current app ID)
     * @returns The app ownership information
     */
    getOwnershipInfo(appId = this.appId) {
        return {
            isSubscribed: this.isSubscribedApp(appId),
            isFreeWeekend: this.isSubscribedFromFreeWeekend(),
            isOwned: this.isSubscribedApp(appId) && !this.isSubscribedFromFreeWeekend(),
            earliestPurchaseTime: this.getEarliestPurchaseTime(appId),
        };
    }
}
//# sourceMappingURL=app.js.map