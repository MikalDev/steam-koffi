/**
 * Basic example of using the Steamworks Node package.
 */

import { SteamClient } from '../lib/index.js';

// Create a new Steam client
const steam = new SteamClient({
  appId: 480, // Replace with your app ID
});

// Initialize the client
try {
  steam.init();
  console.log('Steamworks API initialized successfully');
} catch (error) {
  console.error('Failed to initialize Steamworks API:', error);
  process.exit(1);
}

// Get user information
const user = steam.user;
const steamId = user.getSteamId();
console.log('Steam ID:', steamId.toString());
console.log('Logged in:', user.isLoggedOn());
console.log('Steam level:', user.getSteamLevel());

// Get app information
const app = steam.app;
console.log('Current language:', app.getCurrentLanguage());
console.log('Available languages:', app.getAvailableLanguages());
console.log('Subscribed:', app.isSubscribed());

// Get ownership info for the current app
const ownershipInfo = app.getOwnershipInfo(); // No need to pass appId, it defaults to the current app
console.log('Ownership info:', ownershipInfo);

// Get achievements
const achievements = steam.achievements;

console.log('Requesting current stats...');

// Use the achievements module to request stats
const result = achievements.requestCurrentStats();
console.log('Result:', result);

// Get achievement by index
let achievement = await achievements.isUnlocked('ACH_TRAVEL_FAR_SINGLE');
console.log('Current Achievement:', achievement);

await achievements.clear('ACH_TRAVEL_FAR_SINGLE');

achievement = await achievements.isUnlocked('ACH_TRAVEL_FAR_SINGLE');
console.log('Achievement after clearing:', achievement);

await achievements.unlock('ACH_TRAVEL_FAR_SINGLE');

achievement = await achievements.isUnlocked('ACH_TRAVEL_FAR_SINGLE');
console.log('Achievement after unlocking:', achievement);



