import { BrowserRouter, Routes, Route} from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Homepage/Header";
import Home from "./components/Homepage/Home";
import EmptyInvoice from "./components/SecondPage/EmptyInvoice";
import Invoice from "./components/ThirdPage/Invoice";
import Edit from "./components/EditPage/Edit";
import data from "./components/data.json";
import NewInvoice from "./components/New/NewInvoice";


// import data from "./components/data.json";

function App() {
  
  const [datas, setDatas] = useState(data)
  

  const onDelete = (id) => {
    setDatas(prev => prev.filter(item => item.id !== id))
    
  }
  // const handleClicker = (status) => {
  //   setDatas(prev => status === 'pending' ? prev.status = 'paid' : prev.status = 'paid' )
  //   // status = 'hello'
  //   // console.log('hello')
  // }
   
  const [dataFrom, setDataFrom] = useState( {
    createdAt: "",
    paymentDue: "",
    description: "",
    paymentTerms: '',
    clientName: "",
    clientEmail: "",
    status: "",
    senderAddress: {
      street: "",
      city: "",
      postCode: "",
      country: ""
    },
    clientAddress: {
      street: "",
      city: "",
      postCode: "",
      country: ""
    },
    items: [
      {
        name: "",
        quantity: "",
        price: "",
        total: ""
      }
    ],
    total: ""
  });
  // console.log(dataFrom);

  const handleChange = (e) => {
    setDataFrom((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
       
      };
    });

  };
  // const newData = () => {
  //   // setDataFrom(prev => {
  //   //   return {
  //   //     ...prev,
  //   //     status: 'paid',
  //   //     total: dataFrom.quantity * dataFrom.price,
  //   //     id:1
  //   //   }
  //   // } )
  //   // console.log(dataFrom)
  //   // setDatas(prev => {
  //   //   return [
  //   //     ...prev,
  //   //   dataFrom
  //   //   ]
  //   // })
  //   console.log(dataFrom);
  // }
  // console.log(datas)
  const [mode, setMode] = useState('./assets/icon-sun.svg')
  const [color, setColor] = useState({ backgroundColor: '#141625',color:'white'})
  const [bgColor, setBgColor] = useState({ backgroundColor: '#1E2139',color: 'white',boxShadow: '3px 3px 5px 0 gray'})

  // let styled= {backgroundColor: 'red' }
  const modeHandleCick = () => {
    setMode(prev => prev === './assets/icon-sun.svg' ? './assets/icon-moon.svg' : './assets/icon-sun.svg')
    setColor(prev => mode === './assets/icon-sun.svg' ? { backgroundColor: '#F8F8FB', color: 'black', transition:'0.5s'} : { backgroundColor: '#141625',color:'white',transition:'0.5s'})
    setBgColor(prev => mode === './assets/icon-sun.svg' ? { backgroundColor: 'white',color:'black',transition:'0.7s', boxShadow: '3px 3px 5px 0 gray'}:{ backgroundColor: '#1E2139', color:'white',transition:'0.7s',boxShadow: '3px 3px 5px 0 gray'})
  }
  return (
    <BrowserRouter>
      <div className="h-full " style={color}>
        <Header handleClick={modeHandleCick} image={mode} />
        {/* <img src="./assets/icon-sun.svg" alt="hhhh" /> */}
        <section className="">
          <Routes> 
            {datas.length > 0 ? 
              <Route path="/" element={<Home data={datas} mode={bgColor} color={color} />} />
              : 
            <Route path="/" element={<EmptyInvoice data={datas}/>} /> 
            }
            <Route path="/invoice/:id" element={<Invoice data={datas} onDelete={onDelete} mode={bgColor} color={color} />} exact />
            <Route path="/invoice/:id/:Edit" element={<Edit data={datas} />} />
            <Route path="/New" element={<NewInvoice handleChange={handleChange} mode={bgColor} color={color} />} />
          </Routes> 
        </section>
      </div>
     </BrowserRouter>
  );
}

export default App;