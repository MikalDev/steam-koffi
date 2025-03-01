**Steamworks Node.js API v0.1.0**

***

# Steamworks Node

A modern ESM npm package for integrating Node.js applications (NW.js, Electron) with the Steamworks API.

## Features

- Modern ESM package with TypeScript support
- Developer-friendly API that abstracts the Steamworks API
- Promise-based API for asynchronous operations
- Comprehensive TypeScript type definitions
- Cross-platform support (Windows, Linux, macOS)

## Installation

```bash
npm install steamworks-node
```

## Usage

```javascript
import { SteamClient } from 'steamworks-node';

// Initialize the client
const steam = new SteamClient({
  appId: 480, // Your app ID
});

// Get user information
const user = steam.user;
const steamId = user.getSteamId();
const username = user.getUsername();

// Get app information
const app = steam.app;
const language = app.getCurrentLanguage();
const isSubscribed = app.isSubscribed();

// Work with achievements
const achievements = steam.achievements;
await achievements.unlock('ACHIEVEMENT_ID');
const isUnlocked = await achievements.isUnlocked('ACHIEVEMENT_ID');

// Clean up
steam.shutdown();
```

## API Documentation

[API Documentation](./docs/README.md)

## License

MIT
