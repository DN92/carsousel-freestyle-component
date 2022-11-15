import { useState } from 'react'
import './App.css'
import { MantineProvider } from '@mantine/core';
import UseStyleDemo from './components/Demos/UseStyleDemo'
import SliderDemo from './components//Demos/SliderDemo'
import ButtonDemo from './components/Demos/ButtonDemo'
import Carousel1 from './components/Actual/Carousel1';


function App() {


  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      >
      <div id='main'>
        <Carousel1  />
      </div>
      <div style={{margin: '10rem 0'}}>
        SEPARATOR
      </div>
      <div>
      < UseStyleDemo/>
      <SliderDemo />
      <ButtonDemo />

      </div>
    </MantineProvider>
  )
}

export default App
