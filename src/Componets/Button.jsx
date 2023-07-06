import React from "react";
import { Link } from "react-router-dom";  
import "./Button.css";



const Styles =  ["Btn--primary","Btn--outline"]

const Sizes =  ["Btn--medium","Btn--large"]

export const Button =({
    children,
    type, 
    onclick,
    ButtonStyle,
    ButtonSize,  
}) => {
    const checkButtonStyle =Styles.includes(ButtonStyle) ?   ButtonStyle: Styles[0]

    const checkButtonSize =  Sizes.includes(ButtonSize) ?   ButtonSize: Sizes[0]

return (
    <Link to="/Products" classname="Btn-moile">
        <Button
        classname={"Btn ${checkButtonStyle} ${checkButtonSize}"}
        onclick={onclick}
        type={type}
        >
            {children}
        </Button>
    </Link>
)   
}

export default  Button

