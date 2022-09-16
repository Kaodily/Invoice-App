function FormTo({ handleChange, mode, formik }) {
  const currentDate = new Date()
  const createdDate = currentDate.toISOString().slice(0,10)
  return (
    <div className="text-[#888EB0] px-6 text-[12px]">
      <h6 className="text-[12px] text-[#7C5DFA] font-bold mb-3">Bill To</h6>

      <form action="">
        <label className=" " htmlFor='Client"s Name'>
          Client's Name
        </label>
        <br />
        <input
          name="clientName"
          className="w-[100%] pl-2 h-10 rounded-md  mb-4 mt-2"
          style={mode}
          type="text"
          id='Client"s Email'
          onChange={formik.handleChange}
        />
        <br />
        <label className=" " htmlFor="Client's Name">
          Client's Email
        </label>
        <br />
        <input
          name="clientEmail"
          className="w-[100%] pl-2 h-10 rounded-md  mb-4 mt-2"
          style={mode}
          type="text"
          id='Client"s Email'
          onChange={formik.handleChange}
        />
        <br />
        <label className=" " htmlFor="Street Address">
          Street Address
        </label>
        <br />
        <input
          name="clientAddress.street"
          className="w-[100%] pl-2 h-10 rounded-md  mb-4 mt-2"
          style={mode}
          type="text"
          id="Street Address"
          onChange={formik.handleChange}
        />
        <br />
        <div className="flex justify-between">
          <div>
            <label className=" " htmlFor="City">
              City
            </label>
            <br />
            <input
              name="clientAddress.city"
              className="w-[100%] pl-2 h-10 rounded-md  mb-4 mt-2"
              style={mode}
              type="text"
              id="City"
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label className=" " htmlFor="Post Code">
              Post Code
            </label>
            <br />
            <input
              name="clientAddress.postCode"
              className="w-[100%] pl-2 mr-2 h-10 rounded-md  mb-4 mt-2"
              style={mode}
              type="text"
              id="Post Code"
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
          name="clientAddress.country"
          style={mode}
          className="w-[100%] pl-2 h-10 rounded-md  mb-4 mt-2 "
          type="text"
          id="Country"
          onChange={formik.handleChange}
        />
        <br />
        <label className=" " htmlFor="Invoice Date">
          Invoice Date
        </label>
        <br />
        <input
          name="createdAt"
          style={mode}
          className="w-[100%] placeholder-gray-500 pl-2 h-10 rounded-md  mb-4 mt-2 "
          type="text"
          id="Invoice Date"
          // onChange={formik.handleChange}
          value={createdDate}
          disabled
        />
        <br />
        <label className="" htmlFor="Payment Terms">
          Payment Terms
        </label>
        <br />
        <select
          name="paymentTerms"
          id="Payment Terms"
          onChange={formik.handleChange}
          className="w-[100%] pl-2 h-10 text-[13px] px-2 rounded-md  mb-4 mt-2"
          style={mode}
        >
          <option value="Net 30days">Choose Payment Term</option>
          <option value="Net 30days">Net 30days</option>
          <option value="Net 60days">Net 60days</option>
          <option value="Net 90days">Net 90days</option>
        </select>
        <label className=" " htmlFor="Project / Description">
          Project / Description
        </label>
        <br />
        <input
          name="description"
          style={mode}
          className="w-[100%] pl-2 h-10 rounded-md  mb-4 mt-2 "
          type="text"
          id="Project / Description"
          onChange={formik.handleChange}
        />
        <br />
      </form>
    </div>
  );
}
export default FormTo;
