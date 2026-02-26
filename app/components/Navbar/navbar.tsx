import { useState } from "react";

function Navbar() {
    const [activeMenu, setActiveMenu] = useState<string>("#home");
    const menuHandler = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        console.log(id);
        setActiveMenu(id);
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className='fixed top-0 left-0 right-0 z-50 bg-white shadow-md flex flex-col md:flex-row py-4 md:py-0 md:px-9 items-center justify-between'>
            <div className='w-32 h-32 -mt-6 md:mt-0'>
                <a href="#home"><img alt="logo" src="/img/logo.jpg" className='h-full object-contain'></img></a>
            </div>
            <div>
                <div className='flex flex-row gap-4 text-[#a96522] cursor-pointer -mt-4 md:mt-0'>
                    <a href="#home" onClick={(e) => menuHandler(e, "home")} className={`relative inline-block 
  after:absolute 
  after:left-0 
  after:-bottom-1 
  after:h-0.5 
  after:bg-[#C47A2C] 
  after:transition-all 
  after:duration-300 
  after:w-0 hover:after:w-full : ${activeMenu === "home" && "after:w-full"} `}>Home</a>

                    <a href="#about" onClick={(e) => menuHandler(e, "about")} className={`relative inline-block 
  after:absolute 
  after:left-0 
  after:-bottom-1 
  after:h-0.5 
  after:bg-[#C47A2C] 
  after:transition-all 
  after:duration-300 
  after:w-0 hover:after:w-full : ${activeMenu === "about" && "after:w-full"} `}>About</a>


                    <a href="#menu" onClick={(e) => menuHandler(e, "menu")} className={`relative inline-block 
  after:absolute 
  after:left-0 
  after:-bottom-1 
  after:h-0.5 
  after:bg-[#C47A2C] 
  after:transition-all 
  after:duration-300 
  after:w-0 hover:after:w-full : ${activeMenu === "menu" && "after:w-full"}`}>Menu</a>

                    <a href="#testimonials" onClick={(e) => menuHandler(e, "testimonials")} className={`relative inline-block 
  after:absolute 
  after:left-0 
  after:-bottom-1 
  after:h-0.5 
  after:bg-[#C47A2C] 
  after:transition-all 
  after:duration-300 
  after:w-0 hover:after:w-full : ${activeMenu === "testimonials" && "after:w-full"} `}>Testimonials</a>

                    <a href="#contact" onClick={(e) => menuHandler(e, "contact")} className={`relative inline-block 
  after:absolute 
  after:left-0 
  after:-bottom-1 
  after:h-0.5 
  after:bg-[#C47A2C] 
  after:transition-all 
  after:duration-300 
  after:w-0 hover:after:w-full : ${activeMenu === "contact" && "after:w-full"}  `}>Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar