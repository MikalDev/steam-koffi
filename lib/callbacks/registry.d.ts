/**
 * Callback registry for the Steamworks API.
 * @module callbacks/registry
 */
import { EventEmitter } from 'events';
import { ECallbackType } from '../bindings/types.js';
/**
 * Callback registry for the Steamworks API
 */
export declare class CallbackRegistry extends EventEmitter {
    private callbacks;
    private callbackPointers;
    /**
     * Register a callback for a specific callback type
     * @param callbackType The callback type to register for
     * @param callback The callback function to call when the event is triggered
     */
    registerCallback(callbackType: ECallbackType, callback: Function): void;
    /**
     * Unregister a callback for a specific callback type
     * @param callbackType The callback type to unregister
     */
    unregisterCallback(callbackType: ECallbackType): void;
    /**
     * Unregister all callbacks
     */
    unregisterAllCallbacks(): void;
    /**
     * Run callbacks
     */
    runCallbacks(): void;
}
