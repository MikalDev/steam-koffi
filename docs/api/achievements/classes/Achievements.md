[**Steamworks Node.js API v0.1.0**](../../../README.md)

***

[Steamworks Node.js API](../../../modules.md) / [api/achievements](../README.md) / Achievements

# Class: Achievements

Defined in: [src/api/achievements.ts:52](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/achievements.ts#L52)

Achievement-related functionality

## Constructors

### new Achievements()

> **new Achievements**(`steamUserStats`, `callbackRegistry`): [`Achievements`](Achievements.md)

Defined in: [src/api/achievements.ts:61](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/achievements.ts#L61)

Create a new Achievements instance

#### Parameters

##### steamUserStats

`object`

The Steam User Stats interface

##### callbackRegistry

[`CallbackRegistry`](../../../callbacks/registry/classes/CallbackRegistry.md)

The callback registry

#### Returns

[`Achievements`](Achievements.md)

## Methods

### clear()

> **clear**(`name`): `Promise`\<`void`\>

Defined in: [src/api/achievements.ts:141](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/achievements.ts#L141)

Clear an achievement

#### Parameters

##### name

`string`

The achievement name

#### Returns

`Promise`\<`void`\>

A promise that resolves when the achievement is cleared

***

### getAchievement()

> **getAchievement**(`name`): `Promise`\<[`Achievement`](../interfaces/Achievement.md)\>

Defined in: [src/api/achievements.ts:172](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/achievements.ts#L172)

Get achievement information

#### Parameters

##### name

`string`

The achievement name

#### Returns

`Promise`\<[`Achievement`](../interfaces/Achievement.md)\>

A promise that resolves to the achievement information

***

### getAll()

> **getAll**(): `Promise`\<[`Achievement`](../interfaces/Achievement.md)[]\>

Defined in: [src/api/achievements.ts:233](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/achievements.ts#L233)

Get all achievements

#### Returns

`Promise`\<[`Achievement`](../interfaces/Achievement.md)[]\>

A promise that resolves to an array of all achievements

***

### indicateProgress()

> **indicateProgress**(`name`, `currentProgress`, `maxProgress`): `Promise`\<`void`\>

Defined in: [src/api/achievements.ts:297](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/achievements.ts#L297)

Indicate achievement progress

#### Parameters

##### name

`string`

The achievement name

##### currentProgress

`number`

The current progress

##### maxProgress

`number`

The maximum progress

#### Returns

`Promise`\<`void`\>

A promise that resolves when the progress is indicated

***

### isUnlocked()

> **isUnlocked**(`name`): `Promise`\<`boolean`\>

Defined in: [src/api/achievements.ts:81](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/achievements.ts#L81)

Check if an achievement is unlocked

#### Parameters

##### name

`string`

The achievement name

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to true if the achievement is unlocked, false otherwise

***

### requestCurrentStats()

> **requestCurrentStats**(): `Promise`\<`boolean`\>

Defined in: [src/api/achievements.ts:70](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/achievements.ts#L70)

Request current stats from the server

#### Returns

`Promise`\<`boolean`\>

A promise that resolves when the stats are received

***

### resetAllStats()

> **resetAllStats**(`includeAchievements`): `Promise`\<`void`\>

Defined in: [src/api/achievements.ts:272](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/achievements.ts#L272)

Reset all stats and optionally achievements

#### Parameters

##### includeAchievements

`boolean` = `false`

Whether to reset achievements as well

#### Returns

`Promise`\<`void`\>

A promise that resolves when the stats are reset

***

### unlock()

> **unlock**(`name`): `Promise`\<`void`\>

Defined in: [src/api/achievements.ts:110](https://github.com/MikalDev/steam-koffi/blob/57920fe5c92a340b13303d2cc44034af83ea4270/src/api/achievements.ts#L110)

Unlock an achievement

#### Parameters

##### name

`string`

The achievement name

#### Returns

`Promise`\<`void`\>

A promise that resolves when the achievement is unlocked
