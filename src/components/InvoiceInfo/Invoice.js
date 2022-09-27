import { useParams } from "react-router-dom";
import Back from "../GoBack";
import Status from "./Status";
import Informations from "./Informations";
import ItemDetails from "./ItemDetails";
import Buttton from "./Button";
import Delete from "./Delete";
import { useContext } from "react";
import { DataContext } from "../../App";

function Invoice({ popup}) {
  const {datas,bgColor} = useContext(DataContext)
  const { id } = useParams();
  const invoiceData = datas.filter((item) => item.id === id);
  let looped;
  for (let each of invoiceData) {
    looped = each;
  }
  return (
    <div className="">
      <Back />
      <Status info={looped.status} mode={bgColor} />
      <div className="mx-8 mt-4 mb-5 p-2 " style={bgColor}>
        <Informations data={looped} mode={bgColor} />
        <ItemDetails item={looped} mode={bgColor} data ={bgColor} />
      </div>
      <Buttton  id={id} mode={bgColor} status={looped.status} />
      <Delete id={id} pop={popup}  mode={bgColor}  />
    </div>
  );
}
export default Invoice;
