function Items(props) {
  return (
    <div className="text-[#888EB0] px-6 py-4 text-[12px]">
      <h4 className="my-4 text-[16px]  font-bold">Item List</h4>
      <div>
        <form action="">
          <div>
            <label htmlFor="Item Name">Item Name</label>
            <br />
            <input
              className="w-80 pl-2 h-10 rounded-md mb-4 mt-2 "
              style={props.mode}
              type="text"
              id="Item Name"
              name="itemName"
              onChange={props.handleChange}
            />
            <br />
            <div className="flex mb-3 ">
              <div>
                <label htmlFor="Qty">Qty</label>
                <br />
                <input
                  className="w-14 pl-4 h-10 rounded-md mb-4 mt-2 mr-3"
                  style={props.mode}
                  type="text"
                  id="Qty"
                  name="quantity"
                  onChange={props.handleChange}
                />
                <br />
              </div>
              <div>
                <label htmlFor="Price">Price</label>
                <br />
                <input
                  className="w-20 h-10 rounded-md pl-4 mb-4 mt-2 mr-3"
                  style={props.mode}
                  type="text"
                  id="Price"
                  name="price"
                  onChange={props.handleChange}
                />
                <br />
              </div>
              <div>
                <label htmlFor="Total">Total</label>
                <br />
                <input
                  className="w-20  h-10 rounded-md pl-1 mb-4 mt-2 mr-12 bg-[#141625] "
                  type="text"
                  id="Total"
                  name="total"
                  onChange={props.handleChange}
                //   value={props.form.quantity * props.form.price}
                  disabled
                />
                <br />
              </div>

              <div>
                <img
                  src="../assets/icon-delete.svg"
                  alt="delete"
                  className="mt-10"
                />
              </div>
            </div>
          </div>
          <p className="h-10 bg-[#252945] text-center pt-3 mt-7 mb-5 rounded-3xl">
            +Add New Item
          </p>
        </form>
      </div>
    </div>
  );
}
export default Items;
