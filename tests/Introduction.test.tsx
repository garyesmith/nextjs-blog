import React, {useState} from 'react'
import { Introduction } from "../components/Introduction";
import "@testing-library/jest-dom";
import { render  } from "@testing-library/react";
import { ChakraProvider } from '@chakra-ui/react'

// Introduction component
describe("Introduction Component", () => {

  it("should render", () => {
    const { getByTestId } = render(
      <ChakraProvider><Introduction>Test Text</Introduction></ChakraProvider>
    );    
    const intro = getByTestId('introductionBox');
    expect(intro).toBeInTheDocument();
  });

  it("should contain the introduction text", () => { 
    
    const { getByTestId } = render(
        <ChakraProvider><Introduction>Test Text</Introduction></ChakraProvider>
    );    

    const intro = getByTestId('introductionBox');
    expect(intro).toHaveTextContent('Test Text');

  });
  
});