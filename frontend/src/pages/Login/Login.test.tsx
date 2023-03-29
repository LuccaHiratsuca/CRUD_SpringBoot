// react testing library
import { render, screen } from '@testing-library/react'
import { expect } from 'jest-without-globals'
import { describe, it } from 'vitest'
import Login from './Login'


// import the component to be tested
describe("<Login />", () => {
    it('renders the title', () => {

        // render the component
        render(<Login />);
        // toBeInTheDocument() is a method from jest-dom
        expect(screen.getByText('Login')).toBeInTheDocument();
    });
});


