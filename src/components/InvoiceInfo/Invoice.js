import { useParams } from "react-router-dom";
import Back from "../GoBack";
import Status from "./Status";
import Informations from "./Informations";
import ItemDetails from "./ItemDetails";
import Buttton from "./Button";
import Delete from "./Delete";

function Invoice({data,onDelete,mode,popup,handleClick}) {
  const { id } = useParams();
  const invoiceData = data.filter((item) => item.id === id);
  let looped;
  for (let each of invoiceData) {
    looped = each;
  }
  return (
    <div className="">
      <Back />
      <Status info={looped.status} mode={mode} />
      <div className="mx-8 mt-4 mb-5 p-2 " style={mode}>
        <Informations data={looped} mode={mode} />
        <ItemDetails item={looped} mode={mode} data ={data} />
      </div>
      <Buttton handleClick={handleClick} id={id} mode={mode} status={looped.status} />
      <Delete id={id} pop={popup} handleClick={handleClick} mode={mode} onDelete={onDelete} />
    </div>
  );
}
export default Invoice;
