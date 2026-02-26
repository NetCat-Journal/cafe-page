import React from 'react'

function About() {
    return (
        <div className="max-w-7xl grid md:grid-cols-2 gap-12 mx-auto items-center">
            <div className="rounded-xl relative">
                <img src="/img/barista.jpg" alt="barista" className="w-full h-full rounded-xl object-cover"></img>
                <div>
                    <div className="absolute inset-0 bg-gradient-to-t rounded-xl from-[#2d1c10]/80 via-[#2d1c10]/50 to-transparent
"></div>
                </div>
            </div>
            <div>
                <h1 className="text-[#a96522] text-3xl md:text-5xl font-bold mb-6">Our Story</h1>
                <p className="text-md text-[#8e8e8e] mb-4">At Quadra Café, we celebrate the perfect blend of Argentine coffee culture and Caribbean ease. Our colorful, welcoming atmosphere reflects the spirit of Playa del Carmen—relaxed, authentic, and full of life.</p>
                <p className="text-md text-[#8e8e8e] mb-5">Every cup is crafted with specialty beans sourced from sustainable farms and roasted to perfection. From our signature flat whites to hearty breakfast plates, each offering is made with care and a passion for bringing people together over great coffee.</p>
                <div className="mt-8 grid grid-cols-3 gap-4">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-amber-400">15+</div>
                        <div className="text-[#8e8e8e] ">Years</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-amber-400">100+</div>
                        <div className="text-[#8e8e8e] ">Menu Items</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-amber-400">4.7</div>
                        <div className="text-[#8e8e8e] ">Rating</div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default About