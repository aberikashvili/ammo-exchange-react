import  { useState } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom';

interface Props {}

function Nav(props: Props) {
    const {} = props
    const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

    return (
        <>
         <div className={`w-full flex justify-center bg-[#1E2A39] md2:bg-white ${isOpen ? 'bg-[#1E2A39] h-screen' : ' '}`}>
        <div className="w-[1440px]  ">
          <nav className="p-5 shadow flex items-center justify-between ">
            <div className="hidden md2:flex justify-between items-center">
              
              <Link to='/'>
              <span className="cursor-pointer">
                <img className="h-10 inline" src="/images/Group 1.png" alt="Logo" />
              </span></Link>
            </div>

            <div className="hidden md2:flex gap-[50px] ">
              <ul className="flex items-center font-[Poppins] bg-white left-0 w-auto py-0 py-4 pl-0 pl-7 opacity-100 opacity-0">
                <Link to='/'>
                <li className="mx-4 ">
                  <a href="#" className="text-[16px] hover:opacity-100 hover:text-[#3988F6] opacity-50">
                    Home
                  </a>
                </li></Link>
                <Link to='/HowItWorks'>
                <li className="mx-4 ">
                  <a href="#" className="text-[16px] hover:opacity-100 hover:text-[#3988F6] opacity-50">
                    How It Works
                  </a>
                </li></Link>
                <Link to='/WhyAmmoView'>
                <li className="mx-4 ">
                  <a href="#" className="text-[16px] hover:opacity-100 hover:text-[#3988F6] opacity-50">
                    Why Ammo
                  </a>
                </li></Link>
                <Link to='/FAQsView'>
                <li className="mx-4 ">
                  <a href="#" className="text-[16px] hover:opacity-100 hover:text-[#3988F6] opacity-50">
                    FAQs
                  </a>
                </li></Link>
              </ul>

              <button
                type="button"
                className="w-[278px] font-[Poppins] border border-[#3988F6] text-[#3988F6] h-[48px] rounded-[5px] text-center hover:text-white hover:bg-[#3988F6] text-[16px]"
              >
                Become a Founding Trader
              </button>
            </div>

            <div className={`md2:hidden w-full`}  >
                <div className={`w-full flex items-center justify-between ${isOpen ? '' : ''}`}>
                     <button onClick={toggleNavbar}>
                 
                <i className={`bi bi-list text-white w-[30px] h-[30px] ${isOpen ? 'hidden' : ''}`}></i>
                
              </button>
              
              <div className="flex justify-between items-center">
              <span className={`cursor-pointer ${isOpen ? 'hidden' : ''}`}>
                <img className="h-10 inline" src="/images/Group 191.jpg" alt="Logo" />
              </span>
             </div>
            <button>
            <i className={`bi bi-person text-white  ${isOpen ? 'hidden' : ''}`}></i>
            </button>

             
                </div>
             
            </div>
          </nav>

          {isOpen && (
            <ul className="bg-[#1E2A39] h-full flex flex-col w-full items-center">
              
              
              
                <li onClick={toggleNavbar}><i className="bi bi-x text-white  text-5xl "></i></li>

              <Link to='/' onClick={toggleNavbar}><li className="my-[10px] opacity-50 text-white hover:text-[#3988F6]">Home</li></Link>
              <Link to='/HowItWorks' onClick={toggleNavbar}><li className="my-[10px] opacity-50 text-white hover:text-[#3988F6]">How It Works</li></Link>
              <Link to='/WhyAmmoView' onClick={toggleNavbar}><li className="my-[10px] opacity-50 text-white hover:text-[#3988F6]">Why Ammo</li></Link>
              <Link to='/FAQsView' onClick={toggleNavbar}><li className="my-[10px] opacity-50 text-white hover:text-[#3988F6]">FAQs</li></Link>
            </ul>
          )}
        </div>
      </div>
        </>
    )
}

export default Nav
