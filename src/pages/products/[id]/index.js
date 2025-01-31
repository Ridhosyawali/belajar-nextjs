import { getProductById } from "@/services/product";
import axios from "axios";
import Image from "next/image";
import React from "react";
import useSWR from "swr";

/**
 * useSWR (Stale while revalidate) : hooks third party dari tim vercel
 * digunakan untuk fetching data, caching dan validate di sisi client
 * rumus : const data = useSWR("key atau endpoint", datafetcher);
 * swr punya beberapa properti
 * data: Data yang diambil dari API
 * error: error handling saat mengambil data
 * isLoading: status loading
 * isValidating : status validasi ulang data(perbaharui data)
 */
const ProductDetailPage = ({ detailProduct }) => {
  const api = process.env.NEXT_PUBLIC_API;

  const { data } = useSWR(
    `${api}/products/${detailProduct.id}`,
    async () => {
      const res = await axios.get(`${api}/products/${detailProduct.id}`);
      return res.data;
    },
    {
      initialData: detailProduct,
    }
  );

  return (
    <>
      <div className="flex flex-col px-5 py-5 bg-gradient-to-b from-black to-blue-900 min-h-screen">
        <h1 className="text-4xl font-bold text-white">Detail Product</h1>
        <div className="mt-5 rounded-2xl bg-white bg-opacity-20 h-fit p-4">
          <h2 className="text-2xl font-bold text-white">{data?.title}</h2>
          <p className="text-white font-bold mt-5 text-xl">
            {data?.description}
          </p>
          <p className="text-white text-xl font-bold mt-5">{data?.price}</p>

          <Image
            src={data?.image}
            width={400}
            height={400}
            alt="gambar"
            className="w-[200px]"
          />
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  //   console.log("ini isi context :", context.query.id);

  const id = context.query.id;

  try {
    const detailProduct = await getProductById(id);

    //validasi kalo misal data tidak ditemukan kembalikan 404
    if (!detailProduct) {
      return {
        notFound: true,
      };
    }
    return {
      props: { detailProduct },
    };
  } catch (error) {
    console.log(error);

    return {
      props: { error },
    };
  }
}

export default ProductDetailPage;
