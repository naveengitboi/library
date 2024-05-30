import React, {MouseEventHandler} from 'react';
import { ButtonStyled } from './Button.styled';


export type ButtonParams = {
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary' ;
    children: React.ReactNode;
    onClick?:MouseEventHandler<HTMLButtonElement>;
}


const Button = ({children="Hello world"}:ButtonParams) => {
    return(
        <ButtonStyled>
            {children}
        </ButtonStyled>
    )
}


export default Button