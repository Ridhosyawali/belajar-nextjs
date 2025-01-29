/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //  untuk mengizinkan memakai gambar dari source online
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;

/** FIle ini dibuat otomatis di root project untuk mengatur konfigurasi tambahan di project next js */
