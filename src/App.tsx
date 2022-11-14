import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { MantineProvider } from '@mantine/core';
import UseStyleDemo from './components/UseStyleDemo'
import SliderDemo from './components/SliderDemo'
import ButtonDemo from './components/ButtonDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div style={{border: '3px solid black', margin: '3rem'}} className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      < UseStyleDemo/>
      <SliderDemo />
      <ButtonDemo />
    </MantineProvider>
  )
}

export default App
