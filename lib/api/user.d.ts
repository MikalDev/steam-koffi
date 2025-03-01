/**
 * User-related functionality for the Steamworks API.
 * @module api/user
 */
import { SteamID } from '../bindings/types.js';
import { CallbackRegistry } from '../callbacks/registry.js';
/**
 * Auth ticket for web API
 */
export interface AuthTicket {
    /**
     * The auth ticket handle
     */
    handle: number;
    /**
     * The auth ticket as a Buffer
     */
    buffer: Buffer;
    /**
     * The auth ticket as a hex string
     */
    hex: string;
}
/**
 * User-related functionality
 */
export declare class User {
    private steamUser;
    private callbackRegistry;
    /**
     * Create a new User instance
     * @param steamUser The Steam User interface
     * @param callbackRegistry The callback registry
     */
    constructor(steamUser: object, callbackRegistry: CallbackRegistry);
    /**
     * Get the Steam ID of the current user
     * @returns The Steam ID of the current user
     */
    getSteamId(): SteamID;
    /**
     * Check if the user is logged on
     * @returns True if the user is logged on, false otherwise
     */
    isLoggedOn(): boolean;
    /**
     * Get the player's Steam level
     * @returns The player's Steam level
     */
    getSteamLevel(): number;
    /**
     * Get an auth ticket for web API
     * @param identity The identity to get the auth ticket for (optional)
     * @returns A promise that resolves to the auth ticket
     */
    getAuthTicket(identity?: string): Promise<AuthTicket>;
    /**
     * Cancel an auth ticket
     * @param handle The auth ticket handle to cancel
     */
    cancelAuthTicket(handle: number): void;
}
