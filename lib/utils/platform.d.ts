/**
 * Platform utility functions for detecting the current platform and architecture.
 * @module utils/platform
 */
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
export declare function getCurrentPlatform(): Platform;
/**
 * Get the current architecture
 * @returns The current architecture
 * @throws Error if the architecture is not supported
 */
export declare function getCurrentArchitecture(): Architecture;
/**
 * Get the path to the native library for the current platform and architecture
 * @returns The path to the native library
 */
export declare function getNativeLibraryPath(): string;
/**
 * Get the library name for the current platform
 * @returns The library name
 */
export declare function getLibraryName(): string;
