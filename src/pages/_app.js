import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

/** file ini dibuat oleh nextjs
 * fungsinya untuk menerapkan prilaku/elemen global yang dibutuhkan semua halaman/aplikasi nextjs
 * 1. untuk mengatur layout global
 * 2. untuk mengelola state global
 * 3. menggunakan css global yang berlaku disemua halaman
 */
