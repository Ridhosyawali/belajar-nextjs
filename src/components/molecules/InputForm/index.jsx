import Input from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";
import React from "react";

const InputForm = ({ label, name, type, placeholder }) => {
  return (
    <div className="flex flex-col ">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} id={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
