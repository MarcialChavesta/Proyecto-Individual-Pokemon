import React from 'react';
import {screen, render} from '@testing-library/react';
import Card from './Card.jsx'
describe('Card',()=>{
    it('Pokemon sin nombre',()=>{
        render(<Card/>)
        expect(screen.queryByText(/Card/i)).toBeInTheDocument()
    })
})
