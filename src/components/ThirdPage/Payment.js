function Payment(props) {
  // let looped;
  // for (let each of props.payment) {
  //     looped = each
  // }
  const looped = props.payment.items.map((item,index) => {
    return (
      <div className="flex justify-between pb-2 px-6 "  key ={index}>
        <div>
          <h5 className="text-[11px] font-bold">{item.name}</h5>
          <p className="text-[11px] text-[#DFE3FA]">
            {item.quantity} * £{item.price}
          </p>
        </div>

        <h6  className="text-[14px] font-bold mt-2">£{item.total}</h6>
      </div>
    );
  });
  return (
    <div className="h-40 m-5 py-6 rounded-md mb-5  text-white relative" style={props.mode}>
      <div className="mb-2" >{looped}</div>
      <div className="flex justify-between px-6 py-3 absolute bottom-0 w-full bg-[#0C0E16] rounded-br-md rounded-bl-md h-12">
              <h5 className="text-[11px] font-bold">Amount Due</h5>
              <p  className="text-[16px] font-bold">£{props.payment.total}</p>
      </div>
    </div>
  );
}
export default Payment;
