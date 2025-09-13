export declare function generateRoomCodeAndToken({ user_id, room_id, role, template_id }: {
    user_id: string;
    room_id: string;
    role: string;
    template_id?: string;
}): Promise<{
    roomCode?: string;
    error?: string;
}>;
