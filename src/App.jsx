import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/subscribe';
import Banner2 from './components/Banner/Banner2';
import Footer from './components/Footer/Footer';





const App=()=>{
  return(
    <main className="overflow-x-hidden bg-white text-dark">
     
     <Hero/>
     <Services/> 
     <Banner/>
     <Subscribe/>
     <Banner2/>
     <Footer/>
     
      </main>
  );
};

export default App;