import Search from './Search';
import React from 'react';
import axios from 'axios';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

jest.mock('axios')

describe('Search',()=>{
    test('display story'), async()=>{
        const mockStory=[
            {objectID: '1', title: "Stephen Hawking"},
            {objectID: '2', title: "Steve Jobs has passed away"},
            {objectID: '3', title: "Reflecting on one very"},
        ]
        axios.get.mockImplementationOnce(() =>
        Promise.resolve({ data: { hits: mockStory } })
        );
        render(<Search />);
        await act(async () => {
        await userEvent.click(screen.getByRole('button'));

        const items = await screen.findAllByRole('stories');
        expect(items).toHaveLength(3);
    });
    
}})
