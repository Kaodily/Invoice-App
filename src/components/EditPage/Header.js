import Logo from './logo.svg'
function Header() {
    console.log(Logo)
    return (
        <div className ='bg-[#1E2139] flex justify-between h-12'>
            <div className ='w-12 h-12 bg-[#7C5DFA] flex justify-center items-center rounded-r-xl'>
            <img src={Logo} alt="logo"  className ='w-4' />
           </div>
            <div className = 'flex justify-center items-center pr-3 '>
                <div className ='h-12 border-r-2 border-gray-600 mr-3'>
                <img src="../assets/icon-sun.svg" alt="light-mode" className ='w-5 mr-2 mt-3 ' />
           </div>
            <img src="../assets/image-avatar.jpg" alt="avatar"  className ='w-6 rounded-full '/>
           </div>

        </div>
    )
}
export default Header