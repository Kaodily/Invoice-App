function Filtered({input,filterHandleClick,mode}) {
    return input && (
        <section className="w-20 h-24 absolute top-[90px] right-[80px] px-2 py-2 text-[13px]" style={mode}>
            <p className="cursor-pointer" onClick={() => filterHandleClick('all')}>All</p>
            <p className="cursor-pointer" onClick={() => filterHandleClick('paid')}>Paid</p>
            <p className="cursor-pointer" onClick={() => filterHandleClick('pending')}>Pending</p>
            <p className="cursor-pointer" onClick={() => filterHandleClick('draft')}>Draft</p>
        </section>
    )
}
export default Filtered