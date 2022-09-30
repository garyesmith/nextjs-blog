import React from 'react'
import { Footer } from "../components/Footer";
import "@testing-library/jest-dom";
import { render  } from "@testing-library/react";
import { ChakraProvider } from '@chakra-ui/react'

// Footer component
describe("Footer Component", () => {

  it("should render", () => {
    const { getByTestId } = render(
      <ChakraProvider><Footer /></ChakraProvider>
    );    
    const footer = getByTestId('footerText');
    expect(footer).toBeInTheDocument();
  });

  it("should contain the footer text", () => { 
    const { getByTestId } = render(
      <ChakraProvider><Footer /></ChakraProvider>
    );    
    const footer = getByTestId('footerText');
    const currYear=new Date().getFullYear();
    expect(footer).toHaveTextContent('© ' + currYear + ' Some Corp. All Rights Reserved.');

  });
  
});