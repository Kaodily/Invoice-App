// import Header from "../Homepage/Header";
import Back from "../GoBack";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import Items from "./Items";
import Button from "./Button";


function NewInvoice({ mode,  formik }) {
  return (
    <div >
      <Back />
      <BillFrom formik={formik} mode={mode} />
      <BillTo formik={formik} mode={mode}/>
      <Items formik={formik} mode={mode}  />
      <Button mode={mode}  />
    </div>
  );
}
export default NewInvoice;
 