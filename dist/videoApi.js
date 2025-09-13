"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRoomCodeAndToken = generateRoomCodeAndToken;
async function generateRoomCodeAndToken({ user_id, room_id, role, template_id }) {
    const response = await fetch('/api/100ms/generate-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id, room_id, role, template_id }),
    });
    const text = await response.text();
    let data = {};
    try {
        if (text)
            data = JSON.parse(text);
    }
    catch (_a) { }
    if (!response.ok)
        throw new Error(data.error || 'Failed to generate room');
    return data;
}
