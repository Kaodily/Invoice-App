function Status(props) {
  let statusStyle;
  switch (props.info) {
      case 'paid':
          statusStyle = {
              'color': '#33D69F',
              'backgroundColor': '#979797'
          };
          break;
      case 'pending':
          statusStyle = {
              'color': '#FF8F00',
              'backgroundColor': '#979797'
          };
          break;
      case 'draft':
          statusStyle = {
              'color': '#fff',
              'backgroundColor': '#979797'
          };
          break;
      
  }
  let statusStyles;
  switch (props.info) {
      case 'paid':
          statusStyles = {
              
              'backgroundColor': '#33D69F'
          };
          break;
      case 'pending':
          statusStyles = {
              'backgroundColor': '#FF8F00'
          };
          break;
      case 'draft':
          statusStyles = {
              'backgroundColor': '#fff'
          };
          break;
      
  }
  return (
    <div className=" h-24 mx-8 px-4 text-white rounded-md bg-[#1E2139] flex items-center justify-between" style={props.mode}>
      <p>Status</p>
      <div className="w-20 text-center flex justify-center item-center rounded-md pt-1 h-9 "
       style={statusStyle}>
        <div
          className="w-[7px] mt-[9px] mr-1 h-[7px] rounded-full"
          style={statusStyles}
        ></div>
              <p className="text-[12px] mt-1">
          {props.info.slice(0, 1).toUpperCase() + props.info.slice(1)}
        </p>
    
      </div>
    </div>
  );
}
export default Status;
