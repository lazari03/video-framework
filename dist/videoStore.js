"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.useVideoStore = void 0;
const zustand_1 = require("zustand");
exports.useVideoStore = (0, zustand_1.create)()((set) => ({
    isInCall: false,
    error: null,
    loading: false,
    isAuthenticated: false,
    userId: null,
    userName: null,
    roomCode: null,
    setAuthStatus: (isAuthenticated, userId, userName) => {
        set({ isAuthenticated, userId, userName, loading: false });
    },
    generateRoomCodeAndStore: async ({ appointmentId, userId, role, userName }) => {
        set({ loading: true, error: null });
        try {
            const { generateRoomCodeAndToken } = await Promise.resolve().then(() => __importStar(require('./videoApi')));
            const data = await generateRoomCodeAndToken({
                user_id: userId,
                room_id: appointmentId,
                role,
            });
            if (!data.roomCode)
                throw new Error('No roomCode returned from video API');
            set({ roomCode: data.roomCode, loading: false });
            window.localStorage.setItem('videoSessionRoomCode', data.roomCode);
            window.localStorage.setItem('videoSessionUserName', userName);
            return data.roomCode;
        }
        catch (error) {
            set({ error: error instanceof Error ? error.message : 'Unknown error', loading: false });
            throw error;
        }
    },
}));
