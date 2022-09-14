function Informations({data}) {
    return (
        <section className=" p-6">
            <div className="mb-5">
                <p className='text-[12px] font-bold'><span className="text-[11px] text-[#888EB0] ">#</span>{data.id}</p>
                <p className="text-[11px] text-[#888EB0] ">{data.description}</p>
            </div>
            <div className="text-[11px] text-[#888EB0] mb-4">
                <p>{data.senderAddress.street}</p>
                <p>{data.senderAddress.city}</p>
                <p>{data.senderAddress.postCode}</p>
                <p>{data.senderAddress.country}</p>
            </div>
            <div className="flex ">
                <div className="mr-20 mb-5">
                <p className="text-[11px] text-[#888EB0] ">Invoice Date</p>
                <h5 className="text-[12px]  font-bold">{data.createdAt}</h5>
                </div>
                <div>
                    <p className="text-[11px] text-[#888EB0] ">Bill To</p>
                    <h5 className="text-[12px]  font-bold">{data.clientName}</h5> 
                </div>
            </div>
            <div className="flex mb-5">
                <div className="mr-20">
                <p className="text-[11px] text-[#888EB0] ">Payment Due</p>
                <h5 className="text-[12px]  font-bold">{data.paymentDue}</h5>
                </div>
                <div className="text-[11px] text-[#888EB0] mt-[-20px]">
                <p>{data.clientAddress.street}</p>
                <p>{data.clientAddress.city}</p>
                <p>{data.clientAddress.postCode}</p>
                <p>{data.clientAddress.country}</p>
                </div>
            </div>
            <p className="text-[11px] text-[#888EB0] ">Sent to</p>
            <h6 className="text-[12px]  font-bold">{data.clientEmail}</h6>

        </section>
    )
}
export default Informations