import { useParams } from "react-router-dom";
// import Header from "./Header";
import Back from "./Back"
import FormFrom from "./BillFrom";
import FormTo from "./BillTo";
import Items from "./Items";
import Button from "./Button";
// import data from "../data.json";

function Edit({data,formik,mode,color}) {
  const { id } = useParams();
  const invoiceData = data.filter((item) => item.id === id);
  let looped;
  for (let each of invoiceData) {
    looped = each;
  }
  formik.values.clientName = looped.clientName
  return (
    <div className="">
      <Back
        id={id}
        color ={color} 
      />
      <FormFrom id={id} data={looped} mode={mode} formik={formik} />
      <FormTo data ={looped}  mode={mode} formik={formik} />
      <Items data ={looped} mode={mode}/>
      <Button data={looped} mode={mode}  />
    </div>
  );
}
export default Edit;
