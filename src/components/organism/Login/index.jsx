import Button from "@/components/atoms/Button";
import InputForm from "@/components/molecules/InputForm";
import Link from "next/link";
import React from "react";

const Login = () => {
  // event handler untuk simulasi login
  function handleLogin(event) {
    // event.preventdefault untuk mencegah reload
    event.preventDefault();

    // menyimpan data ke local storage
    localStorage.setItem("username", event.target.username.value);
    localStorage.setItem("password", event.target.password.value);

    window.location.href = "/products";
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
