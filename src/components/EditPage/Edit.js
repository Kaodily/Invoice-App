import { useParams } from "react-router-dom";
import Back from "../GoBack"
import FormFrom from "./BillFrom";
import FormTo from "./BillTo";
import Items from "./Items";
import Button from "./Button";
import { useFormik } from 'formik'

function Edit({data,mode,handleClick}) {
  const { id } = useParams();
  const invoiceData = data.filter((item) => item.id === id);
  let looped;
  for (let each of invoiceData) {
    looped = each;
  }
  let count = looped.items.length >= 2 ? 1 : 0
  const editFormik = useFormik({
    initialValues: {
      id:looped.id,
      createdAt: looped.createdAt,
      status: looped.status,
      paymentDue: looped.paymentDue,
      description: looped.description,
      paymentTerms: looped.paymentTerms,
      clientName: looped.clientName,
      clientEmail: looped.clientEmail,
     
      senderAddress: {
        street: looped.senderAddress.street,
        city: looped.senderAddress.city,
        postCode: looped.senderAddress.postCode,
        country: looped.senderAddress.country,
      },
      clientAddress: {
        street: looped.clientAddress.street,
        city: looped.clientAddress.city,
        postCode: looped.clientAddress.postCode,
        country: looped.clientAddress.country,
      },
      items: [

        {
          name: looped.items[0].name,
          quantity: looped.items[0].quantity,
          price: looped.items[0].price,
          total: looped.items[0].total,
        },
        {
          name: looped.items[count].name,
          quantity: looped.items[count].quantity,
          price: looped.items[count].price,
          total: looped.items[count].total,
        }
      ],
    }
  });
  return (
    <div>
      <Back
        id={id}
        // color ={color} 
      />
      <FormFrom id={id} data={looped} mode={mode} formik={editFormik} />
      <FormTo data ={looped}  mode={mode} formik={editFormik} />
      <Items data ={looped} mode={mode} formik={editFormik}/>
      <Button data={looped} mode={mode} formik={editFormik} handleClick={handleClick} />
    </div>
  );
}
export default Edit;
