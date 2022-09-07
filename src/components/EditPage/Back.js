import {Link} from 'react-router-dom'
function Back(props) {
 
  return (
    <Link to ={`/invoice/${props.id}`}>
     <div className="flex text-white px-5 py-5 ">
      <div>
        <img src="./assets/icon-moon.svg" alt="arrow-left" className="mt-[6px] mr-6" />
      </div>
      <p className="text-[13px]">Go back</p>
    </div>
    </Link>
  );
}
export default Back;