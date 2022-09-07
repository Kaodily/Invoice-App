function Info(props) {
    return (
        <section className=" p-6">
            <div className="mb-5">
                <p className='text-[12px] font-bold'><span className="text-[11px] ">#</span>{props.data.id}</p>
                <p className="text-[11px] text-[#888EB0] ">{props.data.description}</p>
            </div>
            <div className="text-[11px] text-[#888EB0] mb-4">
                <p>{props.data.senderAddress.street}</p>
                <p>{props.data.senderAddress.city}</p>
                <p>{props.data.senderAddress.postCode}</p>
                <p>{props.data.senderAddress.country}</p>
            </div>
            <div className="flex ">
                <div className="mr-20 mb-5">
                <p className="text-[11px] text-[#888EB0] ">Invoice Date</p>
                <h5 className="text-[12px]  font-bold">{props.data.createdAt}</h5>
                </div>
                <div>
                    <p className="text-[11px] text-[#888EB0] ">Bill To</p>
                    <h5 className="text-[12px]  font-bold">{props.data.clientName}</h5> 
                </div>
            </div>
            <div className="flex mb-5">
                <div className="mr-20">
                <p className="text-[11px] text-[#888EB0] ">Payment Due</p>
                <h5 className="text-[12px]  font-bold">{props.data.paymentDue}</h5>
                </div>
                <div className="text-[11px] text-[#888EB0] mt-[-20px]">
                <p>{props.data.clientAddress.street}</p>
                <p>{props.data.clientAddress.city}</p>
                <p>{props.data.clientAddress.postCode}</p>
                <p>{props.data.clientAddress.country}</p>
                </div>
            </div>
            <p className="text-[11px] text-[#888EB0] ">Sent to</p>
            <h6 className="text-[12px]  font-bold">{props.data.clientEmail}</h6>

        </section>
    )
}
export default Info