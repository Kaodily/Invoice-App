function FormFrom(props) {
  return (
    <div className="text-[#888EB0] px-6 text-[12px]">
      <div>
        <h2 className="text-[20px] mb-3 font-bold">New Invoice</h2>
        <h6 className="text-[12px] text-[#7C5DFA] font-bold">Bill From</h6>
        <div className="mt-3">
          <form action="">
            <label htmlFor="Street Address">Street Address</label>
            <br />
            <input
              className="w-80 h-10 rounded-md  mb-4 pl-2 mt-2"
              style={props.mode}
              name="streetName"
              onChange={props.handleChange}
              type="text"
              id="Street Address"
            />
            <br />
            <div className="flex justify-between">
              <div>
                <label className=" " htmlFor="City">
                  City
                </label>
                <br />
                <input
                   style={props.mode}
                  className="w-36 h-10 rounded-md   pl-2 mb-4 mt-2"
                  name="city"
                  type="text"
                  onChange={props.handleChange}
                  id="city"
                />
                <br />
              </div>
              <div>
                <label className=" " htmlFor="Post Code">
                  Post Code
                </label>
                <br />
                <input
                  onChange={props.handleChange}
                  style={props.mode}
                  className="w-36 mr-2 h-10 rounded-md  pl-2  mb-4 mt-2"
                  type="text"
                  id="Post Code"
                  name="postCode"
                />
                <br />
              </div>
            </div>
            <label className=" " htmlFor="Country">
              Country
            </label>
            <br />
            <input
              onChange={props.handleChange}
              className="w-80 h-10 rounded-md pl-2  mb-4 mt-2 "
              style={props.mode}
              type="text"
              id="Country"
              name="country"
            />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}
export default FormFrom;
