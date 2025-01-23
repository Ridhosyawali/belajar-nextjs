import Button from "@/components/atoms/Button";
import InputForm from "@/components/molecules/InputForm";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <form>
      <InputForm
        label="Username"
        name="username"
        type="text"
        placeHolder="Masukkan Username"
      />
      <InputForm
        label="Password"
        name="password"
        type="text"
        placeHolder="Masukkan Password"
      />
      <Button className=" bg-gradient-hover hover:bg-blue-400 text-white mt-4 w-full">
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
