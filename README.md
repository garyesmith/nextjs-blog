
# Next.js Blog Demo

A demonstration of a blog implemented with React and Next.js to read blog posts from an API and paginate them to 5 per page.

Vercel deployment: https://nextjs-blog-eta-livid-53.vercel.app

## Usage

### Dependencies

- Node (tested with v16.10.0)
- NPM (tested with v7.24.1)
- TypeScript (tested with v4.8.4)

### To Install

- `npm install`

### To run in development

- `npm run dev`

### To build for deployment

- `npm run build`
- `npm run start`

### To run unit tests

Basic unit tests for components have been implemented using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro). Test cases are located in the `/tests` folder.

- `npm test`

## Implementation Notes

This project uses the following stack:

### Next.js

The [Next.js](https://nextjs.org/) framework is used to extend the base functionality of React to provide features such as server-side rendering and page routing.

### Typescript

Typescript configuration is located in `tsconfig.json` and is set to target `es6`.

### Tanstack Query (React-Query)

The [Tanstack Query](https://tanstack.com/query/v4/docs/overview) (formerly *React-Query*) library is used to fetch data from an external API endpoint located at https://6144e843411c860017d256f0.mockapi.io/api/v1/posts.

Tanstack is integrated with Next.js using the method detailed in their [GitHub CodeSandbox](https://codesandbox.io/s/github/tanstack/query/tree/main/examples/react/nextjs?from-embed=&file=/pages/_app.js).

This integration uses Server-Side Rendering (SSR) to render the static HTML of the pages and then "hydrates" them with the dynamic data once it is available. This prevents a blank page from appearing while the data is fetched from the API.

The `usePosts` hook fetches data from the API and pre-sorts it by the `createdAt` field to ensure the newest posts are always displayed first, by creation date.

### Chakra-UI

The [Chakra-UI](https://chakra-ui.com/) library is used for visual styling. This UI library provides extensive options for positioning, coloring and sizing the content across responsive layouts. The styling options available from Chakra-UI make a lower-level CSS module such as  `styled-components` unneccessary.

## Future enhancements

- Restore state of previously loaded posts when clicking back from an individual post page to the post index.