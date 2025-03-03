import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';



const App=()=>{
  return(
    <main className="overflow-x-hidden bg-white text-dark">
     
     <Hero/>
     <Services/>
      </main>
  );
};

export default App;