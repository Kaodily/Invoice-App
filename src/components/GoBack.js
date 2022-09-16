import { Link } from 'react-router-dom'
import arrowLeft from "../assets/icon-arrow-left.svg";
function Back({color}) {
  return (
    <Link to ={'/'}>
     <div className="flex  px-5 py-5 font-bold" style={color}>
      <div>
        <img src={arrowLeft} alt="arrow-left" className="mt-[6px] mr-6" />
      </div>
      <p className="text-[13px]">Go back</p>
    </div>
    </Link>
  );
}
export default Back;
