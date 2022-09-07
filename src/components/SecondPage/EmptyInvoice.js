import Filter from "../Homepage/Filter";
import Illustraton from "./Illustration";

function EmptyInvoice({data}) {
    return (
        <div className="h-screen">
            <Filter data={data.length} />
            <Illustraton />
        </div>
    )
}
export default EmptyInvoice