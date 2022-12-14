import React, { useState } from 'react';

function Items({formik,mode}) {
  let obj = [{
    itemName: 'Item Name',
    quantity: 'Qty',
    price: 'Price',
    total: 'Total'
  }]
  const [item, setItem] = useState(obj)
  const addHandleClick = () => {
    setItem(prev => [...item, obj])
     
  }
  const deleteHandleClick = (id) => {
  setItem(prev => prev.filter(item => item !== id))
  }
  
  
  let total = (formik.values.items[0].quantity && formik.values.items[0].price) ? formik.values.items[0].quantity * formik.values.items[0].price : ''
  const m = item.map((item, index) => {
    return (
      <div key={index}>
        <form action="">
        <div>
            <label htmlFor="Item Name">Item Name</label>
        <br />
        <input
          className="w-[100%] pl-2 h-10 rounded-md mb-4 mt-2 "
          style={mode}
          type="text"
          id="Item Name"
          name="items[0].name"
          onChange={formik.handleChange}
        />
            <br />
            <div className="flex mb-3 ">
          <div>
                <label htmlFor="Qty">Quantity</label>
            <br />
            <input
              className="w-[60%] pl-4 h-10 rounded-md mb-4 mt-2 mr-3"
              style={mode}
              type="text"
              id="Qty"
              name='items[0].quantity'
              onChange={formik.handleChange}
            />
            <br />
          </div>
          <div>
                <label htmlFor="Price">Price</label>
            <br />
            <input
              className="w-[60%] h-10 rounded-md pl-4 mb-4 mt-2 mr-3"
              style={mode}
              type="text"
              id="Price"
              name="items[0]price"
              onChange={formik.handleChange}
              
            />
            <br />
          </div>
          <div>
                <label htmlFor="Total">Total</label>
            <br />
          <input className="w-[80%]  h-10 rounded-md pl-4 mb-4 mt-2  mr-12  "
              style={mode}
              value={total}
              disabled
         />
            <br />
             
          </div>

          <div>
              <img
              onClick={() => deleteHandleClick(item)} 
              src="./image/icon-delete.svg"
              alt="delete"
              className="mt-10 w-5"
            />
          </div>
        </div>
        
            </div>
        </form>
      </div>
    )
  })
  return (  
     <div className="text-[#888EB0] px-6 py-1 text-[12px]">
       <h4 className="my-4 text-[16px]  font-bold">Item List</h4>
      {[m]}
      <div className="text-[#888EB0] px-6 py-4 text-[12px]" onClick={addHandleClick} >
             <p className="h-10 bg-[#252945] text-center pt-3 mt-7 mb-5 rounded-3xl">
            +Add New Item
          </p>
       </div>
  </div>
  );
}
export default Items;
