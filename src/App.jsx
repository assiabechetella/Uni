import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Videoplayer from "./components/Videoplayer/Videoplayer";

const App = () => {
  const [playState, setPlayerState] = useState(false);


  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className="container">
          <Title subTitle="Our Program" title="What We Offer"/>
          <Programs/>
          <About  setPlayerState={setPlayerState}/>
          <Title subTitle="Gallery" title="Campus Photos"/>
          <Campus />
          <Title subTitle="Testimonials" title="What Students Says"/>
          <Testimonials />
          <Title subTitle="Contact Us" title="Get in Touch"/>
          <Contact/>
          <Footer/>
        </div>
        <Videoplayer playState={playState} setPlayerState={setPlayerState}/>
        
    </div>
  )
}

export default App