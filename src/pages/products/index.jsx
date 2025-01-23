import CardProduct from "@/components/molecules/CardProduct";
import React from "react";

const ProductPage = () => {
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
  return (
    <>
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
