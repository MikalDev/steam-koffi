/**
 * Main client class for the Steamworks API.
 * @module api/client
 */
import { EventEmitter } from 'events';
import { SteamAPIInitOptions } from '../bindings/types.js';
import { User } from './user.js';
import { App } from './app.js';
import { Achievements } from './achievements.js';
/**
 * Main client class for the Steamworks API
 */
export declare class SteamClient extends EventEmitter {
    private options;
    private callbackRegistry;
    private callbackInterval;
    private initialized;
    private steamClient;
    private steamUser;
    private steamApps;
    private steamUserStats;
    private _user;
    private _app;
    private _achievements;
    /**
     * Create a new SteamClient instance
     * @param options The initialization options
     */
    constructor(options: SteamAPIInitOptions);
    /**
     * Initialize the Steamworks API
     * @returns True if initialization was successful, false otherwise
     */
    init(): boolean;
    /**
     * Shutdown the Steamworks API
     */
    shutdown(): void;
    /**
     * Start the callback thread
     */
    private startCallbackThread;
    /**
     * Stop the callback thread
     */
    private stopCallbackThread;
    /**
     * Run callbacks
     */
    runCallbacks(): void;
    /**
     * Get the user module
     */
    get user(): User;
    /**
     * Get the app module
     */
    get app(): App;
    /**
     * Get the achievements module
     */
    get achievements(): Achievements;
    /**
     * Check if the Steamworks API is initialized
     */
    isInitialized(): boolean;
    /**
     * Check if Steam is running
     */
    isSteamRunning(): boolean;
    /**
     * Restart the app if necessary
     * @returns True if the app was restarted, false otherwise
     */
    static restartAppIfNecessary(appId: number): boolean;
}
