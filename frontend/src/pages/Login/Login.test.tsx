// react testing library
import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import Login from './Login'
import matchers from '@testing-library/jest-dom'

expect.extend(matchers)

describe("Login", () => {
    // import the component to be tested
    it("Test Login", () => {
        render(<Login />);
        expect(screen.getByText("Login")).toBeInTheDocument();
    });
});
