import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import GlobalStyle from './components/globalStyles';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar';
import { InfoData, InfoDataThree, InfoDataTwo } from './data/InfoData';
import { SliderData } from './data/SliderData';


function App() {
const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
  setIsOpen(!isOpen)
}

  return (
    <>
    <GlobalStyle />
    <Navbar toggle={toggle}/>
    <Dropdown isOpen={isOpen} toggle={toggle}/>
    <Hero slides={ SliderData } />
    <InfoSection {...InfoData}/>
    <InfoSection {...InfoDataTwo}/>
    <InfoSection {...InfoDataThree}/>
    </>
  );
}

export default App;
