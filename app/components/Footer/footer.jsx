import { Phone } from 'lucide-react';
import { Facebook, Instagram } from 'lucide-react';

function Footer() {
    return (
        <div className='w-screen p-8 bg-[#a96522]'>
            <div className='w-8 h-8 md:w-16 md:h-16 rounded-full mb-4'>
                <img alt="logo" src="/img/logo.jpg" className='h-full object-contain rounded-full'></img>
            </div>
            <div className='border-b  border-b-[#d0a274]/60'></div>

            <div className='md:grid md:grid-cols-2 md:gap-20  md:py-12'>
                <div className='flex flex-col mt-4'>
                    <p className='font-bold text-white text-lg'>Contact Us</p>
                    <p className='text-sm text-white/80'>Address:</p>
                    <p className='text-white/80 text-sm'>Av. CTM entre 5 Y 10 Av, Zazil-ha, 77720 Playa del Carmen, Q.R.</p>
                    <div className='flex flex-row mt-4 items-center justify-start'>
                        <div className='rounded-full bg-[#3f2305] p-2 mr-2 hover:bg-[#C47A2C]'>
                            <Phone className='text-[#C47A2C] hover:text-white' size={20} />
                        </div>
                        <p className='text-white/80 text-sm'>984 142 3946</p>
                    </div>
                    <div className='flex flex-row mt-4 gap-2'>
                        <a
                            href="https://instagram.com/quadracafe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='rounded-full bg-[#3f2305] p-2 hover:bg-[#C47A2C] transition-all hover:scale-110'
                        >
                            <Instagram className='text-[#C47A2C]' size={20} />
                        </a>
                        <a
                            href="https://facebook.com/quadracafe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='rounded-full bg-[#3f2305] p-2 hover:bg-[#C47A2C] transition-all hover:scale-110'
                        >
                            <Facebook className='text-[#C47A2C]' size={20} />
                        </a>
                    </div>
                </div>
                <div className='flex flex-col mt-4'>
                    <p className='font-bold text-white text-lg'>Hours:</p>
                    <p className='text-white/80'>Open Daily: 7:30 AM - 4:00 PM.</p>
                    <p></p>
                </div>

            </div>
            <div className='border-b  border-b-[#d0a274]/60 mt-4'></div>
            <div className='flex flex-col md:flex-row justify-between items-center mt-4 gap-4'>
                <p className='text-white/80 text-sm text-center md:text-left'>
                    Copyright © 2026 Quadra Café. All rights reserved.
                </p>
                <p className='text-white/70 text-sm text-center md:text-right'>
                    Website by <a
                        href="https://webnetcrafters.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-white hover:text-[#C47A2C] transition font-semibold'
                    >
                        WebNet Crafters
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Footer