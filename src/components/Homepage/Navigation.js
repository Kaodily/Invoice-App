import { Link } from "react-router-dom";
function Navigation({ mode, data, handleClick }) {
  return (
    <div className="flex justify-between pt-3 px-5 item-center " style={mode}>
      <div>
        <h5 className="text-[15px] font-bold mb-[-25px]">Invoice</h5>
        <br />
        <p className="text-[9px]">
          {data <= 0 ? "No" : data} <span>invoices</span>
        </p>
      </div>
      <div className="flex mt-2">
        <div className="flex item-center mr-3" onClick={handleClick}>
          <h6 className="text-[15px] font-bold">Filter </h6>
          <div>
            <img
              src="./assets/icon-arrow-down.svg"
              alt=""
              className="mt-2 ml-2"
            />
          </div>
        </div>
        <Link to={"/New"}>
          <div className="flex pl-1 items-center rounded-2xl h-7 w-[60px] bg-[#7C5DFA] ">
            <div className="w-5 h-5 bg-white flex justify-center mr-1  items-center rounded-full ">
              <img src="./assets/icon-plus.svg" alt="plus-sign" />
            </div>
            <p className="text-[9px] text-white">New</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Navigation;
