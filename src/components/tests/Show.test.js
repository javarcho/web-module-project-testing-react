import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';

const testShow = {

    name: " Stanger Things",
    summary: "summary",
    seasons: [{id: "1", name: "hello", episode:[]}, {id: "2", name: "hello", episodes: []}]  
    }
    
    test('renders testShow and no selected Season without errors', ()=>{
        render(<Show show={testShow}  selectedSeason={"none"}/>)
    });
    
    test('renders Loading component when prop show is null', () => {
        render(<Show show={null}/>)
        const value = screen.queryByText(/Fetching data.../i)
        expect(value).toBeInTheDocument()
    });
    
    test('renders same number of options seasons are passed in', ()=>{
        render(< Show show={testShow} selectedScreen={"none"} />)
        const seasonButton = screen.getByLabelText(/Select a Season/i)
        expect(seasonButton).toBeInTheDocument()
        userEvent.click(seasonButton);
        const seasonOption = screen.getByTestId("season-option")
        console.log("seasonOption:", seasonOption);
        expect(seasonOption).toHaveLength(1);
    
    
    });
    
    test('handleSelect is called when an season is selected', () => {
    render(<Show show={testShow} selectedScreen={"none"}/>)
    const handleSelect = screen.getByLabelText(/handleSelect/)
    expect(handleSelect) = screen.toBeInTheDocument()
    
    });
    