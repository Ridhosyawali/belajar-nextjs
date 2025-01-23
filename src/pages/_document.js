import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

/** File ini dibuat otomatis di folder/src\
 * fungsinya untuk menyesuaikan atau menambahkan informasi tambahan ke project kita
 * strukturnya seperti <Head> pada HTML
 *
 * digunakan saat mau menambahkan elemen ke dalam <head> yang berlaku untuk seluruh halaman(global)
 * seperti inject tag <script>, install google analytics, google tag manager dll
 *
 *
 * digunakan saat menerapkan konfigurasi SEO(Search engine optimization)
 */
