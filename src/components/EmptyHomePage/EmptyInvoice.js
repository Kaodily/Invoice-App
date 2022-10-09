import { useContext } from "react";
import { DataContext } from "../../App";
import Filter from "../Homepage/Navigation";
import Illustraton from "./Illustration";

function EmptyInvoice() {
   const {datas} = useContext(DataContext)
    return (
        <div >
            <Filter data ={datas.length} />
            <Illustraton />
        </div>
    )
}
export default EmptyInvoice