import React, { useState } from "react";
import Back from "./Back";
import Status from "./Status";
import Info from "./Info";
import Payment from "./Payment";
// import data from "../data.json";
import { useParams } from "react-router-dom";
import Buttton from "./Button";
import Delete from "./Delete";
// import Header from "../Homepage/Header";


function Invoice({data, onDelete,handleClicker,mode,color}) {
  const { id } = useParams();

  const invoiceData = data.filter((item) => item.id === id);
  let looped;
  for (let each of invoiceData) {
    looped = each;
  }
  const [popup, setPopup] = useState(false);
  const handleClick = () => {
    setPopup(!popup);
  };
 
  
 

  return (
    <div className="h-full ">
      <Back color={color}/>
      <Status info={looped.status} mode={mode} />
      <div className="h-full mx-8 mt-4 mb-5 p-2 " style={mode}>
        <Info data={looped} mode={mode} />
        <Payment payment={looped} mode={mode} />
      </div>
      <Buttton handleClick={handleClick} id={id} mode={mode}/>
      <Delete id={id} pop={popup} handleClick={handleClick} onDelete={onDelete} />
    </div>
  );
}
export default Invoice;
