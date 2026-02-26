import { motion, useScroll, useTransform } from 'framer-motion';

function Hero() {
    const { scrollY } = useScroll()
    const heroY = useTransform(scrollY, [0, 500], [0, 300]);

    return (
        <div className='flex justify-center items-center h-screen w-full'>
            <motion.div style={{ y: heroY }} className="absolute inset-0">
                <img src="/img/inside.webp" alt="hero image" className="w-full h-full object-cover" />
                <div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2d1c10]/80 via-[#2d1c10]/50 to-transparent
"></div>
                </div>
            </motion.div>
            <div className="relative flex flex-col justify-center items-center h-full space-y-6 max-w-3/5 text-center mx-auto z-10">
                <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-[1.1] tracking-widest">Quadra Café</h1>
                <p className="text-xl md:text-2xl text-white/90 font-semibold max-w-2xl">Great Coffee. Fast WiFi. Good Vibes.</p>
                <div className="flex flex-col md:flex-row gap-4 mt-4">
                    <a href="#menu" className="py-4 px-8 bg-[#C47A2C] rounded-lg text-white font-semibold hover:bg-[#a96522] transition-all duration-300 shadow-lg hover:-translate-y-1">
                        Explore the Menu
                    </a>

                    <a href="#contact" className="py-4 px-8 border border-white/60 rounded-lg text-white font-semibold hover:bg-white hover:text-black transition-all duration-300">
                        Get Directions
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Hero;