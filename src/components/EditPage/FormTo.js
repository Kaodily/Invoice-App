function FormTo(props) {
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
                  value={props.data.clientName}
          type="text"
          id='Client"s Email'
        />
        <br />
        <label className=" " htmlFor="Client's Name">
          Client's Email
        </label>
        <br />
        <input
                  className="w-80 pl-2 h-10 rounded-md bg-[#252945] mb-4 mt-2"
                  value={props.data.clientEmail}
          type="text"
          id='Client"s Email'
        />
        <br />
        <label className=" " htmlFor="Street Address">
          Street Address
        </label>
        <br />
        <input
                  className="w-80 pl-2 h-10 rounded-md bg-[#252945] mb-4 mt-2"
                  value={props.data.clientAddress.street}
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
                          className="w-36 pl-2 h-10 rounded-md bg-[#252945] mb-4 mt-2"
                  value={props.data.clientAddress.city}
              type="text"
              id="City"
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
                  value={props.data.clientAddress.postCode}
                          
              type="text"
              id="Post Code"
            />{" "}
            <br />
          </div>
        </div>
        <label className=" " htmlFor="Country">
          Country
        </label>
        <br />
        <input
                  className="w-80 pl-2 h-10 rounded-md bg-[#252945] mb-4 mt-2 "
                  value={props.data.clientAddress.country}
                  
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
          value={props.data.createdAt}
          type="Date"
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
          value={props.data.description}
          type="text"
          id="Project / Description"
        />
        <br />
      </form>
    </div>
  );
}
export default FormTo;
