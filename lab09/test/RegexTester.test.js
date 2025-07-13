import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { expect } from 'chai';
import RegexTester from '../src/RegexTester';

describe('RegexTester Component', () => {
  it('renders input box', () => {
    render(<RegexTester />);
    const input = screen.getByPlaceholderText('Type something...');
    expect(input).to.exist;
  });

  it('shows match message for valid input', () => {
    render(<RegexTester />);
    const input = screen.getByPlaceholderText('Type something...');
    fireEvent.change(input, { target: { value: 'aaa' } });
    expect(screen.getByText('Matches evil regex!')).to.exist;
  });

  it('shows no match message for invalid input', () => {
    render(<RegexTester />);
    const input = screen.getByPlaceholderText('Type something...');
    fireEvent.change(input, { target: { value: 'abc' } });
    expect(screen.getByText('No match')).to.exist;
  });
});
