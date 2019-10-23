import * as React from 'react';

export interface IMainProps {
    username:string | undefined;
    onRegister():void;
    onPlay(username:string):void;
}

export const Main:React.FC<IMainProps> = (props:IMainProps) => {
    const onRegister = (event:React.MouseEvent<HTMLButtonElement,MouseEvent>) => {
        props.onRegister();
    }

    const onPlay = (event:React.MouseEvent<HTMLButtonElement,MouseEvent>) => {
        props.username && props.onPlay(props.username);
    }
    return (
        <>
            <h1>Bienvendios al guess a number game</h1>
            {!props.username && <div>Regístrate para empezar a jugar</div>}
            {!props.username && <button onClick={onRegister}>Registrarse</button>}
            {props.username && <div>Pulsa play para iniciar una nueva partida</div>}
            {props.username && <button onClick={onPlay}>Play</button>}
        </>
    );
}