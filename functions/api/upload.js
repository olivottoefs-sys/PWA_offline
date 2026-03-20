export async function onRequestPost({ request }) {
  try {
    const data = await request.json();
    console.log("Ricevuto payload:", data);

    // Risposta di test
    return new Response(JSON.stringify({ ok: true, message: "Backend funzionante 🚀" }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: err.message }), {
      headers: { "Content-Type": "application/json" },
    });
  }
}
