[**Steamworks Node.js API v0.1.0**](../../../README.md)

***

[Steamworks Node.js API](../../../modules.md) / [api/client](../README.md) / SteamClient

# Class: SteamClient

Defined in: [src/api/client.ts:17](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/client.ts#L17)

Main client class for the Steamworks API

## Extends

- `EventEmitter`

## Constructors

### new SteamClient()

> **new SteamClient**(`options`): [`SteamClient`](SteamClient.md)

Defined in: [src/api/client.ts:38](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/client.ts#L38)

Create a new SteamClient instance

#### Parameters

##### options

[`SteamAPIInitOptions`](../../../bindings/types/interfaces/SteamAPIInitOptions.md)

The initialization options

#### Returns

[`SteamClient`](SteamClient.md)

#### Overrides

`EventEmitter.constructor`

## Accessors

### achievements

#### Get Signature

> **get** **achievements**(): [`Achievements`](../../achievements/classes/Achievements.md)

Defined in: [src/api/client.ts:172](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/client.ts#L172)

Get the achievements module

##### Returns

[`Achievements`](../../achievements/classes/Achievements.md)

***

### app

#### Get Signature

> **get** **app**(): [`App`](../../app/classes/App.md)

Defined in: [src/api/client.ts:157](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/client.ts#L157)

Get the app module

##### Returns

[`App`](../../app/classes/App.md)

***

### user

#### Get Signature

> **get** **user**(): [`User`](../../user/classes/User.md)

Defined in: [src/api/client.ts:142](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/client.ts#L142)

Get the user module

##### Returns

[`User`](../../user/classes/User.md)

## Methods

### init()

> **init**(): `boolean`

Defined in: [src/api/client.ts:51](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/client.ts#L51)

Initialize the Steamworks API

#### Returns

`boolean`

True if initialization was successful, false otherwise

***

### isInitialized()

> **isInitialized**(): `boolean`

Defined in: [src/api/client.ts:187](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/client.ts#L187)

Check if the Steamworks API is initialized

#### Returns

`boolean`

***

### isSteamRunning()

> **isSteamRunning**(): `boolean`

Defined in: [src/api/client.ts:194](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/client.ts#L194)

Check if Steam is running

#### Returns

`boolean`

***

### runCallbacks()

> **runCallbacks**(): `void`

Defined in: [src/api/client.ts:131](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/client.ts#L131)

Run callbacks

#### Returns

`void`

***

### shutdown()

> **shutdown**(): `void`

Defined in: [src/api/client.ts:85](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/client.ts#L85)

Shutdown the Steamworks API

#### Returns

`void`

***

### restartAppIfNecessary()

> `static` **restartAppIfNecessary**(`appId`): `boolean`

Defined in: [src/api/client.ts:202](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/client.ts#L202)

Restart the app if necessary

#### Parameters

##### appId

`number`

#### Returns

`boolean`

True if the app was restarted, false otherwise
