import { Link } from 'react-router-dom'
import { DataContext } from '../../App';
import { useContext } from 'react';
function Button({ mode, id, status }) {
  const {modalHandleClick,markAsPaid} = useContext(DataContext)
    return (
        <div className="text-white text-[13px] flex justify-center h-[60px] pt-4" style={mode}>
            <Link to ={`/invoice/${id}/Edit`}>
                <button className="w-16 h-8 bg-[#252945] py-1 mr-2 rounded-xl">Edit</button>
                </Link>
            <button className="w-24 h-8 bg-[#EC5757] py-1 mr-2 rounded-2xl" onClick={modalHandleClick}>Delete</button>
            {(status === 'pending'|| status === 'draft') &&
                <button className="w-[120px] h-8 bg-[#7C5DFA] py-1 rounded-2xl" onClick={()=> markAsPaid(id)}>Mark as Paid</button>
             } 
        </div>
    )

}
export default Button