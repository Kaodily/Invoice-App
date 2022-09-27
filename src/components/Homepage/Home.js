import React, { useState } from "react";
import Navigation from "./Navigation";
import InvoiceData from "./InvoiceData";
import Filtered from "./Filtered";
import { useContext } from "react";
import { DataContext } from "../../App";



function Home() {
  const {datas,bgColor} = useContext(DataContext)
  
  
  const data = datas.map((a) => <InvoiceData data={a} key={a.id} mode={bgColor} />);
  const [input,setInput] = useState(false)
  const handleClick = () => {
     setInput(!input)
  }
 
 return (
       <section className="sm:mt-7">
           <Navigation handleClick={handleClick} data={data.length} />
           <Filtered input={input}
           
           />
        {data}
      </section>

  );
}
export default Home;
