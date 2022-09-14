function FormTo({ data, formik, mode }) {
  return (
    <div className="text-[#888EB0] px-6 text-[12px]">
      <h6 className="text-[12px] text-[#7C5DFA] font-bold mb-3">Bill From</h6>

      <form action="">
        <label className=" " htmlFor='Client"s Name'>
          Client's Name
        </label>
        <br />
        <input
          className="w-80 pl-2 h-10 rounded-md bg-[#252945] mb-4 mt-2"
          value={formik.values.clientName}
          onChange={formik.handleChange}
          type="text"
          name="clientName"
          id='Client"s Name'
          style={mode}
        />
        <br />
        <label className=" " htmlFor="Client's Name">
          Client's Email
        </label>
        <br />
        <input
          className="w-80 pl-2 h-10 rounded-md bg-[#252945] mb-4 mt-2"
          value={data.clientEmail}
          onChange={formik.handleChange}
          type="text"
          id='Client"s Email'
          style={mode}
        />
        <br />
        <label className=" " htmlFor="Street Address">
          Street Address
        </label>
        <br />
        <input
          className="w-80 pl-2 h-10 rounded-md bg-[#252945] mb-4 mt-2"
          value={data.clientAddress.street}
          onChange={formik.handleChange}
          type="text"
          id="Street Address"
          style={mode}
        />
        <br />
        <div className="flex justify-between">
          <div>
            <label className=" " htmlFor="City">
              City
            </label>
            <br />
            <input
              className="w-36 pl-2 h-10 rounded-md bg-[#252945] mb-4 mt-2"
              value={data.clientAddress.city}
              onChange={formik.handleChange}
              type="text"
              id="City"
              style={mode}
            />
            <br />
          </div>
          <div>
            <label className=" " htmlFor="Post Code">
              Post Code
            </label>
            <br />
            <input
              className="w-36 pl-2 mr-2 h-10 rounded-md bg-[#252945] mb-4 mt-2"
              value={data.clientAddress.postCode}
              onChange={formik.handleChange}
              style={mode}
              type="text"
              id="Post Code"
            />
            <br />
          </div>
        </div>
        <label className=" " htmlFor="Country">
          Country
        </label>
        <br />
        <input
          className="w-80 pl-2 h-10 rounded-md bg-[#252945] mb-4 mt-2 "
          value={data.clientAddress.country}
          onChange={formik.handleChange}
          style={mode}
          type="text"
          id="Country"
        />
        <br />
        <label className=" " htmlFor="Invoice Date">
          Invoice Date
        </label>
        <br />
        <input
          className="w-80 pl-2 h-10 rounded-md bg-[#252945] mb-4 mt-2 "
          value={data.createdAt}
          onChange={formik.handleChange}
          type="Date"
          style={mode}
          id="Invoice Date"
          disabled
        />
        <br />
        <label className=" " htmlFor="Payment Terms">
          Payment Terms
        </label>
        <br />
        <select
          name="Payment Terms"
          id="Payment Terms"
          style={mode}
          onChange={formik.handleChange}
          className="w-80 pl-2 h-10 text-[13px] px-2 rounded-md bg-[#252945] mb-4 mt-2"
        >
          <option value="Net 30days">Net 30days</option>
          <option value="Net 60days">Net 60days</option>
          <option value="Net 90days">Net 90days</option>
        </select>
        <label className=" " htmlFor="Project / Description">
          Project / Description
        </label>
        <br />
        <input
          className="w-80 pl-2 h-10 rounded-md bg-[#252945] mb-4 mt-2 "
          value={data.description}
          onChange={formik.handleChange}
          type="text"
          style={mode}
          id="Project / Description"
        />
        <br />
      </form>
    </div>
  );
}
export default FormTo;
