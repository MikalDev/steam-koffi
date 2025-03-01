[**Steamworks Node.js API v0.1.0**](../../../README.md)

***

[Steamworks Node.js API](../../../modules.md) / [api/app](../README.md) / App

# Class: App

Defined in: [src/api/app.ts:37](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/app.ts#L37)

App-related functionality

## Constructors

### new App()

> **new App**(`steamApps`, `callbackRegistry`, `appId`): [`App`](App.md)

Defined in: [src/api/app.ts:48](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/app.ts#L48)

Create a new App instance

#### Parameters

##### steamApps

`object`

The Steam Apps interface

##### callbackRegistry

[`CallbackRegistry`](../../../callbacks/registry/classes/CallbackRegistry.md)

The callback registry

##### appId

`number`

The app ID

#### Returns

[`App`](App.md)

## Methods

### getAvailableLanguages()

> **getAvailableLanguages**(): `string`

Defined in: [src/api/app.ts:66](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/app.ts#L66)

Get the available game languages

#### Returns

`string`

The available game languages as a comma-separated string

***

### getCurrentLanguage()

> **getCurrentLanguage**(): `string`

Defined in: [src/api/app.ts:58](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/app.ts#L58)

Get the current game language

#### Returns

`string`

The current game language

***

### getDlcCount()

> **getDlcCount**(): `number`

Defined in: [src/api/app.ts:141](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/app.ts#L141)

Get the number of DLCs

#### Returns

`number`

The number of DLCs

***

### getEarliestPurchaseTime()

> **getEarliestPurchaseTime**(`appId`): `number`

Defined in: [src/api/app.ts:133](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/app.ts#L133)

Get the earliest purchase time of the app

#### Parameters

##### appId

`number` = `...`

The app ID (optional, defaults to the current app ID)

#### Returns

`number`

The earliest purchase time of the app (Unix timestamp)

***

### getOwnershipInfo()

> **getOwnershipInfo**(`appId`): [`AppOwnershipInfo`](../interfaces/AppOwnershipInfo.md)

Defined in: [src/api/app.ts:166](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/app.ts#L166)

Get app ownership information

#### Parameters

##### appId

`number` = `...`

The app ID (optional, defaults to the current app ID)

#### Returns

[`AppOwnershipInfo`](../interfaces/AppOwnershipInfo.md)

The app ownership information

***

### installDlc()

> **installDlc**(`appId`): `void`

Defined in: [src/api/app.ts:149](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/app.ts#L149)

Install a DLC

#### Parameters

##### appId

`number`

The DLC app ID

#### Returns

`void`

***

### isCybercafe()

> **isCybercafe**(): `boolean`

Defined in: [src/api/app.ts:115](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/app.ts#L115)

Check if the user is in a cybercafe

#### Returns

`boolean`

True if the user is in a cybercafe, false otherwise

***

### isDlcInstalled()

> **isDlcInstalled**(`appId`): `boolean`

Defined in: [src/api/app.ts:124](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/app.ts#L124)

Check if a DLC is installed

#### Parameters

##### appId

`number`

The DLC app ID

#### Returns

`boolean`

True if the DLC is installed, false otherwise

***

### isLowViolence()

> **isLowViolence**(): `boolean`

Defined in: [src/api/app.ts:107](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/app.ts#L107)

Check if the user is in low violence mode

#### Returns

`boolean`

True if the user is in low violence mode, false otherwise

***

### isSubscribed()

> **isSubscribed**(): `boolean`

Defined in: [src/api/app.ts:74](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/app.ts#L74)

Check if the user is subscribed to the app

#### Returns

`boolean`

True if the user is subscribed to the app, false otherwise

***

### isSubscribedApp()

> **isSubscribedApp**(`appId`): `boolean`

Defined in: [src/api/app.ts:83](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/app.ts#L83)

Check if the user is subscribed to a specific app

#### Parameters

##### appId

`number` = `...`

The app ID to check

#### Returns

`boolean`

True if the user is subscribed to the app, false otherwise

***

### isSubscribedFromFreeWeekend()

> **isSubscribedFromFreeWeekend**(): `boolean`

Defined in: [src/api/app.ts:91](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/app.ts#L91)

Check if the user is subscribed from a free weekend

#### Returns

`boolean`

True if the user is subscribed from a free weekend, false otherwise

***

### isVacBanned()

> **isVacBanned**(): `boolean`

Defined in: [src/api/app.ts:99](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/app.ts#L99)

Check if the user is VAC banned

#### Returns

`boolean`

True if the user is VAC banned, false otherwise

***

### uninstallDlc()

> **uninstallDlc**(`appId`): `void`

Defined in: [src/api/app.ts:157](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/app.ts#L157)

Uninstall a DLC

#### Parameters

##### appId

`number`

The DLC app ID

#### Returns

`void`
