import {Link} from 'react-router-dom'
function Delete({id, pop , handleClick,onDelete}) {
  return (
     pop && (
      <div className="absolute top-[390px] z-10 mx-8 text-white  h-40 bg-[#141625] p-5">
        <h3 className="text-[15px] font-bold">Confirm Deletion</h3>
        <p className="text-[13px]  text-[#DFE3FA] pt-2 pb-4">
          Are you sure you want to delete invoice { id}? This action cannot
          be undone.
        </p>
        <div className="flex justify-end text-[12px]">
            <button className="w-20 h-8 bg-[#252945] py-1 mr-2 rounded-2xl" onClick={handleClick}>
              Cancel
            </button>
          <Link to={'/'}>
          <button onClick={() => onDelete( id)} className="w-20 h-8 bg-[#EC5757] py-1 mr-2 rounded-2xl">
            Delete
          </button>
          </Link>
        </div>
      </div>
    )
  );
}

export default Delete;
