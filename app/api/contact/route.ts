export async function POST(req: Request) {
  try {
    const data = await req.json();

    const forwarded = req.headers.get('x-forwarded-for');
    const trace = forwarded ? forwarded.split(',')[0].trim() : 'Unknown';
    const agent = req.headers.get('user-agent') || 'Unknown';
    const source = req.headers.get('referer') || 'Unknown';

    const scriptUrl = 'https://script.google.com/macros/s/AKfycbw9g7lFA4oz7Ryz3eRp22W1M8LWENXq-exzCQdKQUvcnCbLIn4ZuE_8Y07EXwDh_X3smA/exec';

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ ...data, trace, agent, source }),
    });

    const text = await response.text();

    try {
      const result = JSON.parse(text);
      return Response.json(result);
    } catch {
      return Response.json({ status: 'ok', message: text });
    }
  } catch (err: any) {
    console.error('Contact API error:', err);
    return Response.json({ status: 'error', message: err.message }, { status: 500 });
  }
}
