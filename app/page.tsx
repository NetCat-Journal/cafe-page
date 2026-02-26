'use client';

import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/hero';
import About from './components/About/about';
import Footer from './components/Footer/footer';
import Form from './components/Form/form';
import Testimonials from './components/Testimonials/testimonials';
import Items from './components/Items/items';

export default function Home() {


  return (
    <main className="min-h-screen w-screen overflow-hidden">
      <section>
        <Navbar />
      </section>
      {/* 1. hero section*/}
      <section id="home" className="h-screen relative overflow-hidden mb-2">
        <Hero />
      </section>

      {/* 2. about section*/}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white scroll-m-2">
        <About />
      </section>

      {/* 3. items section*/}
      <section id="menu" className='w-full mb-2'>
        <Items />
      </section>

      {/* 4. testimonials section*/}
      <section id="testimonials" className='w-full'>
        <Testimonials />
      </section>

      {/* 5. form section*/}
      <section id="contact" className='w-full mt-10'>
        <Form />
      </section>

      {/* 6. footer section*/}
      <footer className='w-full mt-10'>
        <Footer />
      </footer>

    </main>

  );
}
