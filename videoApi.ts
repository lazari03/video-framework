export async function generateRoomCodeAndToken({ user_id, room_id, role, template_id }: {
  user_id: string;
  room_id: string;
  role: string;
  template_id?: string;
}) {
  const response = await fetch('/api/100ms/generate-token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_id, room_id, role, template_id }),
  });
  const text = await response.text();
  let data: { roomCode?: string; error?: string } = {};
  try { if (text) data = JSON.parse(text); } catch {}
  if (!response.ok) throw new Error(data.error || 'Failed to generate room');
  return data;
}
