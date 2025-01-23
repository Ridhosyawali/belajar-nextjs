import Button from "@/components/atoms/Button";
import CardProduct from "@/components/molecules/CardProduct";
import React, { useEffect, useState } from "react";

///anggap data dari api/be

const data = [
  {
    id: 1,
    image: "/photo.jpg",
    title: "Odeng",
    desc: "Lorem ipsum dolor sit amet.",
    price: "1234567",
  },
  {
    id: 1,
    image: "/file.svg",
    title: "file",
    desc: "Lorem ipsum dolor sit amet.",
    price: "1234567",
  },
  {
    id: 1,
    image: "/next.svg",
    title: "next js",
    desc: "Lorem ipsum dolor sit amet.",
    price: "1234567",
  },
];
const ProductPage = () => {
  const [username, setUsername] = useState("");

  // useEffect digunakan untul menangani side efek dari perubahan suatu data yang dijalankan setiap halaman di load
  useEffect(() => {
    const getUsername = setUsername(localStorage.getItem("username"));
    if (getUsername) {
      setUsername(getUsername);
    }
  }, []);
  /** [] dependensi array : kalo kosong buat memastikan kalo useEffect dijalankan
   * hanya sekali saat pertama kali halaman di load,
   * jika ada state didalam dependensi array maka fungsinya untuk menangani perubahan state tersebut
   */

  // event handler untuk menjalankan fungsi logout dan mengapus data di local storage
  function handleLogout() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.href = "/login";
  }
  return (
    <>
      <div className="flex justify-between items-center bg-black text-white font-bold px-5 py-4">
        <h1 className="text-xl">Hi, {username}</h1>
        <Button onClick={handleLogout} className={"bg-red-500"}>
          Logout
        </Button>
      </div>
      <div className="flex min-h-screen items-center justify-center gap-2">
        {/* nested component */}
        <CardProduct>
          <CardProduct.Header image={"/photo.jpg"} />
          <CardProduct.Body
            title={"Odeng"}
            desc={"Lorem ipsum dolor sit amet."}
          />
          <CardProduct.Footer price={"12000"} />
        </CardProduct>

        {/* Rendering list : teknik untuk menampilkan beberapa elemen UI tertentu berdasarkan data dinamis
        yang disimpan dalam sebuah JSON */}
        {data.map((item) => (
          <CardProduct key={item.id}>
            <CardProduct.Header image={item.image} />
            <CardProduct.Body title={item.title} desc={item.desc} />
            <CardProduct.Footer price={item.price} />
          </CardProduct>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
