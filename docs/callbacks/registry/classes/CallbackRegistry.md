[**Steamworks Node.js API v0.1.0**](../../../README.md)

***

[Steamworks Node.js API](../../../modules.md) / [callbacks/registry](../README.md) / CallbackRegistry

# Class: CallbackRegistry

Defined in: [src/callbacks/registry.ts:14](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/callbacks/registry.ts#L14)

Callback registry for the Steamworks API

## Extends

- `EventEmitter`

## Constructors

### new CallbackRegistry()

> **new CallbackRegistry**(`options`?): [`CallbackRegistry`](CallbackRegistry.md)

Defined in: node\_modules/@types/node/events.d.ts:134

#### Parameters

##### options?

`EventEmitterOptions`

#### Returns

[`CallbackRegistry`](CallbackRegistry.md)

#### Inherited from

`EventEmitter.constructor`

## Methods

### registerCallback()

> **registerCallback**(`callbackType`, `callback`): `void`

Defined in: [src/callbacks/registry.ts:23](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/callbacks/registry.ts#L23)

Register a callback for a specific callback type

#### Parameters

##### callbackType

[`ECallbackType`](../../../bindings/types/enumerations/ECallbackType.md)

The callback type to register for

##### callback

`Function`

The callback function to call when the event is triggered

#### Returns

`void`

***

### runCallbacks()

> **runCallbacks**(): `void`

Defined in: [src/callbacks/registry.ts:81](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/callbacks/registry.ts#L81)

Run callbacks

#### Returns

`void`

***

### unregisterAllCallbacks()

> **unregisterAllCallbacks**(): `void`

Defined in: [src/callbacks/registry.ts:72](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/callbacks/registry.ts#L72)

Unregister all callbacks

#### Returns

`void`

***

### unregisterCallback()

> **unregisterCallback**(`callbackType`): `void`

Defined in: [src/callbacks/registry.ts:52](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/callbacks/registry.ts#L52)

Unregister a callback for a specific callback type

#### Parameters

##### callbackType

[`ECallbackType`](../../../bindings/types/enumerations/ECallbackType.md)

The callback type to unregister

#### Returns

`void`
