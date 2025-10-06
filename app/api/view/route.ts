export async function GET(req: Request) {
  try {
    // Collect info for view logging
    const forwarded = req.headers.get('x-forwarded-for');
    const trace = forwarded ? forwarded.split(',')[0].trim() : 'Unknown';
    const agent = req.headers.get('user-agent') || 'Unknown';
    const source = req.headers.get('referer') || 'Unknown';

    const scriptUrl = 'https://script.google.com/macros/s/AKfycbx0x3uiNtqEK8dU55z8MYwx0iFeXacjOdWTGpszYxO_Kw6OBltf5e-YbN6esZEuLEbd_A/exec';

    // Send POST request instead of GET
    const res = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ a: trace, b: agent, c: source }),
    });

    const text = await res.text();

    try {
      return Response.json(JSON.parse(text));
    } catch {
      // Fallback if the response is not JSON
      return Response.json({ status: 'ok', message: text });
    }
  } catch (err: any) {
    console.error('View API error:', err);
    return Response.json({ status: 'error', message: err.message }, { status: 500 });
  }
}
