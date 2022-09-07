function FormTo({ handleChange,mode}) {

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
          className="w-80 pl-2 h-10 rounded-md  mb-4 mt-2"
         style={mode}

 
          type="text"
          id='Client"s Email'
          onChange={handleChange}
        />
        <br />
        <label className=" " htmlFor="Client's Name">
          Client's Email
        </label>
        <br />
        <input
          name="clientEmail"
          className="w-80 pl-2 h-10 rounded-md  mb-4 mt-2"
         style={mode}

 
          type="text"
          id='Client"s Email'
          onChange={handleChange}
        />
        <br />
        <label className=" " htmlFor="Street Address">
          Street Address
        </label>
        <br />
        <input
          name='street'
          className="w-80 pl-2 h-10 rounded-md  mb-4 mt-2"
         style={mode}

 
          type="text"
          id="Street Address"
          onChange={handleChange}
        />
        <br />
        <div className="flex justify-between">
          <div>
            <label className=" " htmlFor="City">
              City
            </label>
            <br />
            <input
              name="city"
              className="w-36 pl-2 h-10 rounded-md  mb-4 mt-2"
         style={mode}

 
              type="text"
              id="City"
              onChange={handleChange}
            />

          </div>
          <div>
            <label className=" " htmlFor="Post Code">
              Post Code
            </label>
            <br />
            <input
              name="clientPostCode"
              className="w-36 pl-2 mr-2 h-10 rounded-md  mb-4 mt-2"
         style={mode}

 
              type="text"
              id="Post Code"
              onChange={handleChange}
            />
            <br />
          </div>
        </div>
        <label className=" " htmlFor="Country">
          Country
        </label>
        <br />
        <input
          name="clientCountry"
                  style={mode}
                  className="w-80 pl-2 h-10 rounded-md  mb-4 mt-2 "
          
          type="text"
          id="Country"
          onChange={handleChange}
        />
        <br />
        <label className=" " htmlFor="Invoice Date">
          Invoice Date
        </label>
        <br />
        <input
          name="createdAt"
                  style={mode}
                  className="w-80 pl-2 h-10 rounded-md  mb-4 mt-2 "
          
          type="Date"
          id="Invoice Date"
          onChange={handleChange}
        />
        <br />
        <label className="" htmlFor="Payment Terms">
          Payment Terms
        </label>
        <br />
        <select
          name="paymentTerms"
          id="Payment Terms"
          onChange={handleChange}
          className="w-80 pl-2 h-10 text-[13px] px-2 rounded-md  mb-4 mt-2"
         style={mode}

 
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
          name="description"
                  style={mode}
                  className="w-80 pl-2 h-10 rounded-md  mb-4 mt-2 "
          
          type="text"
          id="Project / Description"
          onChange={handleChange}
        />
        <br />
      </form>
    </div>
  );
}
export default FormTo;
