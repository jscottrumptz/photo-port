import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// This will ensure that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup);

// The string that we passed into the describe function declares which component is being tested (i.e., About component)
describe('About component', () => {
    // First Test - baseline to verify that the component is rendering
    it('renders', () => {
        render(<About />);
    });

    // Second Test - compare snapshot versions of the DOM node structure
    it('matches snapshot DOM node structure', () => {
        // render About - use the asFragment function, which returns a snapshot of the About component.
        const { asFragment } = render(<About />);
        // test and compare whether the expected and actual outcomes match.
        expect(asFragment()).toMatchSnapshot();
    })
})