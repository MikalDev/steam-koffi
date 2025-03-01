[**Steamworks Node.js API v0.1.0**](../../../README.md)

***

[Steamworks Node.js API](../../../modules.md) / [api/user](../README.md) / User

# Class: User

Defined in: [src/api/user.ts:38](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/user.ts#L38)

User-related functionality

## Constructors

### new User()

> **new User**(`steamUser`, `callbackRegistry`): [`User`](User.md)

Defined in: [src/api/user.ts:47](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/user.ts#L47)

Create a new User instance

#### Parameters

##### steamUser

`object`

The Steam User interface

##### callbackRegistry

[`CallbackRegistry`](../../../callbacks/registry/classes/CallbackRegistry.md)

The callback registry

#### Returns

[`User`](User.md)

## Methods

### cancelAuthTicket()

> **cancelAuthTicket**(`handle`): `void`

Defined in: [src/api/user.ts:135](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/user.ts#L135)

Cancel an auth ticket

#### Parameters

##### handle

`number`

The auth ticket handle to cancel

#### Returns

`void`

***

### getAuthTicket()

> **getAuthTicket**(`identity`): `Promise`\<[`AuthTicket`](../interfaces/AuthTicket.md)\>

Defined in: [src/api/user.ts:81](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/user.ts#L81)

Get an auth ticket for web API

#### Parameters

##### identity

`string` = `''`

The identity to get the auth ticket for (optional)

#### Returns

`Promise`\<[`AuthTicket`](../interfaces/AuthTicket.md)\>

A promise that resolves to the auth ticket

***

### getSteamId()

> **getSteamId**(): `bigint`

Defined in: [src/api/user.ts:56](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/user.ts#L56)

Get the Steam ID of the current user

#### Returns

`bigint`

The Steam ID of the current user

***

### getSteamLevel()

> **getSteamLevel**(): `number`

Defined in: [src/api/user.ts:72](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/user.ts#L72)

Get the player's Steam level

#### Returns

`number`

The player's Steam level

***

### isLoggedOn()

> **isLoggedOn**(): `boolean`

Defined in: [src/api/user.ts:64](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/user.ts#L64)

Check if the user is logged on

#### Returns

`boolean`

True if the user is logged on, false otherwise
