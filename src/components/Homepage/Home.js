import React, { useState } from "react";
import Navigation from "./Navigation";
import InvoiceData from "./InvoiceData";
import Filtered from "./Filtered";



function Home({data,mode,filterHandleClick}) {
  const datas = data.map((a) => <InvoiceData data={a} key={a.id} mode={mode} />);
  const [input,setInput] = useState(false)
  const handleClick = () => {
     setInput(!input)
  }
 
 return (
       <section className="sm:mt-7">
           <Navigation handleClick={handleClick} data={data.length} />
           <Filtered input={input}
             filterHandleClick={filterHandleClick}
             mode={mode}
           />
        {datas}
      </section>

  );
}
export default Home;
