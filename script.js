async function generateVoice() {
  const text = document.getElementById("text-input").value;
  const voice = document.getElementById("voice-select").value;
  const model = document.getElementById("model-select").value;

  document.getElementById("status").innerText = "⏳ جاري توليد الصوت...";

  try {
    const response = await fetch("/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, voice, model_id: model }),
    });

    if (!response.ok) {
      throw new Error("❌ فشل توليد الصوت");
    }

    const blob = await response.blob();
    const audioUrl = URL.createObjectURL(blob);
    const player = document.getElementById("audio-player");
    player.src = audioUrl;
    player.play();

    document.getElementById("status").innerText = "✅ تم توليد الصوت بنجاح!";
  } catch (error) {
    alert("⚠️ فشل توليد الصوت: " + error.message);
    document.getElementById("status").innerText = "❌ فشل توليد الصوت";
  }
}
