import { Link } from "react-router-dom";
function InvoiceData({ data, mode }) {
  let statusStyle;
  let statusStyles;
  switch (data.status) {
    case "paid":
      statusStyle = {
        color: "#33D69F",
        backgroundColor: "#979797",
      };
      break;
    case "pending":
      statusStyle = {
        color: "#FF8F00",
        backgroundColor: "#979797",
      };
      break;
    case "draft":
      statusStyle = {
        color: "#fff",
        backgroundColor: "#979797",
      };
      break;
    default:
      statusStyle = {
        backgroundColor: "#fff",
      };
  }
  switch (data.status) {
    case "paid":
      statusStyles = {
        backgroundColor: "#33D69F",
      };
      break;
    case "pending":
      statusStyles = {
        backgroundColor: "#FF8F00",
      };
      break;
    case "draft":
      statusStyles = {
        backgroundColor: "#fff",
      };
      break;
    default:
      statusStyles = {
        backgroundColor: "#fff",
      };
  }
  const looped =
    data.items.length >= 2
      ? data.items
          .map((item) => item.price * item.quantity)
          .reduce((a, b) => a + b)
      : data.items
          .map((item) => item.price * item.quantity)
          .reduce((a, b) => a + b);
  // console.log(looped)
  return (
    <Link
      to={{
        pathname: `/invoice/${data.id}`,
      }}
    >
      <div className="p-4 m-5 sm:mt-8 rounded-md" style={mode}>
        <div className="flex justify-between ">
        <div className=" md:flex md:justify-start mb-5">
          <p className="text-[13px] font-bold">#{data.id}</p>
            <h4 className="text-[15px] font-bold mt-1">£{looped}</h4>
          </div>
          <p className="text-[13px]  font-bold text-[#888EB0]">
            {data.clientName}
          </p>
        </div>
        <div className ="">
        
          <div className="flex justify-between">
          <p className="text-[12px]  font-bold text-[#888EB0]">
              Due {data.paymentDue}
            </p>
          <div
            className="w-20 text-center flex justify-center item-center rounded-md pt-1 h-9 bg-black"
            style={statusStyle}
          >
            <div
              className="w-[7px] mt-[9px] mr-1 h-[7px] rounded-full"
              style={statusStyles}
            ></div>
            <p className="text-[12px] mt-1">
              {data.status.slice(0, 1).toUpperCase() + data.status.slice(1)}
            </p>
          </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default InvoiceData;
