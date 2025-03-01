/**
 * Koffi bindings for the Steamworks API.
 * @module bindings/koffi
 */
import koffi from 'koffi';
/**
 * Define the Steamworks API functions
 */
export declare const SteamAPI: {
    SteamAPI_InitSafe: koffi.KoffiFunction;
    SteamAPI_Shutdown: koffi.KoffiFunction;
    SteamAPI_RestartAppIfNecessary: koffi.KoffiFunction;
    SteamAPI_ReleaseCurrentThreadMemory: koffi.KoffiFunction;
    SteamAPI_RunCallbacks: koffi.KoffiFunction;
    SteamAPI_IsSteamRunning: koffi.KoffiFunction;
    SteamAPI_ISteamClient_CreateSteamPipe: koffi.KoffiFunction;
    SteamAPI_ISteamClient_BReleaseSteamPipe: koffi.KoffiFunction;
    SteamAPI_ISteamClient_ConnectToGlobalUser: koffi.KoffiFunction;
    SteamAPI_ISteamClient_ReleaseUser: koffi.KoffiFunction;
    SteamAPI_ISteamUser_GetSteamID: koffi.KoffiFunction;
    SteamAPI_ISteamUser_GetAuthSessionTicket: koffi.KoffiFunction;
    SteamAPI_ISteamUser_GetAuthTicketForWebApi: koffi.KoffiFunction;
    SteamAPI_ISteamUser_CancelAuthTicket: koffi.KoffiFunction;
    SteamAPI_ISteamUser_BLoggedOn: koffi.KoffiFunction;
    SteamAPI_ISteamUser_GetPlayerSteamLevel: koffi.KoffiFunction;
    SteamAPI_ISteamApps_BIsSubscribed: koffi.KoffiFunction;
    SteamAPI_ISteamApps_BIsLowViolence: koffi.KoffiFunction;
    SteamAPI_ISteamApps_BIsCybercafe: koffi.KoffiFunction;
    SteamAPI_ISteamApps_BIsVACBanned: koffi.KoffiFunction;
    SteamAPI_ISteamApps_GetCurrentGameLanguage: koffi.KoffiFunction;
    SteamAPI_ISteamApps_GetAvailableGameLanguages: koffi.KoffiFunction;
    SteamAPI_ISteamApps_BIsSubscribedApp: koffi.KoffiFunction;
    SteamAPI_ISteamApps_BIsDlcInstalled: koffi.KoffiFunction;
    SteamAPI_ISteamApps_GetEarliestPurchaseUnixTime: koffi.KoffiFunction;
    SteamAPI_ISteamApps_BIsSubscribedFromFreeWeekend: koffi.KoffiFunction;
    SteamAPI_ISteamApps_GetDLCCount: koffi.KoffiFunction;
    SteamAPI_ISteamApps_InstallDLC: koffi.KoffiFunction;
    SteamAPI_ISteamApps_UninstallDLC: koffi.KoffiFunction;
    SteamAPI_ISteamUserStats_RequestCurrentStats: koffi.KoffiFunction;
    SteamAPI_ISteamUserStats_GetStatInt32: koffi.KoffiFunction;
    SteamAPI_ISteamUserStats_GetStatFloat: koffi.KoffiFunction;
    SteamAPI_ISteamUserStats_SetStatInt32: koffi.KoffiFunction;
    SteamAPI_ISteamUserStats_SetStatFloat: koffi.KoffiFunction;
    SteamAPI_ISteamUserStats_UpdateAvgRateStat: koffi.KoffiFunction;
    SteamAPI_ISteamUserStats_GetAchievement: koffi.KoffiFunction;
    SteamAPI_ISteamUserStats_SetAchievement: koffi.KoffiFunction;
    SteamAPI_ISteamUserStats_ClearAchievement: koffi.KoffiFunction;
    SteamAPI_ISteamUserStats_GetAchievementAndUnlockTime: koffi.KoffiFunction;
    SteamAPI_ISteamUserStats_StoreStats: koffi.KoffiFunction;
    SteamAPI_ISteamUserStats_GetAchievementIcon: koffi.KoffiFunction;
    SteamAPI_ISteamUserStats_GetAchievementDisplayAttribute: koffi.KoffiFunction;
    SteamAPI_ISteamUserStats_IndicateAchievementProgress: koffi.KoffiFunction;
    SteamAPI_ISteamUserStats_GetNumAchievements: koffi.KoffiFunction;
    SteamAPI_ISteamUserStats_GetAchievementName: koffi.KoffiFunction;
    SteamAPI_ISteamUserStats_ResetAllStats: koffi.KoffiFunction;
    SteamAPI_ISteamUserStats_FindOrCreateLeaderboard: koffi.KoffiFunction;
    SteamAPI_ISteamUserStats_FindLeaderboard: koffi.KoffiFunction;
    SteamAPI_SteamUser: koffi.KoffiFunction;
    SteamAPI_SteamFriends: koffi.KoffiFunction;
    SteamAPI_SteamUtils: koffi.KoffiFunction;
    SteamAPI_SteamMatchmaking: koffi.KoffiFunction;
    SteamAPI_SteamUserStats: koffi.KoffiFunction;
    SteamAPI_SteamApps: koffi.KoffiFunction;
    SteamAPI_SteamNetworking: koffi.KoffiFunction;
    SteamAPI_SteamMatchmakingServers: koffi.KoffiFunction;
    SteamAPI_SteamRemoteStorage: koffi.KoffiFunction;
    SteamAPI_SteamScreenshots: koffi.KoffiFunction;
    SteamAPI_SteamHTTP: koffi.KoffiFunction;
    SteamAPI_SteamController: koffi.KoffiFunction;
    SteamAPI_SteamUGC: koffi.KoffiFunction;
    SteamAPI_SteamAppList: koffi.KoffiFunction;
    SteamAPI_SteamMusic: koffi.KoffiFunction;
    SteamAPI_SteamMusicRemote: koffi.KoffiFunction;
    SteamAPI_SteamHTMLSurface: koffi.KoffiFunction;
    SteamAPI_SteamInventory: koffi.KoffiFunction;
    SteamAPI_SteamVideo: koffi.KoffiFunction;
    SteamAPI_SteamParentalSettings: koffi.KoffiFunction;
    SteamAPI_SteamInput: koffi.KoffiFunction;
    SteamAPI_SteamParties: koffi.KoffiFunction;
    SteamAPI_SteamRemotePlay: koffi.KoffiFunction;
    SteamAPI_RegisterCallback: koffi.KoffiFunction;
    SteamAPI_UnregisterCallback: koffi.KoffiFunction;
};
