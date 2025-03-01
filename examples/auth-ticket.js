/**
 * Example of obtaining an authentication ticket using the Steamworks API.
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

// Get an authentication ticket
user.getAuthTicket()
  .then((ticket) => {
    console.log('Auth ticket obtained successfully');
    console.log('Ticket handle:', ticket.handle);
    console.log('Ticket hex:', ticket.hex);
    
    // Cancel the ticket when done
    user.cancelAuthTicket(ticket.handle);
    console.log('Auth ticket cancelled');
    
    // Shutdown the client
    steam.shutdown();
    console.log('Steamworks API shutdown successfully');
  })
  .catch((error) => {
    console.error('Failed to get auth ticket:', error);
    steam.shutdown();
  }); 