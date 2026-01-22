import { useState } from 'react'
import LoginForm from "./components/LoginForm";
import ThemeBox from "./components/ThemeBox";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <LoginForm />
       <ThemeBox />
    </>
  )
}

export default App
