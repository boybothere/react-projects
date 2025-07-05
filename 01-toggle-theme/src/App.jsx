import React, {useState} from 'react'
import './App.css'
import { Toggle } from './components/Toggle.jsx'
import useLocalStorage from "use-local-storage"

const App = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("IsDark", preference);
  return (
    <div className="App" data-theme = {isDark ? "dark" : "light"}>
      <Toggle 
        handleChange={()=>setIsDark(!isDark)}
        isChecked={isDark}
      />
      <h1 className="title">Hello World!</h1>
      <div className="box">
        <h2>This is a box</h2>
      </div>
    </div>
  )
}

export default App