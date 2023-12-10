import { useState } from 'react'
import './App.css'
import { InputChat } from './InputChat'
import { ChatWindow } from './ChatWindow'
import React from 'react';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className='h1'>Chat</h1>
      </header>
      <div className='window'>
        <ChatWindow />
      </div>
      <InputChat />
    </div>
  )
}

export default App;
