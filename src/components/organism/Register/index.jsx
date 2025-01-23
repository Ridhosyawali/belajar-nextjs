import Button from "@/components/atoms/Button";
import InputForm from "@/components/molecules/InputForm";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <form>
      <InputForm
        label="Username"
        name="username"
        type="text"
        placeHolder="Masukkan Username"
      />
      <InputForm
        label="Email"
        name="email"
        type="text"
        placeHolder="Masukkan email"
      />
      <InputForm
        label="Password"
        name="password"
        type="text"
        placeHolder="Masukkan Password"
      />
      <Button className="bg-gradient-hover text-white mt-4 w-full">
        Register
      </Button>
      <p className="text-center text-sm mt-2">
        Already have account?{" "}
        <Link className="text-blue-700" href="/login">
          Login
        </Link>
      </p>
    </form>
  );
};

export default Register;
