import axios from "axios";

// Fungsi untuk ambil semua data product dari fakeAPI
export const getProducts = async () => {
  // menjalankannya didalam try catch
  try {
    // request GET ke url API pake axios.get
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/products`);

    // mengembalikan data product yang disimpan dalam response
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data : ", error);
  }
};
