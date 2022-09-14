function ItemDetails({ item, mode, data }) {
  // const looped = data.items.length >= 2 ? data.items.map(item => item.price * item.quantity).reduce((a, b) => a + b) : data.items.map(item => item.price * item.quantity).reduce((a,b)=>a +b)

  let total = item.items.length >=2 ? item.items.map(item=> item.price * item.quantity).reduce((a,b) => a + b): item.items.map(item=> item.price * item.quantity).reduce((a,b) => a + b)
  // console.log(loop)
  const looped = item.items.map((item, index) => {
    return (
      <div className="flex justify-between pb-2 px-6 " key={index}>
        <div>
          <h5 className="text-[11px] font-bold">{item.name}</h5>
          <p className="text-[11px] text-[#888EB0]">
            {item.quantity} * £{item.price}
          </p>
        </div>

        <h6 className="text-[14px] font-bold mt-2">£{item.quantity * item.price}</h6>
      </div>
    );
  });
  return (
    <div className="h-40 m-5 py-6 rounded-md mb-5  text-white relative" style={mode}>
      <div className="mb-2">{looped}</div>
      <div className="flex justify-between px-6 py-3 absolute bottom-0 w-full bg-[#0C0E16] rounded-br-md rounded-bl-md h-12">
        <h5 className="text-[11px] font-bold text-[#888EB0]">Amount Due</h5>
        <p className="text-[16px] font-bold text-[#888EB0]">£{total}</p>
      </div>
    </div>
  );
}
export default ItemDetails;
