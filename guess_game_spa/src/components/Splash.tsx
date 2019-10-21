import * as React from 'react';

export interface ISplashProps
 {
    message:string;
}

export const Splash:React.FC<ISplashProps> = (props:ISplashProps) => {
    return <div>{props.message}</div>
}


