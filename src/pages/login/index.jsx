import Input from "@/components/atoms/Input";
import Login from "@/components/organism/Login";
import AuthLayout from "@/components/templates/AuthLayout";
import React from "react";

function LoginPage() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <AuthLayout title={"login"} desc="hi, please login to your account">
          <Login />
        </AuthLayout>
      </div>
    </>
  );
}

export default LoginPage;
