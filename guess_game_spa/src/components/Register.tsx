import * as React from 'react';

export  interface IRegisterProps {
    error?:string;
}

export const Register:React.FC<IRegisterProps> = (props:IRegisterProps) => {
    const [value,setValue] = React.useState('');

    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
    };

    return (
        <>
        <div>
            <label htmlFor="username">Introduce un nombre de usuario</label>
            <br/>
            <input id="username" type="text" onChange={onChange} value={value}/>
        </div>
        <div>
            <button>Register</button>
        </div>
        </>
    );
}