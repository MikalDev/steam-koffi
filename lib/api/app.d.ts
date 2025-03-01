/**
 * App-related functionality for the Steamworks API.
 * @module api/app
 */
import { CallbackRegistry } from '../callbacks/registry.js';
/**
 * App ownership information
 */
export interface AppOwnershipInfo {
    /**
     * Whether the user is subscribed to the app
     */
    isSubscribed: boolean;
    /**
     * Whether the app is a free weekend
     */
    isFreeWeekend: boolean;
    /**
     * Whether the user owns the app
     */
    isOwned: boolean;
    /**
     * The earliest purchase time of the app (Unix timestamp)
     */
    earliestPurchaseTime: number;
}
/**
 * App-related functionality
 */
export declare class App {
    private steamApps;
    private callbackRegistry;
    private appId;
    /**
     * Create a new App instance
     * @param steamApps The Steam Apps interface
     * @param callbackRegistry The callback registry
     * @param appId The app ID
     */
    constructor(steamApps: object, callbackRegistry: CallbackRegistry, appId: number);
    /**
     * Get the current game language
     * @returns The current game language
     */
    getCurrentLanguage(): string;
    /**
     * Get the available game languages
     * @returns The available game languages as a comma-separated string
     */
    getAvailableLanguages(): string;
    /**
     * Check if the user is subscribed to the app
     * @returns True if the user is subscribed to the app, false otherwise
     */
    isSubscribed(): boolean;
    /**
     * Check if the user is subscribed to a specific app
     * @param appId The app ID to check
     * @returns True if the user is subscribed to the app, false otherwise
     */
    isSubscribedApp(appId?: number): boolean;
    /**
     * Check if the user is subscribed from a free weekend
     * @returns True if the user is subscribed from a free weekend, false otherwise
     */
    isSubscribedFromFreeWeekend(): boolean;
    /**
     * Check if the user is VAC banned
     * @returns True if the user is VAC banned, false otherwise
     */
    isVacBanned(): boolean;
    /**
     * Check if the user is in low violence mode
     * @returns True if the user is in low violence mode, false otherwise
     */
    isLowViolence(): boolean;
    /**
     * Check if the user is in a cybercafe
     * @returns True if the user is in a cybercafe, false otherwise
     */
    isCybercafe(): boolean;
    /**
     * Check if a DLC is installed
     * @param appId The DLC app ID
     * @returns True if the DLC is installed, false otherwise
     */
    isDlcInstalled(appId: number): boolean;
    /**
     * Get the earliest purchase time of the app
     * @param appId The app ID (optional, defaults to the current app ID)
     * @returns The earliest purchase time of the app (Unix timestamp)
     */
    getEarliestPurchaseTime(appId?: number): number;
    /**
     * Get the number of DLCs
     * @returns The number of DLCs
     */
    getDlcCount(): number;
    /**
     * Install a DLC
     * @param appId The DLC app ID
     */
    installDlc(appId: number): void;
    /**
     * Uninstall a DLC
     * @param appId The DLC app ID
     */
    uninstallDlc(appId: number): void;
    /**
     * Get app ownership information
     * @param appId The app ID (optional, defaults to the current app ID)
     * @returns The app ownership information
     */
    getOwnershipInfo(appId?: number): AppOwnershipInfo;
}
