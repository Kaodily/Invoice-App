import {Link} from 'react-router-dom'
function Back({color}) {
 
  return (
    <Link to ={'/'}>
     <div className="flex px-5 py-5 " style={color}>
      <div>
        <img src="../assets/icon-arrow-left.svg" alt="arrow-left" className="mt-[6px] mr-6" />
      </div>
      <p className="text-[13px] font-bold">Go back</p>
    </div>
    </Link>
  );
}
export default Back;