/**
 * Platform utility functions for detecting the current platform and architecture.
 * @module utils/platform
 */

import { platform, arch } from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * Supported platforms
 */
export type Platform = 'win32' | 'linux' | 'darwin';

/**
 * Supported architectures
 */
export type Architecture = 'x64' | 'ia32' | 'arm64';

/**
 * Get the current platform
 * @returns The current platform
 * @throws Error if the platform is not supported
 */
export function getCurrentPlatform(): Platform {
  const currentPlatform = platform();
  
  if (currentPlatform !== 'win32' && currentPlatform !== 'linux' && currentPlatform !== 'darwin') {
    throw new Error(`Platform not supported: ${currentPlatform}`);
  }
  
  return currentPlatform;
}

/**
 * Get the current architecture
 * @returns The current architecture
 * @throws Error if the architecture is not supported
 */
export function getCurrentArchitecture(): Architecture {
  const currentArch = arch();
  
  if (currentArch === 'x64') {
    return 'x64';
  } else if (currentArch === 'ia32') {
    return 'ia32';
  } else if (currentArch === 'arm64') {
    return 'arm64';
  }
  
  throw new Error(`Architecture not supported: ${currentArch}`);
}

/**
 * Get the path to the native library for the current platform and architecture
 * @returns The path to the native library
 */
export function getNativeLibraryPath(): string {
  const currentPlatform = getCurrentPlatform();
  const currentArch = getCurrentArchitecture();
  
  // Get the directory of the current module
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  
  // Go up to the root directory
  const rootDir = path.resolve(__dirname, '..', '..');
  
  // Construct the path to the native library
  let libraryName: string;
  
  if (currentPlatform === 'win32') {
    libraryName = currentArch === 'x64' ? 'steam_api64.dll' : 'steam_api.dll';
    return path.join(rootDir, 'steam_bin', currentArch === 'x64' ? 'win64' : 'win32', libraryName);
  } else if (currentPlatform === 'linux') {
    libraryName = 'libsteam_api.so';
    return path.join(rootDir, 'steam_bin', `linux${currentArch === 'x64' ? '64' : '32'}`, libraryName);
  } else if (currentPlatform === 'darwin') {
    libraryName = 'libsteam_api.dylib';
    return path.join(rootDir, 'steam_bin', 'osx', libraryName);
  }
  
  throw new Error(`Platform not supported: ${currentPlatform}`);
}

/**
 * Get the library name for the current platform
 * @returns The library name
 */
export function getLibraryName(): string {
  const currentPlatform = getCurrentPlatform();
  
  if (currentPlatform === 'win32') {
    return 'steam_api64';
  } else if (currentPlatform === 'linux') {
    return 'steam_api';
  } else if (currentPlatform === 'darwin') {
    return 'steam_api';
  }
  
  throw new Error(`Platform not supported: ${currentPlatform}`);
} 