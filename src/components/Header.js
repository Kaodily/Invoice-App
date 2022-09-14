// import Logo from './src/assets/logo.svg';
import {Link} from 'react-router-dom'
function Header({handleClick, image}) {
    return (
        <div className ='bg-[#1E2139] flex justify-between h-12'>
            <Link to ={'/'}>
            <div className ='w-12 h-12 bg-[#7C5DFA] flex justify-center items-center rounded-r-xl'>
                <img src="../assets/logo.svg" alt="logo"  className ='w-4' />
           </div>
            </Link>
            <div className = 'flex justify-center items-center pr-3 '>
                <div className ='h-12 border-r-2 border-gray-600 mr-3' onClick={handleClick}>
                <img src={image} alt="light-mode" className ='w-5 mr-2 mt-3 ' />
           </div>
            <img src="../assets/image-avatar.jpg" alt="avatar"  className ='w-6 rounded-full '/>
           </div>

        </div>
    )
}
export default Header