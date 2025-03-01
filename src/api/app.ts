/**
 * App-related functionality for the Steamworks API.
 * @module api/app
 */

import { SteamAPI } from '../bindings/koffi.js';
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
export class App {
  private steamApps: object;
  private callbackRegistry: CallbackRegistry;
  private appId: number;
  
  /**
   * Create a new App instance
   * @param steamApps The Steam Apps interface
   * @param callbackRegistry The callback registry
   * @param appId The app ID
   */
  constructor(steamApps: object, callbackRegistry: CallbackRegistry, appId: number) {
    this.steamApps = steamApps;
    this.callbackRegistry = callbackRegistry;
    this.appId = appId;
  }
  
  /**
   * Get the current game language
   * @returns The current game language
   */
  public getCurrentLanguage(): string {
    return SteamAPI.SteamAPI_ISteamApps_GetCurrentGameLanguage(this.steamApps);
  }
  
  /**
   * Get the available game languages
   * @returns The available game languages as a comma-separated string
   */
  public getAvailableLanguages(): string {
    return SteamAPI.SteamAPI_ISteamApps_GetAvailableGameLanguages(this.steamApps);
  }
  
  /**
   * Check if the user is subscribed to the app
   * @returns True if the user is subscribed to the app, false otherwise
   */
  public isSubscribed(): boolean {
    return SteamAPI.SteamAPI_ISteamApps_BIsSubscribed(this.steamApps);
  }
  
  /**
   * Check if the user is subscribed to a specific app
   * @param appId The app ID to check
   * @returns True if the user is subscribed to the app, false otherwise
   */
  public isSubscribedApp(appId: number = this.appId): boolean {
    return SteamAPI.SteamAPI_ISteamApps_BIsSubscribedApp(this.steamApps, appId);
  }
  
  /**
   * Check if the user is subscribed from a free weekend
   * @returns True if the user is subscribed from a free weekend, false otherwise
   */
  public isSubscribedFromFreeWeekend(): boolean {
    return SteamAPI.SteamAPI_ISteamApps_BIsSubscribedFromFreeWeekend(this.steamApps);
  }
  
  /**
   * Check if the user is VAC banned
   * @returns True if the user is VAC banned, false otherwise
   */
  public isVacBanned(): boolean {
    return SteamAPI.SteamAPI_ISteamApps_BIsVACBanned(this.steamApps);
  }
  
  /**
   * Check if the user is in low violence mode
   * @returns True if the user is in low violence mode, false otherwise
   */
  public isLowViolence(): boolean {
    return SteamAPI.SteamAPI_ISteamApps_BIsLowViolence(this.steamApps);
  }
  
  /**
   * Check if the user is in a cybercafe
   * @returns True if the user is in a cybercafe, false otherwise
   */
  public isCybercafe(): boolean {
    return SteamAPI.SteamAPI_ISteamApps_BIsCybercafe(this.steamApps);
  }
  
  /**
   * Check if a DLC is installed
   * @param appId The DLC app ID
   * @returns True if the DLC is installed, false otherwise
   */
  public isDlcInstalled(appId: number): boolean {
    return SteamAPI.SteamAPI_ISteamApps_BIsDlcInstalled(this.steamApps, appId);
  }
  
  /**
   * Get the earliest purchase time of the app
   * @param appId The app ID (optional, defaults to the current app ID)
   * @returns The earliest purchase time of the app (Unix timestamp)
   */
  public getEarliestPurchaseTime(appId: number = this.appId): number {
    return SteamAPI.SteamAPI_ISteamApps_GetEarliestPurchaseUnixTime(this.steamApps, appId);
  }
  
  /**
   * Get the number of DLCs
   * @returns The number of DLCs
   */
  public getDlcCount(): number {
    return SteamAPI.SteamAPI_ISteamApps_GetDLCCount(this.steamApps);
  }
  
  /**
   * Install a DLC
   * @param appId The DLC app ID
   */
  public installDlc(appId: number): void {
    SteamAPI.SteamAPI_ISteamApps_InstallDLC(this.steamApps, appId);
  }
  
  /**
   * Uninstall a DLC
   * @param appId The DLC app ID
   */
  public uninstallDlc(appId: number): void {
    SteamAPI.SteamAPI_ISteamApps_UninstallDLC(this.steamApps, appId);
  }
  
  /**
   * Get app ownership information
   * @param appId The app ID (optional, defaults to the current app ID)
   * @returns The app ownership information
   */
  public getOwnershipInfo(appId: number = this.appId): AppOwnershipInfo {
    return {
      isSubscribed: this.isSubscribedApp(appId),
      isFreeWeekend: this.isSubscribedFromFreeWeekend(),
      isOwned: this.isSubscribedApp(appId) && !this.isSubscribedFromFreeWeekend(),
      earliestPurchaseTime: this.getEarliestPurchaseTime(appId),
    };
  }
} 