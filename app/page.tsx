import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* 1. hero section*/}
      <section className="h-screen relative">
        <div className="absolute inset-0">
          <img src="/img/inside.webp" alt="hero image" className="w-full h-full object-cover opacity-45" />
        </div>
        <div className="relative flex flex-col justify-center items-center h-full space-y-4">
          <h1 className="text-9xl font-bold text-amber-950">Quadra Café</h1>
          <p className="text-6xl text-amber-800 font-bold">Great Coffee. Fast WiFi. Good Vibes.</p>
          <button className="mt-8 p-4 bg-amber-500 rounded-md text-white font-bold text-md cursor-pointer  hover:bg-amber-400 hover:text-white">Visit Us Today</button>
        </div>
      </section>

      {/* 2. about section*/}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl grid md:grid-cols-2 gap-12 mx-auto items-center">
          <div className="rounded-xl">
            <img src="/img/barista.jpg" alt="barista" className="w-full h-full rounded-xl object-cover"></img>
          </div>
          <div>
            <h1 className="text-5xl text-amber-950 font-bold mb-6">Our Story</h1>
            <p className="text-lg text-amber-800 mb-4">At Quadra Café, we celebrate the perfect blend of Argentine coffee culture and Caribbean ease. Our colorful, welcoming atmosphere reflects the spirit of Playa del Carmen—relaxed, authentic, and full of life.</p>
            <p className="text-lg text-amber-800 mb-5">Every cup is crafted with specialty beans sourced from sustainable farms and roasted to perfection. From our signature flat whites to hearty breakfast plates, each offering is made with care and a passion for bringing people together over great coffee.</p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">15+</div>
                <div className="text-amber-800 ">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">100+</div>
                <div className="text-amber-800 ">Menu Items</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">4.7</div>
                <div className="text-amber-800 ">Rating</div>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* 3. items section*/}
      <section>
        <h1>items</h1>
      </section>

      {/* 4. testimonials section*/}
      <section>
        <h1>testimonials</h1>
      </section>

      {/* 5. form section*/}
      <section>
        <h1>form</h1>
      </section>

      {/* 6. footer section*/}
      <footer>
        <h1>footer</h1>
      </footer>

    </main>

  );
}
