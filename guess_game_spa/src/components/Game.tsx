import * as React from 'react';
import { pipelineTopicExpression } from '@babel/types';

export interface IGameProps {
    finsihed:boolean;
    message?:string;
    onTry(val:string):void;
}

export const Game:React.FC<IGameProps> = (props:IGameProps) => {
    const [value,setValue] = React.useState('');

    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const val = Number(event.currentTarget.value);
        if (!isNaN(val) && (val>=0 && val<=100)) {
            setValue(event.currentTarget.value);
        } 
    }

    const onTry = () => {
        props.onTry(value);
        setValue('');
    }

    return (
        <>
            <input type="text" value={value} onChange={onChange}></input>
            <button onClick={onTry}>Try</button>
        </>
    )
}