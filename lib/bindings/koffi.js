/**
 * Koffi bindings for the Steamworks API.
 * @module bindings/koffi
 */
import koffi from 'koffi';
import { getNativeLibraryPath } from '../utils/platform.js';
/**
 * Load the Steamworks API library
 */
let steamLib;
try {
    const libraryPath = getNativeLibraryPath();
    steamLib = koffi.load(libraryPath);
}
catch (error) {
    console.error('Failed to load Steamworks API library:', error);
    throw new Error('Failed to load Steamworks API library. Make sure the library is available in the steam_bin directory.');
}
/**
 * Define the Steamworks API functions
 */
export const SteamAPI = {
    // Core API functions
    // SteamAPI_Init: steamLib.func('bool SteamAPI_Init()'),
    SteamAPI_InitSafe: steamLib.func('bool SteamAPI_InitSafe()'),
    SteamAPI_Shutdown: steamLib.func('void SteamAPI_Shutdown()'),
    SteamAPI_RestartAppIfNecessary: steamLib.func('bool SteamAPI_RestartAppIfNecessary(uint32_t unOwnAppID)'),
    SteamAPI_ReleaseCurrentThreadMemory: steamLib.func('void SteamAPI_ReleaseCurrentThreadMemory()'),
    SteamAPI_RunCallbacks: steamLib.func('void SteamAPI_RunCallbacks()'),
    SteamAPI_IsSteamRunning: steamLib.func('bool SteamAPI_IsSteamRunning()'),
    // Steam Client functions - these don't need a "self" pointer
    SteamAPI_ISteamClient_CreateSteamPipe: steamLib.func('int32_t SteamAPI_ISteamClient_CreateSteamPipe()'),
    SteamAPI_ISteamClient_BReleaseSteamPipe: steamLib.func('bool SteamAPI_ISteamClient_BReleaseSteamPipe(int32_t hSteamPipe)'),
    SteamAPI_ISteamClient_ConnectToGlobalUser: steamLib.func('int32_t SteamAPI_ISteamClient_ConnectToGlobalUser(int32_t hSteamPipe)'),
    SteamAPI_ISteamClient_ReleaseUser: steamLib.func('void SteamAPI_ISteamClient_ReleaseUser(int32_t hSteamPipe, int32_t hUser)'),
    // Steam User functions
    SteamAPI_ISteamUser_GetSteamID: steamLib.func('uint64_t SteamAPI_ISteamUser_GetSteamID(void* self)'),
    SteamAPI_ISteamUser_GetAuthSessionTicket: steamLib.func('int32_t SteamAPI_ISteamUser_GetAuthSessionTicket(void* self, void* pTicket, int32_t cbMaxTicket, uint32_t* pcbTicket)'),
    SteamAPI_ISteamUser_GetAuthTicketForWebApi: steamLib.func('uint64_t SteamAPI_ISteamUser_GetAuthTicketForWebApi(void* self, const char* pchIdentity)'),
    SteamAPI_ISteamUser_CancelAuthTicket: steamLib.func('void SteamAPI_ISteamUser_CancelAuthTicket(void* self, int32_t hAuthTicket)'),
    SteamAPI_ISteamUser_BLoggedOn: steamLib.func('bool SteamAPI_ISteamUser_BLoggedOn(void* self)'),
    SteamAPI_ISteamUser_GetPlayerSteamLevel: steamLib.func('int32_t SteamAPI_ISteamUser_GetPlayerSteamLevel(void* self)'),
    // Steam Apps functions
    SteamAPI_ISteamApps_BIsSubscribed: steamLib.func('bool SteamAPI_ISteamApps_BIsSubscribed(void* self)'),
    SteamAPI_ISteamApps_BIsLowViolence: steamLib.func('bool SteamAPI_ISteamApps_BIsLowViolence(void* self)'),
    SteamAPI_ISteamApps_BIsCybercafe: steamLib.func('bool SteamAPI_ISteamApps_BIsCybercafe(void* self)'),
    SteamAPI_ISteamApps_BIsVACBanned: steamLib.func('bool SteamAPI_ISteamApps_BIsVACBanned(void* self)'),
    SteamAPI_ISteamApps_GetCurrentGameLanguage: steamLib.func('const char* SteamAPI_ISteamApps_GetCurrentGameLanguage(void* self)'),
    SteamAPI_ISteamApps_GetAvailableGameLanguages: steamLib.func('const char* SteamAPI_ISteamApps_GetAvailableGameLanguages(void* self)'),
    SteamAPI_ISteamApps_BIsSubscribedApp: steamLib.func('bool SteamAPI_ISteamApps_BIsSubscribedApp(void* self, uint32_t appID)'),
    SteamAPI_ISteamApps_BIsDlcInstalled: steamLib.func('bool SteamAPI_ISteamApps_BIsDlcInstalled(void* self, uint32_t appID)'),
    SteamAPI_ISteamApps_GetEarliestPurchaseUnixTime: steamLib.func('uint32_t SteamAPI_ISteamApps_GetEarliestPurchaseUnixTime(void* self, uint32_t nAppID)'),
    SteamAPI_ISteamApps_BIsSubscribedFromFreeWeekend: steamLib.func('bool SteamAPI_ISteamApps_BIsSubscribedFromFreeWeekend(void* self)'),
    SteamAPI_ISteamApps_GetDLCCount: steamLib.func('int32_t SteamAPI_ISteamApps_GetDLCCount(void* self)'),
    SteamAPI_ISteamApps_InstallDLC: steamLib.func('void SteamAPI_ISteamApps_InstallDLC(void* self, uint32_t nAppID)'),
    SteamAPI_ISteamApps_UninstallDLC: steamLib.func('void SteamAPI_ISteamApps_UninstallDLC(void* self, uint32_t nAppID)'),
    // Steam User Stats functions
    SteamAPI_ISteamUserStats_RequestCurrentStats: steamLib.func('bool SteamAPI_ISteamUserStats_RequestCurrentStats(void* self)'),
    SteamAPI_ISteamUserStats_GetStatInt32: steamLib.func('bool SteamAPI_ISteamUserStats_GetStatInt32(void* self, const char* pchName, int32_t* pData)'),
    SteamAPI_ISteamUserStats_GetStatFloat: steamLib.func('bool SteamAPI_ISteamUserStats_GetStatFloat(void* self, const char* pchName, float* pData)'),
    SteamAPI_ISteamUserStats_SetStatInt32: steamLib.func('bool SteamAPI_ISteamUserStats_SetStatInt32(void* self, const char* pchName, int32_t nData)'),
    SteamAPI_ISteamUserStats_SetStatFloat: steamLib.func('bool SteamAPI_ISteamUserStats_SetStatFloat(void* self, const char* pchName, float fData)'),
    SteamAPI_ISteamUserStats_UpdateAvgRateStat: steamLib.func('bool SteamAPI_ISteamUserStats_UpdateAvgRateStat(void* self, const char* pchName, float flCountThisSession, double dSessionLength)'),
    SteamAPI_ISteamUserStats_GetAchievement: steamLib.func('bool SteamAPI_ISteamUserStats_GetAchievement(void* self, const char* pchName, bool* pbAchieved)'),
    SteamAPI_ISteamUserStats_SetAchievement: steamLib.func('bool SteamAPI_ISteamUserStats_SetAchievement(void* self, const char* pchName)'),
    SteamAPI_ISteamUserStats_ClearAchievement: steamLib.func('bool SteamAPI_ISteamUserStats_ClearAchievement(void* self, const char* pchName)'),
    SteamAPI_ISteamUserStats_GetAchievementAndUnlockTime: steamLib.func('bool SteamAPI_ISteamUserStats_GetAchievementAndUnlockTime(void* self, const char* pchName, bool* pbAchieved, uint32_t* punUnlockTime)'),
    SteamAPI_ISteamUserStats_StoreStats: steamLib.func('bool SteamAPI_ISteamUserStats_StoreStats(void* self)'),
    SteamAPI_ISteamUserStats_GetAchievementIcon: steamLib.func('int32_t SteamAPI_ISteamUserStats_GetAchievementIcon(void* self, const char* pchName)'),
    SteamAPI_ISteamUserStats_GetAchievementDisplayAttribute: steamLib.func('const char* SteamAPI_ISteamUserStats_GetAchievementDisplayAttribute(void* self, const char* pchName, const char* pchKey)'),
    SteamAPI_ISteamUserStats_IndicateAchievementProgress: steamLib.func('bool SteamAPI_ISteamUserStats_IndicateAchievementProgress(void* self, const char* pchName, uint32_t nCurProgress, uint32_t nMaxProgress)'),
    SteamAPI_ISteamUserStats_GetNumAchievements: steamLib.func('uint32_t SteamAPI_ISteamUserStats_GetNumAchievements(void* self)'),
    SteamAPI_ISteamUserStats_GetAchievementName: steamLib.func('const char* SteamAPI_ISteamUserStats_GetAchievementName(void* self, uint32_t iAchievement)'),
    SteamAPI_ISteamUserStats_ResetAllStats: steamLib.func('bool SteamAPI_ISteamUserStats_ResetAllStats(void* self, bool bAchievementsToo)'),
    SteamAPI_ISteamUserStats_FindOrCreateLeaderboard: steamLib.func('uint64_t SteamAPI_ISteamUserStats_FindOrCreateLeaderboard(void* self, const char* pchLeaderboardName, int32_t eLeaderboardSortMethod, int32_t eLeaderboardDisplayType)'),
    SteamAPI_ISteamUserStats_FindLeaderboard: steamLib.func('uint64_t SteamAPI_ISteamUserStats_FindLeaderboard(void* self, const char* pchLeaderboardName)'),
    // Interface getters - these need to use the versioned accessors
    SteamAPI_SteamUser: steamLib.func('void* SteamAPI_SteamUser_v023()'),
    SteamAPI_SteamFriends: steamLib.func('void* SteamAPI_SteamFriends_v017()'),
    SteamAPI_SteamUtils: steamLib.func('void* SteamAPI_SteamUtils_v010()'),
    SteamAPI_SteamMatchmaking: steamLib.func('void* SteamAPI_SteamMatchmaking_v009()'),
    SteamAPI_SteamUserStats: steamLib.func('void* SteamAPI_SteamUserStats_v012()'),
    SteamAPI_SteamApps: steamLib.func('void* SteamAPI_SteamApps_v008()'),
    SteamAPI_SteamNetworking: steamLib.func('void* SteamAPI_SteamNetworking_v006()'),
    SteamAPI_SteamMatchmakingServers: steamLib.func('void* SteamAPI_SteamMatchmakingServers_v002()'),
    SteamAPI_SteamRemoteStorage: steamLib.func('void* SteamAPI_SteamRemoteStorage_v016()'),
    SteamAPI_SteamScreenshots: steamLib.func('void* SteamAPI_SteamScreenshots_v003()'),
    SteamAPI_SteamHTTP: steamLib.func('void* SteamAPI_SteamHTTP_v003()'),
    SteamAPI_SteamController: steamLib.func('void* SteamAPI_SteamController_v008()'),
    SteamAPI_SteamUGC: steamLib.func('void* SteamAPI_SteamUGC_v018()'),
    SteamAPI_SteamAppList: steamLib.func('void* SteamAPI_SteamAppList_v001()'),
    SteamAPI_SteamMusic: steamLib.func('void* SteamAPI_SteamMusic_v001()'),
    SteamAPI_SteamMusicRemote: steamLib.func('void* SteamAPI_SteamMusicRemote_v001()'),
    SteamAPI_SteamHTMLSurface: steamLib.func('void* SteamAPI_SteamHTMLSurface_v005()'),
    SteamAPI_SteamInventory: steamLib.func('void* SteamAPI_SteamInventory_v003()'),
    SteamAPI_SteamVideo: steamLib.func('void* SteamAPI_SteamVideo_v003()'),
    SteamAPI_SteamParentalSettings: steamLib.func('void* SteamAPI_SteamParentalSettings_v001()'),
    SteamAPI_SteamInput: steamLib.func('void* SteamAPI_SteamInput_v006()'),
    SteamAPI_SteamParties: steamLib.func('void* SteamAPI_SteamParties_v002()'),
    SteamAPI_SteamRemotePlay: steamLib.func('void* SteamAPI_SteamRemotePlay_v002()'),
    // Callback registration
    SteamAPI_RegisterCallback: steamLib.func('void SteamAPI_RegisterCallback(void* pCallback, int32_t iCallback)'),
    SteamAPI_UnregisterCallback: steamLib.func('void SteamAPI_UnregisterCallback(void* pCallback)'),
};
//# sourceMappingURL=koffi.js.map