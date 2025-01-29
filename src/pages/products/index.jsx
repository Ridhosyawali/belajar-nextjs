import Button from "@/components/atoms/Button";
import CardProduct from "@/components/molecules/CardProduct";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { data } from "@/constant/product";

///anggap data dari api/be

const ProductPage = () => {
  const [username, setUsername] = useState("");
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // useEffect digunakan untul menangani side efek dari perubahan suatu data yang dijalankan setiap halaman di load
  useEffect(() => {
    const getUsername = setUsername(localStorage.getItem("username"));
    if (getUsername) {
      setUsername(getUsername);
    }

    // ambil data dari localstorage lalu parsing, tambahkan logic agar maping tidak error
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);
  /** [] dependensi array : kalo kosong buat memastikan kalo useEffect dijalankan
   * hanya sekali saat pertama kali halaman di load,
   * jika ada state didalam dependensi array maka fungsinya untuk menangani perubahan state tersebut
   */

  // fungsi untuk menambahkan product ke cart
  const handlerAddToCart = (id) => {
    // logic untuk mengecek kalau di product terdapat id yang sama maka qty akan ditambahkan 1
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      // kalau fungsi hanya sekali ditrigger maka hanya akan menambahkan 1 product saja ke cart
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  useEffect(() => {
    if (cart.length > 0) {
      const sumTotal = cart.reduce((total, item) => {
        const product = data.find((product) => product.id === item.id);
        return total + product.price * item.qty;
      }, 0);
      setTotal(sumTotal);

      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // event handler untuk menjalankan fungsi logout dan mengapus data di local storage
  function handleLogout() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("cart");
    window.location.href = "/login";
  }
  return (
    <>
      <div className="flex justify-between items-center bg-black text-white font-bold px-5 py-4">
        <h1 className="text-xl">Hi, {username}</h1>
        <Button
          buttonClassname={"bg-red-500 hover:bg-red-700"}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
      <div className="flex px-5 py-8">
        {/* products */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-blue-500 uppercase mb-4">
            Products
          </h1>
          <div className="flex flex-wrap gap-4">
            {data.map((item) => (
              <CardProduct key={item.id}>
                <CardProduct.Header image={item.image} />
                <CardProduct.Body title={item.title} desc={item.description} />
                <CardProduct.Footer
                  price={item.price}
                  handleAddToCart={handlerAddToCart}
                  id={item.id}
                />
              </CardProduct>
            ))}
          </div>
        </div>

        {/* cart */}
        {(cart.length > 0 && (
          <div className="w-2/8">
            <h1 className="text-3xl font-bold text-blue-500 mb-4 uppercase">
              Cart
            </h1>
            <div className="flex flex-col gap-2">
              {cart.map((item) => {
                const datas = data.find((data) => data.id === item.id);
                return (
                  <div className="flex p-4 border rounded-lg">
                    <Image
                      className="rounded"
                      width={100}
                      height={100}
                      src={datas.image}
                      alt="cart image"
                    />
                    <div className="flex justify-between w-full">
                      <div className="flex flex-col justify-between ml-3">
                        <span className="font-bold text-xl">{datas.title}</span>
                        <span className="font-semibold">Rp. {datas.price}</span>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <span className="mb-1">Qty</span>
                        <span className="flex justify-center items-center font-semibold p-2 border rounded-sm text-center w-10 h-10">
                          {item.qty}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between px-4 py-2 border mt-2 font-semibold rounded-lg">
              <span>Total</span>
              <span>Rp. {total}</span>
            </div>
          </div>
        )) || (
          <div className="flex justify-between px-4 py-2 border mt-2 font-semibold rounded-lg h-fit">
            <span>Anda belum menambahkan product ke cart</span>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductPage;
