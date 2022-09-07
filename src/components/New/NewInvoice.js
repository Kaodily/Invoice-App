// import Header from "../Homepage/Header";
import Back from "./Back";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import Items from "./Items";
import Button from "./Button";
// import React from "react";

function NewInvoice({ handleChange,mode,color}) {
  return (
    <div>
      <Back color ={color} />
      <BillFrom handleChange={handleChange} mode={mode} />
      <BillTo handleChange={handleChange} mode={mode}/>
      <Items handleChange={handleChange} mode={mode} />
      <Button />
    </div>
  );
}
export default NewInvoice;
