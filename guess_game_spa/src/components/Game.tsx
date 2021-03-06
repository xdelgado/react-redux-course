import * as React from 'react';
import { pipelineTopicExpression } from '@babel/types';

export interface IGameProps {
    username:string;
    game:any;
    message:string;
    guess(username:string,gameId:number,val:number):void;
}

export const Game:React.FC<IGameProps> = (props:IGameProps) => {
    const [value,setValue] = React.useState('');
    const input = React.useRef<HTMLInputElement>(null);

    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const val = Number(event.currentTarget.value);
        if (!isNaN(val) && (val>=0 && val<=100)) {
            setValue(event.currentTarget.value);
        } 
    }

    const onTry = () => {
        props.guess(props.username, props.game.id,parseInt(value));
        setValue('');
        input && input.current && input.current.focus()
    }

    return (
        <>
            <input type="text" ref={input} value={value} onChange={onChange}></input>
            <button onClick={onTry}>Try</button>
            <div>{props.message}</div>
        </>
    )
}