import Filter from "./Filter";
import Data from "./Data";
// import Header from "./Header";
import FilterInput from "./FilterInput";
import React, { useState } from "react";
// import data from "../data.json";


function Home({data, mode,color}) {
  const datas = data.map((a) => <Data data={a} key={a.id} mode={mode} />);
  const [input,setInput] = useState(false)
  // const [checkbox, setCheckbox] = useState({
  //   isPaid: false,
  //   isPending: false,
  //   isDraft: false

  // })
  const handleClick = () => {
     setInput(!input)
  }
  
  const handleChange = (e) => {
    // let { name,checked} = e.target
    // const filtered = info.filter(a => a.status === name)
    // console.log(filtered)
  //   setInfo(prev =>{
  //     let checkboxes = e.checkbox
  //     return checkboxes[name] = checked
  // })

    
    // const looped =  )
    // setInfo(prev => prev.filter(a => e.target.name === a.status))
    
    // console.log(looped)
    // let filtered = fruits.filter(a => a.includes(e.target.value))
    // setItem(prev => filtered.length === 0 ? fruits : filtered)
    // setInfo(prev => {
    //   return {
    //     ...prev,
    //   // inputted === looped?console.log('hi') :console.log('Hello')
    //  }
    // })
   
  }

     return (
    <div className="h-screen">
      <section className=" ">
           <Filter handleClick={handleClick} data={data.length} mode={color} />
           <FilterInput input={input}
            //  isTrue = {checkbox.isPaid}
             handleChange={handleChange}
           />
        {datas}
      </section>

    </div>
  );
}
export default Home;
