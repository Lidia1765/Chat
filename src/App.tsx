import { useState } from 'react'
import './App.css'
import { inputChat } from './input'

function App() {
  type Props = {
    inputChat: String
  };

  return (
    <div className="App">
      <h1>Chat</h1>
      <input
        value={inputChat}
      />
    </div>
  )
}

export default App;
