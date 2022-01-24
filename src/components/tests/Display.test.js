import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from './../Display';


const testShow = {
    name: "Stranger Things",
    summary: "summary",
    seasons: [{id: "1", name: "hello", episode:[]}, {id: "2", name: "hello", episodes: []}]  
    
}


test("Display component renders without any passed in props", () =>{
    render(<Display/>)
})

test("when fetch button is pressed, SHow component will display", () => {
    const {act} = render(<Display/>)
} )

test("show component displays when fetch button is pressed" , async () =>{
render(<Display/>)
const button = screen.getByRole("button")
userEvent.click(button)
fetchShow.mockResovledValueOnce(testShow)

const showComp = await screen.findByTestId("show-container")
expect(showComp).toBeInTheDocument()

} )