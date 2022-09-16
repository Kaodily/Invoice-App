function FormFrom({ mode, formik }) {
  // console.log(formik)
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
              className="w-[100%] h-10 rounded-md  mb-4 pl-2 mt-2"
              style={mode}
              name="senderAddress.street"
              onChange={formik.handleChange}
              type="text"
              id="Street Address"
            />
            <br />
            <div className="flex justify-between">
              <div>
                <label  htmlFor="City">
                  City
                </label>
                <br />
                <input
                   style={mode}
                  className="w-[100%] h-10 rounded-md   pl-2 mb-4 mt-2"
                  name="senderAddress.city"
                  type="text"
                  onChange={formik.handleChange}
                  id="city"
                />
                <br />
              </div>
              <div>
                <label htmlFor="Post Code">
                  Post Code
                </label>
                <br />
                <input
                  onChange={formik.handleChange}
                  style={mode}
                  className="w-[100%] mr-2 h-10 rounded-md  pl-2  mb-4 mt-2"
                  type="text"
                  id="Post Code"
                  name="senderAddress.postCode"
                />
                <br />
              </div>
            </div>
            <label className=" " htmlFor="Country">
              Country
            </label>
            <br />
            <input
              onChange={formik.handleChange}
              className="w-[100%] h-10 rounded-md pl-2  mb-4 mt-2 "
              style={mode}
              type="text"
              id="Country"
              name="senderAddress.country"
            />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}
export default FormFrom;
