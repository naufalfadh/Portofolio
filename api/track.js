export default function handler(req, res) {
  const visitorData = {
    ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
    userAgent: req.headers["user-agent"],
    time: new Date().toISOString(),
  };

  console.log(visitorData); // ini akan muncul di log vercel

  // Bisa juga simpan ke database seperti Supabase / Firebase
  res.status(200).json({ message: "Visitor tracked", data: visitorData });
}
