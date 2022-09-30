import React from 'react'
import { PostsIndex } from "../components/PostsIndex";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ChakraProvider } from '@chakra-ui/react'
import { usePosts } from "../hooks/usePosts";

const mockedUsePosts = usePosts as jest.Mock<any>; 
jest.mock("../hooks/usePosts");

describe("PostsIndex Component", () => {

	beforeEach(() => {
		mockedUsePosts.mockImplementation(() => ({ isLoading: true }));
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("Renders without crashing", () => {
		render(<PostsIndex />);
	});

	it("Renders with data", () => {
		const mockedPostsData = [{
			title: "Test title",
			description: "Similique ipsum ut quae et cum.",
			createdAt: "2021-05-20T01:13:07.861Z",
			updatedAt: "2021-09-17T04:11:19.105Z",
			id: "999",
			comments: [],
			authors: []
		}];

		mockedUsePosts.mockImplementation(() => ({ isLoading: false, data: mockedPostsData }));

		const { getByTestId } = render(<PostsIndex />);
		
    	const postsContainer = getByTestId('posts_index_component');
    	expect(postsContainer).toBeInTheDocument();

		// to-do: add conditions here to verify the mock data is rendering in the element

	});

});
