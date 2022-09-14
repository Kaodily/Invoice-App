function FormFrom({id,mode,data,formik}) {

  // console.log(props)
  return (
    <div className="text-[#888EB0] px-6 text-[12px]">
      <div>
        <h2 className="text-[20px] mb-3 font-bold">Edit #{id}</h2>
        <h6 className="text-[12px] text-[#7C5DFA] font-bold">Bill From</h6>
        <div className="mt-3">
          <form action="">
            <label htmlFor="Street Address">Street Address</label>
            <br />
            <input
              className="w-80 h-10 rounded-md bg-[#252945] mb-4 pl-2 mt-2"
              style={mode}
              onChange={formik.handleChange}
              value={data.senderAddress.street}
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
                  className="w-36 h-10 rounded-md bg-[#252945]  pl-2 mb-4 mt-2"
                   value={data.senderAddress.city}
                  type="text"
                  id="City"
              style={mode}
              onChange={formik.handleChange}

                />
                <br />
              </div>
              <div>
                <label className=" " htmlFor="Post Code">
                  Post Code
                </label>
                <br />
                <input
                  className="w-36 mr-2 h-10 rounded-md bg-[#252945] pl-2  mb-4 mt-2"
                   value={data.senderAddress.postCode}
                  type="text"
                  id="Post Code"
                 style={mode}
              onChange={formik.handleChange}

                />
                <br />
              </div>
            </div>
            <label className=" " htmlFor="Country">
              Country
            </label>
            <br />
            <input
                          className="w-80 h-10 rounded-md bg-[#252945] pl-2  mb-4 mt-2 "
                          value={data.senderAddress.country}
              type="text"
              id="Country"
              style={mode}
              onChange={formik.handleChange}

            />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}
export default FormFrom;