import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { inputChat } from './input'

function App() {
  type Props = {
    inputChat: String
  };

  return (
    <input
      value={inputChat}
    />
  )
}

export default App
