export async function GET(req: Request) {
  try {
    const forwarded = req.headers.get('x-forwarded-for');
    const trace = forwarded ? forwarded.split(',')[0].trim() : 'Unknown';
    const agent = req.headers.get('user-agent') || 'Unknown';
    const source = req.headers.get('referer') || 'Unknown';

    const scriptUrl = 'https://script.google.com/macros/s/AKfycbw9g7lFA4oz7Ryz3eRp22W1M8LWENXq-exzCQdKQUvcnCbLIn4ZuE_8Y07EXwDh_X3smA/exec';
    const url = `${scriptUrl}?a=${encodeURIComponent(trace)}&b=${encodeURIComponent(agent)}&c=${encodeURIComponent(source)}`;

    const res = await fetch(url);
    const text = await res.text();

    try {
      return Response.json(JSON.parse(text));
    } catch {
      return Response.json({ status: 'ok', message: text });
    }
  } catch (err: any) {
    console.error('View API error:', err);
    return Response.json({ status: 'error', message: err.message }, { status: 500 });
  }
}
