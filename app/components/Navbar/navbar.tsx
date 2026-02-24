import React from 'react'

function Navbar() {
    return (
        <div className='flex flex-row px-6 md:px-9 items-center justify-between'>
            <div className='w-32 h-32'>
                <img alt="logo" src="/img/logo.jpg" className='h -full object-contain'></img>
            </div>
            <div>
                <div className='flex flex-row gap-4 text-[#a96522] cursor-pointer'>
                    <a className="relative inline-block 
  after:absolute 
  after:left-0 
  after:-bottom-1 
  after:h-0.5 
  after:bg-[#C47A2C] 
  after:transition-all 
  after:duration-300 
  after:w-0 hover:after:w-full
  ">Home</a>
                    <a className="relative inline-block 
  after:absolute 
  after:left-0 
  after:-bottom-1 
  after:h-0.5 
  after:bg-[#C47A2C] 
  after:transition-all 
  after:duration-300 
  after:w-0 hover:after:w-full">Menu</a>
                    <a className="relative inline-block 
  after:absolute 
  after:left-0 
  after:-bottom-1 
  after:h-0.5 
  after:bg-[#C47A2C] 
  after:transition-all 
  after:duration-300 
  after:w-0 hover:after:w-full">About</a>
                    <a className="relative inline-block 
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