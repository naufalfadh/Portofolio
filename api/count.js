import { createClient } from '@vercel/kv';

// Koneksi ke Vercel KV dengan variabel lingkungan
const kv = createClient({
  url: process.env.KV_URL,
  token: process.env.KV_REST_API_TOKEN,
});

export default async function handler(req, res) {
  try {
    // Ambil jumlah pengunjung saat ini dari KV, jika tidak ada, default ke 0
    let count = await kv.get('visitor_count');
    if (!count) {
      count = 0;
    }

    // Tambahkan 1 ke jumlah pengunjung
    const newCount = Number(count) + 1;

    // Simpan kembali jumlah baru ke KV
    await kv.set('visitor_count', newCount);

    // Kirim respons dengan jumlah pengunjung baru
    res.status(200).json({ count: newCount });
  } catch (error) {
    console.error("Error while updating visitor count:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}