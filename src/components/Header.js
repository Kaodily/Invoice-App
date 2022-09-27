import Logo from '../assets/logo.svg';
import Avatar from '../assets/image-avatar.jpg';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { DataContext } from '../App';
function Header({image }) {
    const { modeHandleClick} = useContext(DataContext)
    return (
        <div className ='bg-[#1E2139] flex justify-between h-12'>
            <Link to ={'/'}>
            <div className ='w-12 h-12 bg-[#7C5DFA] flex justify-center items-center rounded-r-xl'>
                <img src={Logo} alt="logo"  className ='w-4' />
           </div>
            </Link>
            <div className = 'flex justify-center items-center pr-3 '>
                <div className ='h-12 border-r-2 border-gray-600 mr-3' onClick={modeHandleClick}>
                <img src={image} alt="light-mode" className ='w-5 mr-2 mt-3 ' />
           </div>
            <img src={Avatar} alt="avatar"  className ='w-6 rounded-full '/>
           </div>

        </div>
    )
}
export default Header