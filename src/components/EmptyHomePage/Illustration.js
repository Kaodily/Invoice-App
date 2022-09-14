function Illustration({color}) {
  return (
    <div className="text-white text-center py-24">
      <img src="./assets/illustration-empty.svg" alt="illustration" className="m-auto w-52 pb-6" />
      <h4 style={color}>There is nothing here</h4>
      <p className="px-20 py-4 text-sm text-[#888EB0]">Create an invoice by clicking the New button and get started</p>
    </div>
  );
} 
export default Illustration
