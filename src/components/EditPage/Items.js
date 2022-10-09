import React, { useState } from "react";
// import del from '....../assets/icon-delete.svg'
function Items({ data, mode, formik }) {
  let obj = [
    {
      itemName: "Item Name",
      quantity: "Qty",
      price: "Price",
      total: "Total",
    },
  ];
  const [item, setItem] = useState([]);
  const addHandleClick = () => {
    setItem((prev) => [...item, obj]);
  };
  const deleteHandleClick = (id) => {
    setItem((prev) => prev.filter((item) => item !== id));
  };
  const m = item.map((item, index) => {
    return (
      <div key={index}>
        <div>
          <label htmlFor="Item Name">Item Name</label>
          <br />
          <input
            className="w-[100%] pl-2 h-10 rounded-md mb-4 mt-2 "
            style={mode}
            type="text"
            id="Item Name"
            name="items[3].name"
            onChange={formik.handleChange}
          />
          <br />
          <div className="flex mb-3 ">
            <div>
              <label htmlFor="Qty">Quantity</label>
              <br />
              <input
                className="w-[60%] pl-4 h-10 rounded-md mb-4 mt-2 "
                style={mode}
                type="text"
                id="Qty"
                name="items[3].quantity"
                onChange={formik.handleChange}
              />
              <br />
            </div>
            <div>
              <label htmlFor="Price">Price</label>
              <br />
              <input
                className="w-[60%] h-10 rounded-md pl-4 mb-4 mt-2 "
                style={mode}
                type="text"
                id="Price"
                name="items[3]price"
                onChange={formik.handleChange}
              />
              <br />
            </div>
            <div>
              <label htmlFor="Total">Total</label>
              <br />

              <input
                className="w-[75%]  h-10 rounded-md pl-4 mb-4 mt-2"
                style={mode}
                disabled
              />
              <br />
            </div>
            <div>
              <img
                src="../../image/icon-delete.svg"
                onClick={() => deleteHandleClick(item)}
                alt="delete"
                className="mt-10 w-5 "
              />
            </div>
          </div>
        </div>
      </div>
    );
  });
  const mapped = data.items.map((item, index) => {
    return (
      <div key={index}>
        <label htmlFor="Item Name">Item Name</label>
        <br />
        <input
          className="w-[100%] pl-2 h-10 rounded-md bg-[#252945] mb-4 mt-2 "
          style={mode}
          value={item.name}
          type="text"
          id="Item Name"
          onChange={formik.handleChange}
          name="formik.values.items[index].name"
        />
        <br />
        <div className="flex mb-3 ">
          <div>
            <label htmlFor="Qty">Quantity</label>
            <br />
            <input
              className="w-[60%] pl-4 h-10 rounded-md bg-[#252945] mb-4 mt-2 mr-3"
              style={mode}
              value={item.quantity}
              type="text"
              id="Qty"
              onChange={formik.handleChange}
              name={formik.values.items[index].name}
            />
            <br />
          </div>
          <div>
            <label htmlFor="Price">Price</label>
            <br />
            <input
              className="w-[60%] h-10 rounded-md pl-4 bg-[#252945] mb-4 mt-2 mr-3"
              value={item.price}
              type="text"
              id="Price"
              onChange={formik.handleChange}
              style={mode}
              name="formik.values.items[index].name"
            />
            <br />
          </div>
          <div>
            <label htmlFor="Total">Total</label>
            <br />
            <input
              className="w-[75%] h-10 rounded-md pl-3 mb-4 mt-2 mr-12 bg-[#141625] "
              value={item.total}
              type="text"
              id="Total"
              style={mode}
              onChange={formik.handleChange}
              disabled
            />
            <br />
          </div>

          <div>
            <img
              src="../../image/icon-delete.svg"
              alt="delete"
              onClick={() => deleteHandleClick(item)}
              className="mt-10 w-5"
            />
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="text-[#888EB0] px-6 py-4 text-[12px]">
      <h4 className="my-4 text-[16px]  font-bold">Item List</h4>
      <div>
        <form action="">
          {mapped}
          {[m]}
          <div
            className="text-[#888EB0] px-6 py-4 text-[12px]"
            onClick={addHandleClick}
          >
            <p className="h-10 bg-[#252945] text-center pt-3 mt-7 mb-5 rounded-3xl">
              +Add New Item
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Items;
