import React from 'react'

function Navbar() {
    return (
        <div className='fixed top-0 left-0 right-0 z-50 bg-white shadow-md flex flex-row px-6 md:px-9 items-center justify-between'>
            <div className='w-32 h-32'>
                <img alt="logo" src="/img/logo.jpg" className='h -full object-contain'></img>
            </div>
            <div>
                <div className='flex flex-row gap-4 text-[#a96522] cursor-pointer'>
                    <a href="#home" className="relative inline-block 
  after:absolute 
  after:left-0 
  after:-bottom-1 
  after:h-0.5 
  after:bg-[#C47A2C] 
  after:transition-all 
  after:duration-300 
  after:w-0 hover:after:w-full
  ">Home</a>

                    <a href="#about" className="relative inline-block 
  after:absolute 
  after:left-0 
  after:-bottom-1 
  after:h-0.5 
  after:bg-[#C47A2C] 
  after:transition-all 
  after:duration-300 
  after:w-0 hover:after:w-full">About</a>


                    <a href="#menu" className="relative inline-block 
  after:absolute 
  after:left-0 
  after:-bottom-1 
  after:h-0.5 
  after:bg-[#C47A2C] 
  after:transition-all 
  after:duration-300 
  after:w-0 hover:after:w-full">Menu</a>

                    <a href="#contact" className="relative inline-block 
  after:absolute 
  after:left-0 
  after:-bottom-1 
  after:h-0.5 
  after:bg-[#C47A2C] 
  after:transition-all 
  after:duration-300 
  after:w-0 hover:after:w-full">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar