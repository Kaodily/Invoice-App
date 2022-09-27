import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";
function Button({ data, formik, mode }) {
  const {editHandleClick} = useContext(DataContext)
  return (
    <div className="text-[13px] flex justify-end px-6 h-[60px] text-[#888EB0] pt-4" style={mode}>
      <Link to={`/invoice/${data.id}`}>
        <button className="w-24 h-8 bg-[#252945] py-1 mr-2 rounded-2xl">
          Cancel
        </button>
      </Link>
      <Link to={'/'}>
      <button className="w-[120px] h-8 bg-[#7C5DFA] py-1 rounded-2xl" onClick={() => editHandleClick(formik)}>
        Save Changes
      </button>
      </Link>
    </div>
  );
}
export default Button;
