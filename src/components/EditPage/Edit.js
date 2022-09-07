import { useParams } from "react-router-dom";
// import Header from "./Header";
import Back from "./Back"
import FormFrom from "./FormFrom";
import FormTo from "./FormTo";
import Items from "./Items";
import Button from "./Button";
// import data from "../data.json";

function Edit(props) {
  const { id } = useParams();
  const invoiceData = props.data.filter((item) => item.id === id);
  let looped;
  for (let each of invoiceData) {
    looped = each;
  }

  console.log(invoiceData)
  return (
    <div className="">
      <Back
        id={id}
      />
      <FormFrom id={id} data ={looped} />
      <FormTo data ={looped} />
      <Items data ={looped}/>
      <Button data={looped}  />
    </div>
  );
}
export default Edit;
