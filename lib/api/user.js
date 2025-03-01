/**
 * User-related functionality for the Steamworks API.
 * @module api/user
 */
import { SteamAPI } from '../bindings/koffi.js';
import { ECallbackType, EResult } from '../bindings/types.js';
/**
 * User-related functionality
 */
export class User {
    /**
     * Create a new User instance
     * @param steamUser The Steam User interface
     * @param callbackRegistry The callback registry
     */
    constructor(steamUser, callbackRegistry) {
        this.steamUser = steamUser;
        this.callbackRegistry = callbackRegistry;
    }
    /**
     * Get the Steam ID of the current user
     * @returns The Steam ID of the current user
     */
    getSteamId() {
        return SteamAPI.SteamAPI_ISteamUser_GetSteamID(this.steamUser);
    }
    /**
     * Check if the user is logged on
     * @returns True if the user is logged on, false otherwise
     */
    isLoggedOn() {
        return SteamAPI.SteamAPI_ISteamUser_BLoggedOn(this.steamUser);
    }
    /**
     * Get the player's Steam level
     * @returns The player's Steam level
     */
    getSteamLevel() {
        return SteamAPI.SteamAPI_ISteamUser_GetPlayerSteamLevel(this.steamUser);
    }
    /**
     * Get an auth ticket for web API
     * @param identity The identity to get the auth ticket for (optional)
     * @returns A promise that resolves to the auth ticket
     */
    async getAuthTicket(identity = '') {
        return new Promise((resolve, reject) => {
            try {
                // Get the auth ticket
                const handle = SteamAPI.SteamAPI_ISteamUser_GetAuthTicketForWebApi(this.steamUser, identity);
                if (handle === 0) {
                    reject(new Error('Failed to get auth ticket'));
                    return;
                }
                // Register a callback for GetTicketForWebApiResponse
                this.callbackRegistry.registerCallback(ECallbackType.GetTicketForWebApiResponse, (param, _param2, _param3, _param4) => {
                    // Cast the param to GetTicketForWebApiResponse_t
                    const response = param;
                    // Check if this is the response for our ticket
                    if (response.m_hAuthTicket === handle) {
                        // Check the result
                        if (response.m_eResult !== EResult.OK) {
                            reject(new Error(`Failed to get auth ticket: ${response.m_eResult}`));
                            return;
                        }
                        // Create a buffer from the ticket data
                        const buffer = Buffer.from(response.m_rgubTicket.slice(0, response.m_cubTicket));
                        // Create the auth ticket
                        const ticket = {
                            handle,
                            buffer,
                            hex: buffer.toString('hex'),
                        };
                        // Unregister the callback
                        this.callbackRegistry.unregisterCallback(ECallbackType.GetTicketForWebApiResponse);
                        // Resolve with the ticket
                        resolve(ticket);
                    }
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
    /**
     * Cancel an auth ticket
     * @param handle The auth ticket handle to cancel
     */
    cancelAuthTicket(handle) {
        SteamAPI.SteamAPI_ISteamUser_CancelAuthTicket(this.steamUser, handle);
    }
}
//# sourceMappingURL=user.js.map