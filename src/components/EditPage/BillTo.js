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
          value={formik.values.clientEmail}
          onChange={formik.handleChange}
          type="text"
          name="clientEmail"
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
          value={formik.values.clientAddress.street}
          onChange={formik.handleChange}
          type="text"
          id="Street Address"
          style={mode}
          name="clientAddress.street"

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
              value={formik.values.clientAddress.city}
              onChange={formik.handleChange}
              type="text"
              id="City"
              style={mode}
          name="clientAddress.city"

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
              value={formik.values.clientAddress.postCode}
              onChange={formik.handleChange}
              style={mode}
              type="text"
              id="Post Code"
              name="clientAddress.postCode"

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
          value={formik.values.clientAddress.country}
          onChange={formik.handleChange}
          style={mode}
          type="text"
          id="Country"
          name="clientAddress.country"

        />
        <br />
        <label className=" " htmlFor="Invoice Date">
          Invoice Date
        </label>
        <br />
        <input
          className="w-80 pl-2 h-10 rounded-md bg-[#252945] mb-4 mt-2 "
          value={formik.values.createdAt}
          type="text"
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
          name="paymentTerms"
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
          value={formik.values.description}
          onChange={formik.handleChange}
          type="text"
          style={mode}
          name="description"

          id="Project / Description"
        />
        <br />
      </form>
    </div>
  );
}
export default FormTo;
