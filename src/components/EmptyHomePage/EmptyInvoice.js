import { useContext } from "react";
import { DataContext } from "../../App";
import Filter from "../Homepage/Navigation";
import Illustraton from "./Illustration";

function EmptyInvoice() {
   const {data} = useContext(DataContext)
    return (
        <div >
            <Filter data ={data.length} />
            <Illustraton />
        </div>
    )
}
export default EmptyInvoice