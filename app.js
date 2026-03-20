async function testSubmit() {
  try {
    const res = await fetch("/api/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ test: "ok" })
    });
    const json = await res.json();
    console.log("Risposta:", json);
    alert("Risposta: " + JSON.stringify(json));
  } catch (err) {
    alert("Errore fetch: " + err.message);
  }
}

document.getElementById("btnInvia").addEventListener("click", testSubmit);
