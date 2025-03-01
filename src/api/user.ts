/**
 * User-related functionality for the Steamworks API.
 * @module api/user
 */

import { SteamAPI } from '../bindings/koffi.js';
import { 
  SteamID, 
  ECallbackType, 
  GetTicketForWebApiResponse_t,
  EResult 
} from '../bindings/types.js';
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
export class User {
  private steamUser: object;
  private callbackRegistry: CallbackRegistry;
  
  /**
   * Create a new User instance
   * @param steamUser The Steam User interface
   * @param callbackRegistry The callback registry
   */
  constructor(steamUser: object, callbackRegistry: CallbackRegistry) {
    this.steamUser = steamUser;
    this.callbackRegistry = callbackRegistry;
  }
  
  /**
   * Get the Steam ID of the current user
   * @returns The Steam ID of the current user
   */
  public getSteamId(): SteamID {
    return SteamAPI.SteamAPI_ISteamUser_GetSteamID(this.steamUser);
  }
  
  /**
   * Check if the user is logged on
   * @returns True if the user is logged on, false otherwise
   */
  public isLoggedOn(): boolean {
    return SteamAPI.SteamAPI_ISteamUser_BLoggedOn(this.steamUser);
  }
  
  /**
   * Get the player's Steam level
   * @returns The player's Steam level
   */
  public getSteamLevel(): number {
    return SteamAPI.SteamAPI_ISteamUser_GetPlayerSteamLevel(this.steamUser);
  }
  
  /**
   * Get an auth ticket for web API
   * @param identity The identity to get the auth ticket for (optional)
   * @returns A promise that resolves to the auth ticket
   */
  public async getAuthTicket(identity: string = ''): Promise<AuthTicket> {
    return new Promise<AuthTicket>((resolve, reject) => {
      try {
        // Get the auth ticket
        const handle = SteamAPI.SteamAPI_ISteamUser_GetAuthTicketForWebApi(this.steamUser, identity);
        
        if (handle === 0) {
          reject(new Error('Failed to get auth ticket'));
          return;
        }
        
        // Register a callback for GetTicketForWebApiResponse
        this.callbackRegistry.registerCallback(
          ECallbackType.GetTicketForWebApiResponse,
          (param: any, _param2: number, _param3: number, _param4: number) => {
            // Cast the param to GetTicketForWebApiResponse_t
            const response = param as GetTicketForWebApiResponse_t;
            
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
              const ticket: AuthTicket = {
                handle,
                buffer,
                hex: buffer.toString('hex'),
              };
              
              // Unregister the callback
              this.callbackRegistry.unregisterCallback(ECallbackType.GetTicketForWebApiResponse);
              
              // Resolve with the ticket
              resolve(ticket);
            }
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }
  
  /**
   * Cancel an auth ticket
   * @param handle The auth ticket handle to cancel
   */
  public cancelAuthTicket(handle: number): void {
    SteamAPI.SteamAPI_ISteamUser_CancelAuthTicket(this.steamUser, handle);
  }
} 