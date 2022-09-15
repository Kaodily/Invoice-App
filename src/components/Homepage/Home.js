import React, { useState } from "react";
import Navigation from "./Navigation";
import InvoiceData from "./InvoiceData";
import Filtered from "./Filtered";



function Home({data,mode,color,filterHandleClick}) {
  const datas = data.map((a) => <InvoiceData data={a} key={a.id} mode={mode} />);
  const [input,setInput] = useState(false)
  const handleClick = () => {
     setInput(!input)
  }
 return (
    <div className="h-screen sm:mt-7">
      <section>
           <Navigation handleClick={handleClick} data={data.length} mode={color} />
           <Filtered input={input}
             filterHandleClick={filterHandleClick}
             mode={mode}
           />
        {datas}
      </section>

    </div>
  );
}
export default Home;
