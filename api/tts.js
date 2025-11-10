



const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${EXAVITQu4vr4xnSDxMaL}`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "xi-api-key": apiKey,
  },
  body: JSON.stringify({
    text,
    model_id: selectedModel,
    voice_settings: {
      stability: 0.35,
      similarity_boost: 0.8,
    },
  }),
});

