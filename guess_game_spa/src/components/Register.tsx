import * as React from 'react';

export  interface IRegisterProps {
    error?:string;
    registerUser(username:string):void;
}

export const Register:React.FC<IRegisterProps> = (props:IRegisterProps) => {
    const [value,setValue] = React.useState('');

    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
    };

    const onRegister = (event:React.MouseEvent<HTMLButtonElement,MouseEvent>) => {
        props.registerUser(value);
    }

    console.log(props.error);

    return (
        <>
            <div>
                <label htmlFor="username">Introduce un nombre de usuario</label>
                <br/>
                <input id="username" type="text" onChange={onChange} value={value}/>
            </div>
            {props.error && <div style={{color:"red"}}>{props.error}</div>}
            <div>
                <button onClick={onRegister}>Register</button>
            </div>        
        </>
    );
}