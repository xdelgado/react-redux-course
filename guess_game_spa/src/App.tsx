import React from 'react';
import './App.css';
import { Splash } from './components/Splash';
import { Main } from './components/Main';
import { Register } from './components/Register';
import { GameLobby } from './components/GameLobby';
import { Game } from './components/Game';

const App: React.FC = () => {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{width:'400px',height:'400px'}}>
        <Splash message="Cargando guess game..."/>
        <hr/>
        <Main isRegistered={false}/>
        <hr/>
        <Register/>
        <hr/>
        <GameLobby gameId={1} players={["Xavier","Alvaro"]}/>
        <hr/>
        <Game finsihed={false} onTry={(value:string) => console.log(value)}/>
      </div>
    </div>
  );
}

export default App;
