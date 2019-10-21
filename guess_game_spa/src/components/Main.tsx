import * as React from 'react';

export interface IMainProps {
    isRegistered:boolean;
}

export const Main:React.FC<IMainProps> = (props:IMainProps) => {
    return (
        <>
            <div>Bienvendios al guess a number game</div>
            <div>Registraté para empezar a jugar</div>
            {!props.isRegistered && <button>Registrarse</button>}
            {props.isRegistered && <button>Play</button>}
        </>
    );
}