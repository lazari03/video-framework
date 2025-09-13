interface VideoState {
    isInCall: boolean;
    error: string | null;
    loading: boolean;
    isAuthenticated: boolean;
    userId: string | null;
    userName: string | null;
    roomCode: string | null;
    setAuthStatus: (isAuthenticated: boolean, userId: string | null, userName: string | null) => void;
    generateRoomCodeAndStore: (params: {
        appointmentId: string;
        userId: string;
        role: string;
        userName: string;
    }) => Promise<string>;
}
export declare const useVideoStore: import("zustand").UseBoundStore<import("zustand").StoreApi<VideoState>>;
export {};
