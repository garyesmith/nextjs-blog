import React from 'react'
import { PostFull } from "../components/PostFull";
import "@testing-library/jest-dom";
import { render  } from "@testing-library/react";
import { ChakraProvider } from '@chakra-ui/react'

// PostFull component
describe("PostFull Component", () => {

    const samplePost = {
        title: "Test Title",
        description: "Test description",
        createdAt: "2021-05-20T01:13:07.861Z",
        updatedAt: "2021-09-17T04:11:19.105Z",
        id: "999",
        authors: [],
        comments: []    
    }

    it("should render", () => {
        const { getByTestId } = render(
            <ChakraProvider><PostFull {...samplePost} /></ChakraProvider>
        );
        const post = getByTestId('postContainer');
        expect(post).toBeInTheDocument();
    });

    it("should contain the post content fields", () => { 
        const { getByTestId } = render(
            <ChakraProvider><PostFull {...samplePost} /></ChakraProvider>
        ); 

        const postTitle = getByTestId('postTitle');
        expect(postTitle).toHaveTextContent('Test Title');

        const postDescription = getByTestId('postDescription');
        expect(postDescription).toHaveTextContent('Test description');

        const postPublishedAt = getByTestId('postPublishedAt');
        expect(postPublishedAt).toHaveTextContent('Published May 19, 2021 9:13:07. Updated September 17, 2021 12:11:19');

    });
  
});