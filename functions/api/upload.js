export async function onRequestPost(context) {
  try {
    const data = await context.request.json();

    console.log("DATI RICEVUTI:", data);

    // 👉 per ora ritorniamo OK (test)
    return new Response(JSON.stringify({
      success: true,
      message: "Ricevuto correttamente",
      received: data
    }), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    return new Response("Errore server: " + err.message, { status: 500 });
  }
}