import { Link } from "react-router-dom";
function Button(props) {
  return (
    <div className="text-white text-[13px] flex justify-end px-6 h-[60px] bg-[#1E2139] pt-4">
      <Link to={`/invoice/${props.data.id}`}>
        <button className="w-24 h-8 bg-[#252945] py-1 mr-2 rounded-2xl">
          Cancel
        </button>
      </Link>
      <button className="w-[120px] h-8 bg-[#7C5DFA] py-1 rounded-2xl">
        Save Changes
      </button>
    </div>
  );
}
export default Button;
