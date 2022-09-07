import React,{ useState } from 'react';
import {Link} from 'react-router-dom'
function Data(props) {
    // console.log(props)
    let statusStyle;
    switch (props.data.status) {
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
    switch (props.data.status) {
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
        <Link to={{
            pathname: `/invoice/${props.data.id}`,
            // data : props.data
        }}>
         <div className ='p-4 m-5 rounded-md ' style={props.mode} >
            <div className = 'flex justify-between mb-5'>
            <p className = 'text-[13px] font-bold'>#{props.data.id}</p>
                <p className = 'text-[13px]  font-bold text-[#888EB0]'>{props.data.clientName}</p>
            </div>
            <div className = 'flex justify-between'>
                <div>
                <p className = 'text-[12px]  font-bold text-[#888EB0]'>Due {props.data.paymentDue}</p>
            <h4 className = 'text-[15px] font-bold mt-1' >£{props.data.total}</h4>
                </div>
                <div className='w-20 text-center flex justify-center item-center rounded-md pt-1 h-9 bg-black' style={statusStyle}>
                    <div className ='w-[7px] mt-[9px] mr-1 h-[7px] rounded-full' style = {statusStyles} ></div>
                        <p className='text-[12px] mt-1'>{props.data.status.slice(0,1).toUpperCase() + props.data.status.slice(1) }</p>
             </div>
           </div>
        </div >
         </Link >
    )
}
export default Data
// props.data.status.slice(0,1).toUpperCase() + props.data.status.slice(1)