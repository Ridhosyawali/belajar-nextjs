import Button from "@/components/atoms/Button";
import InputForm from "@/components/molecules/InputForm";
import { login } from "@/services/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Login = () => {
  const [errorLogin, setErrorLogin] = useState();

  const router = useRouter();

  // event handler untuk simulasi login
  async function handleLogin(event) {
    // event.preventdefault untuk mencegah reload
    event.preventDefault();

    const payload = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    try {
      const res = await login(payload);
      if (res.status) {
        localStorage.setItem("token", res.token);
        router.push("/products");
      } else {
        console.log("login error :", res.error.response.data);
        setErrorLogin(res.error.response.data);
      }
    } catch (error) {
      console.log("login failed :", error);
      setErrorLogin(error.response);
    }
  }
  return (
    // onSubmit : event handler untuk menangani aksi ketika disubmit(button = submit)
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        name="username"
        type="text"
        placeHolder="Masukkan Username"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeHolder="Masukkan Password"
      />
      <Button
        className=" bg-gradient-hover hover:bg-blue-400 text-white mt-4 w-full"
        type="submit"
        // onClick={handleLogin} // onClick : event handler untuk menangani aksi ketika button diclick
      >
        Login
      </Button>
      {errorLogin && (
        <p className="mt-4 text-center text-sm text-red-500">{errorLogin}</p>
      )}
      <p className="text-center text-sm mt-2">
        Dont have an account?{" "}
        <Link className="text-blue-700" href="/register">
          Register
        </Link>
      </p>
    </form>
  );
};

export default Login;
