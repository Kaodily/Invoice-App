// import Header from "../Homepage/Header";
import Back from "./Back";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import Items from "./Items";
import Button from "./Button";


function NewInvoice({ mode, color, handleClick, formik, draftClick }) {
  return (
    <div>
      <Back color ={color} />
      <BillFrom formik={formik} mode={mode} />
      <BillTo formik={formik} mode={mode}/>
      <Items formik={formik} mode={mode}  />
      <Button mode={mode} handleClick={handleClick} draftClick={draftClick} />
    </div>
  );
}
export default NewInvoice;
 