import Register from "@/components/organism/Register";
import AuthLayout from "@/components/templates/AuthLayout";
import React from "react";

function RegisterPage() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <AuthLayout
          title={"Register"}
          desc="hi, please register to your account"
        >
          <Register />
        </AuthLayout>
      </div>
    </>
  );
}

export default RegisterPage;
