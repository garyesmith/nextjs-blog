import React, {useState} from 'react'
import { Header } from "../components/Header";
import "@testing-library/jest-dom";
import { render  } from "@testing-library/react";
import { ChakraProvider } from '@chakra-ui/react'

// Header component
describe("Header Component", () => {

  it("should render", () => {
    const { getByTestId } = render(
      <ChakraProvider><Header /></ChakraProvider>
    );    
    const header = getByTestId('mainHeading');
    expect(header).toBeInTheDocument();
  });

  it("should contain the blog title text", () => { 
    const { getByTestId } = render(
      <ChakraProvider><Header /></ChakraProvider>
    );    
    const header = getByTestId('mainHeading');
    expect(header).toHaveTextContent('A Demo Blog');

  });
  
});