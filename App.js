import React from 'react';
import './App.css';
import LobbyList from './core/lobbyList'
import GameSwitchButton from './core/gameSwitchButton'

function App(props) {

  return (
    <div className="App">
      <GameSwitchButton />
      <LobbyList />

    </div>
  );
}

export default App
