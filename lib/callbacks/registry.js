/**
 * Callback registry for the Steamworks API.
 * @module callbacks/registry
 */
import koffi from 'koffi';
import { EventEmitter } from 'events';
import { SteamAPI } from '../bindings/koffi.js';
/**
 * Callback registry for the Steamworks API
 */
export class CallbackRegistry extends EventEmitter {
    constructor() {
        super(...arguments);
        this.callbacks = new Map();
        this.callbackPointers = new Map();
    }
    /**
     * Register a callback for a specific callback type
     * @param callbackType The callback type to register for
     * @param callback The callback function to call when the event is triggered
     */
    registerCallback(callbackType, callback) {
        // Create a callback function that will be called by the Steamworks API
        const callbackFn = (param1, param2, param3, param4) => {
            console.log(`Callback triggered for type ${callbackType}:`, { param1, param2, param3, param4 });
            // Call the user's callback function
            callback(param1, param2, param3, param4);
        };
        // First define the callback type
        const SteamCallback = koffi.proto('void SteamCallback(void* param1, int param2, int param3, int param4)');
        // Then register the callback with a pointer to the type
        const koffiCallback = koffi.register(callbackFn, koffi.pointer(SteamCallback));
        // Store the callback function
        this.callbacks.set(callbackType, callbackFn);
        this.callbackPointers.set(callbackType, koffiCallback);
        // Register the callback with the Steamworks API
        SteamAPI.SteamAPI_RegisterCallback(koffiCallback, callbackType);
        console.log(`Registered callback for type ${callbackType}`);
    }
    /**
     * Unregister a callback for a specific callback type
     * @param callbackType The callback type to unregister
     */
    unregisterCallback(callbackType) {
        const callbackFn = this.callbackPointers.get(callbackType);
        if (callbackFn) {
            // Unregister the callback with the Steamworks API
            SteamAPI.SteamAPI_UnregisterCallback(callbackFn);
            // Unregister the Koffi callback
            koffi.unregister(callbackFn);
            // Remove the callback from our maps
            this.callbackPointers.delete(callbackType);
            this.callbacks.delete(callbackType);
            console.log(`Unregistered callback for type ${callbackType}`);
        }
    }
    /**
     * Unregister all callbacks
     */
    unregisterAllCallbacks() {
        for (const callbackType of this.callbackPointers.keys()) {
            this.unregisterCallback(callbackType);
        }
    }
    /**
     * Run callbacks
     */
    runCallbacks() {
        SteamAPI.SteamAPI_RunCallbacks();
    }
}
//# sourceMappingURL=registry.js.map