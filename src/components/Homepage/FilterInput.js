function FilterInput(props) {
    // console.log(props.isTrue.isPaid)
    return props.input && (
        <div className="w-20 h-20 bg-yellow-500 absolute top-[90px] right-[80px] px-2 py-2 text-[13px]">
            <input type="checkbox"
                id="paid"
                onChange={props.handleChange}
                className=" mr-1 "
                // checked={props.isTrue.isPaid}
                name ='paid'
            /> 
            <label htmlFor="paid">Paid</label><br />
            <input type="checkbox"
                onChange={props.handleChange}
                id ='pending'
                className=" mr-1 "
                // checked={props.isTrue.isPending}
                name ='pending'
                
            />
            <label htmlFor="pending">Pending</label>

            <input type="checkbox"
                onChange={props.handleChange}
                id='draft'
                className=" mr-1 "
                // checked={props.isTrue.isDraft}
                name ='draft'
                
            />
            <label htmlFor="draft">Draft</label>
            <p>{props.isTrue.isPaid}</p>
        </div>
    )
}
export default FilterInput