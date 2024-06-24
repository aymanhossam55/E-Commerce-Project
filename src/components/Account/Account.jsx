import { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';

const Account = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.classList.toggle('account-menu-open');
    };



    return (
        <div>
            <div className='Account-menu md:hidden sm:hidden'>
                <div className="flex hover:text-hover-white cursor-pointer" onClick={toggleMenu}>
                    <PersonIcon />
                    <button>Account</button>
                </div>
                <div className={`fixed top-0 right-0 h-full w-6/12 bg-white shadow-md transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <button className="absolute top-l right-l text-2xl text-text-dark" onClick={toggleMenu}>&#10005;</button>
                    <div className="p-4">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account