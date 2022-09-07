import {Link} from 'react-router-dom'
function Button(props) {
    return (
        <div className="text-white text-[13px] flex justify-center h-[60px] pt-4" style={props.mode}>
            <Link to ={`/invoice/${props.id}/Edit`}>
                <button className="w-16 h-8 bg-[#252945] py-1 mr-2 rounded-xl">Edit</button>
                </Link>
            <button className="w-24 h-8 bg-[#EC5757] py-1 mr-2 rounded-2xl" onClick={props.handleClick}>Delete</button>
            <button className="w-[120px] h-8 bg-[#7C5DFA] py-1 rounded-2xl" >Mark as Paid</button>
        </div>
    )
}
export default Button