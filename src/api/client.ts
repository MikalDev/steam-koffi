/**
 * Main client class for the Steamworks API.
 * @module api/client
 */

import { EventEmitter } from 'events';
import { SteamAPI } from '../bindings/koffi.js';
import { SteamAPIInitOptions } from '../bindings/types.js';
import { CallbackRegistry } from '../callbacks/registry.js';
import { User } from './user.js';
import { App } from './app.js';
import { Achievements } from './achievements.js';

/**
 * Main client class for the Steamworks API
 */
export class SteamClient extends EventEmitter {
  private options: SteamAPIInitOptions;
  private callbackRegistry: CallbackRegistry;
  private callbackInterval: NodeJS.Timeout | null = null;
  private initialized: boolean = false;
  
  // Steam interfaces
  private steamClient: object = {};
  private steamUser: object = {};
  private steamApps: object = {};
  private steamUserStats: object = {};
  
  // API modules
  private _user: User | null = null;
  private _app: App | null = null;
  private _achievements: Achievements | null = null;
  
  /**
   * Create a new SteamClient instance
   * @param options The initialization options
   */
  constructor(options: SteamAPIInitOptions) {
    super();
    this.options = options;
    this.callbackRegistry = new CallbackRegistry();
    
    // Set the app ID environment variable
    process.env.SteamAppId = options.appId.toString();
  }
  
  /**
   * Initialize the Steamworks API
   * @returns True if initialization was successful, false otherwise
   */
  public init(): boolean {
    if (this.initialized) {
      return true;
    }
    
    // Check if Steam is running
    if (!SteamAPI.SteamAPI_IsSteamRunning()) {
      throw new Error('Steam is not running');
    }
    
    // Initialize the Steamworks API
    console.log('Initializing Steamworks API');
    const result = SteamAPI.SteamAPI_InitSafe();
    console.log('SteamAPI_InitSafe result:', result);
    
    if (!result) {
      throw new Error('Failed to initialize Steamworks API');
    }
    
    // Get the Steam interfaces
    this.steamUser = SteamAPI.SteamAPI_SteamUser();
    this.steamApps = SteamAPI.SteamAPI_SteamApps();
    this.steamUserStats = SteamAPI.SteamAPI_SteamUserStats();
    
    // Start the callback thread
    this.startCallbackThread();
    
    this.initialized = true;
    return true;
  }
  
  /**
   * Shutdown the Steamworks API
   */
  public shutdown(): void {
    if (!this.initialized) {
      return;
    }
    
    // Stop the callback thread
    this.stopCallbackThread();
    
    // Unregister all callbacks
    this.callbackRegistry.unregisterAllCallbacks();
    
    // Shutdown the Steamworks API
    SteamAPI.SteamAPI_Shutdown();
    
    this.initialized = false;
  }
  
  /**
   * Start the callback thread
   */
  private startCallbackThread(): void {
    if (this.callbackInterval) {
      return;
    }
    
    // Run callbacks every 100ms
    this.callbackInterval = setInterval(() => {
      this.runCallbacks();
    }, 100);
  }
  
  /**
   * Stop the callback thread
   */
  private stopCallbackThread(): void {
    if (!this.callbackInterval) {
      return;
    }
    
    clearInterval(this.callbackInterval);
    this.callbackInterval = null;
  }
  
  /**
   * Run callbacks
   */
  public runCallbacks(): void {
    if (!this.initialized) {
      return;
    }
    
    this.callbackRegistry.runCallbacks();
  }
  
  /**
   * Get the user module
   */
  public get user(): User {
    if (!this.initialized) {
      this.init();
    }
    
    if (!this._user) {
      this._user = new User(this.steamUser, this.callbackRegistry);
    }
    
    return this._user;
  }
  
  /**
   * Get the app module
   */
  public get app(): App {
    if (!this.initialized) {
      this.init();
    }
    
    if (!this._app) {
      this._app = new App(this.steamApps, this.callbackRegistry, this.options.appId);
    }
    
    return this._app;
  }
  
  /**
   * Get the achievements module
   */
  public get achievements(): Achievements {
    if (!this.initialized) {
      this.init();
    }
    
    if (!this._achievements) {
      this._achievements = new Achievements(this.steamUserStats, this.callbackRegistry);
    }
    
    return this._achievements;
  }
  
  /**
   * Check if the Steamworks API is initialized
   */
  public isInitialized(): boolean {
    return this.initialized;
  }
  
  /**
   * Check if Steam is running
   */
  public isSteamRunning(): boolean {
    return SteamAPI.SteamAPI_IsSteamRunning();
  }
  
  /**
   * Restart the app if necessary
   * @returns True if the app was restarted, false otherwise
   */
  public static restartAppIfNecessary(appId: number): boolean {
    return SteamAPI.SteamAPI_RestartAppIfNecessary(appId);
  }
} 