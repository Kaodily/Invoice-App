import { BrowserRouter, Routes, Route} from "react-router-dom";
import React, { useState,  createContext} from "react";
import Header from "./components/Header";
import Home from "./components/Homepage/Home";
import EmptyInvoice from "./components/EmptyHomePage/EmptyInvoice";
import Invoice from "./components/InvoiceInfo/Invoice";
import Edit from "./components/EditPage/Edit";
import data from "./components/data.json";
import NewInvoice from "./components/New/NewInvoice";
import sunImage from './assets/icon-sun.svg'
import moonImage from './assets/icon-moon.svg'
import { useFormik } from 'formik'
import './App.css'


export const DataContext = createContext(0)


function App() {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  let a = ''
  let b = ''
  const body = document.querySelector('body')

  const [backDrop,setBackDrop] = useState({})
  const random = (id) => {
    return Math.floor(Math.random() * id.length)
  }
  for (let i = 0; i < 2; i++) {
    a += letters[random(letters)]
  }
  for (let i = 0; i < 4; i++) {
    b += numbers[random(numbers)]
  }
  const [popup, setPopup] = useState(false);
  const modalHandleClick = () => {
    setPopup(!popup);
    if (popup) {
      setBackDrop({})
    } else {
      setBackDrop({
       position: 'fixed',
       top:'0',
       width:'100vw',
       height:'100vh',
       zIndex:'2',
       backgroundColor:'rgb(0, 0, 0,0.7)',
       })
    }
  };
  const currentDate = new Date()
  const [datas, setDatas] = useState(data);
  const createdDate = currentDate.toISOString().slice(0,10)
  const formik = useFormik({
    initialValues:{
      id: `${a}${b}`,
      createdAt: createdDate,
      status: '',
      paymentDue: '',
      description: "",
      paymentTerms: "",
      clientName: "",
      clientEmail: "",
     
      senderAddress: {
        street: "",
        city: "",
        postCode: "",
        country: "",
      },
      clientAddress: {
        street: "",
        city: "",
        postCode: "",
        country: "",
      },
      items: [
        {
          name: "",
          quantity: "",
          price: "",
          total: "",
        },
      ],
      total : ''
    },

  });
  let dueDate ='';
  const getDueDate = () => {
  if (formik.values.paymentTerms === 'Net 30days') {
    currentDate.setDate(currentDate.getDate() + 30).toLocaleString()
   dueDate = currentDate.toISOString().slice(0,10)
  } else if (formik.values.paymentTerms === 'Net 60days') {
    currentDate.setDate(currentDate.getDate() + 60).toLocaleString()
     dueDate =currentDate.toISOString().slice(0,10)
  } else if(formik.values.paymentTerms === 'Net 90days'){
    currentDate.setDate(currentDate.getDate() + 90).toLocaleString()
    dueDate =currentDate.toISOString().slice(0,10)
  }
    return dueDate
}
  // state for toggling dark and light image
  const [image, setImage] = useState(sunImage);
 
  // state for dark and light mode
  const [bgColor, setBgColor] = useState({
    backgroundColor: "#1E2139",
    color: "white",
    boxShadow: "3px 3px 5px 0 gray",
  });
  // event listener for light and dark mode
  const modeHandleClick = () => {
    setImage((prev) =>
      prev === sunImage
        ? moonImage
        : sunImage
    );
   
    body.classList.toggle('white')     
    setBgColor((prev) =>
      image === sunImage
        ? {
            backgroundColor: "white",
            color: "black",
            transition: "0.7s",
            boxShadow: "3px 3px 5px 0 gray",
          }
        : {
            backgroundColor: "#1E2139",
            color: "white",
            transition: "0.7s",
            boxShadow: "3px 3px 5px 0 gray",
          }
    );
  };
  // Delete invoice function
  const onDelete = (id) => {
    setPopup(prev => !prev)
    setBackDrop({})
    setDatas((prev) => prev.filter((item) => item.id !== id));
  };
  
  //  function to filter invoice data
  const filterHandleClick = (status) => {
    if (status === 'all') {
     setDatas(data)
    } else if (status === 'paid') {
      setDatas(prev => data.filter(item => item.status === status))
    } else if (status === 'pending') {
      setDatas(prev => data.filter(item => item.status === status))
    } else if (status === 'draft') {
      setDatas(prev => data.filter(item => item.status === status))
    }  
 }
 const dated = getDueDate()
  const newData = () => {
    formik.values.status = 'pending'
    formik.values.paymentDue = dated
    setDatas([formik.values, ...datas])
  }
  const draftClick = () => {
    formik.values.status = 'draft'
    formik.values.paymentDue = dated
    setDatas([formik.values, ...datas,])
  }
    
  const editHandleClick = (info) => {
  let filtered = data.filter(item => item.id !== info.values.id)
   setDatas(prev => filtered)
   setDatas(prev => [info.values,...prev])
  }  
  const markAsPaid = (id) => {
    const newState = datas.map(data => {
      if (data.id === id) {
      return {...data, status:'paid'}
      }
      return data
   })
   setDatas(newState)
  }
  return (
    <BrowserRouter>
    <DataContext.Provider value={{datas,modeHandleClick,filterHandleClick,bgColor,onDelete,modalHandleClick,editHandleClick,newData,draftClick,markAsPaid}}>
      <div style={backDrop}></div>
      <Header  image={image} />
      <section>
        <Routes>
          {datas.length > 0 ? (
            <Route
              path="/"
              element={<Home/>}
            />
          ) : (
            <Route
              path="/"
              element={<EmptyInvoice />}
            />
          )}
          <Route
            path="/invoice/:id"
            element={
              <Invoice
                popup ={popup}
              />
            }
          />
          <Route
            path="/invoice/:id/:Edit"
            element={<Edit mode={bgColor} 
             
            />}
          />
          <Route
            path="/New"
            element={
              <NewInvoice
                mode={bgColor}
                formik={formik}
              />
            }
          />
        </Routes>
      </section>
      </DataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
