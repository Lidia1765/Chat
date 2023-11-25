import { useState } from 'react'
import './App.css'
import { InputChat } from './InputChat'
import { ChatWindow } from './ChatWindow'
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Chat</h1>
      <InputChat />
      <ChatWindow />
    </div>
  )
}

export default App;
