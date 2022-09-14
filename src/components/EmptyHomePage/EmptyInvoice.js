import Filter from "../Homepage/Navigation";
import Illustraton from "./Illustration";

function EmptyInvoice({data,color}) {
    return (
        <div className="h-screen">
            <Filter data={data.length} />
            <Illustraton color={color} />
        </div>
    )
}
export default EmptyInvoice