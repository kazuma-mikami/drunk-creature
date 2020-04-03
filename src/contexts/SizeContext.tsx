import { createContext } from 'react';

type SizeContextProps = {
    size:number;
    setSize:(size:number)=>void;
}

const initialSizeContext:SizeContextProps = {
    size:5,
    setSize:()=>{},
} 

export const SizeContext = createContext<SizeContextProps>(initialSizeContext);