import axios from "axios";

const api = process.env.NEXT_PUBLIC_API;

// Fungsi untuk ambil semua data product dari fakeAPI
export const getProducts = async () => {
  // menjalankannya didalam try catch
  try {
    // request GET ke url API pake axios.get
    const response = await axios.get(`${api}/products`);

    // mengembalikan data product yang disimpan dalam response
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data : ", error);
  }
};

export const getProductById = async (id) => {
  try {
    const res = await axios.get(`${api}/products/${id}`);
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch data : ", error);
  }
};
