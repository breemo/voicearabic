export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // ✅ سطر مؤقت للفحص فقط
  if (!process.env.ELEVENLABS_API_KEY) {
    return res.status(500).json({ error: "API key is missing in Vercel environment" });
  }
