import React from "react";
import  "@testing-library/jest-dom/extend-expect"
import  { fireEvent, render}  from "@testing-library/react"
import Cards from "../Cards";

test("renders  content"), () => {
    const cards = {
        content:"luxury",
        label:  true
    }
}

const component = render (<Cards  cards={Cards} />)

component.getAllByLabelText("luxury")
component.getAllByLabelText("Adventure")
component.getByAltText("Travel through the Islands of Los Roques in a Private Cruise")

expect(component.container).toHaveTextContent("Efil Tower")

const lu =  component.container.querySelector("lu")
console.log(lu)

Text("cliking the Card calls event handler once"), () => {
    const Cards={
    content: "Cards"   
    }
}   
const mockHandler =jest()

const Cards =component.findAllByAltText("Amalfi Coast")
fireEvent.click(Cards)

expect(mockHandler.mock.call).toHaveLength(2)