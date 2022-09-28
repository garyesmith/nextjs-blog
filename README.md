
# Next.js Blog Demo

A demonstration of a blog implemented with React and Next.js to read blog posts from an API and paginate them to 5 per page.

## Usage

- `npm install`
- `npm run dev`

## Implementation Notes

This demo uses the following stack:

### Next.js

The [Next.js](https://nextjs.org/) framework is used to extend the base functionality of React to provide features such as server-side rendering and page routing.

### Typescript

This demonstration is coded using Typescript, with transpiling from `.ts` and `.tsx` to `.js` files occuring during `npm run dev` or `npm run build`. Typescript configuration is located in `tsconfig.json` and targets `es6`.

### Tanstack Query (React-Query)

The [Tanstack Query](https://tanstack.com/query/v4/docs/overview) (formerly known as React-Query) library is used to fetch data from an external API endpoint located at https://6144e843411c860017d256f0.mockapi.io/api/v1/posts.

Tanstack is integrated with Next.js using the method detailed in their [GitHub CodeSandbox](https://codesandbox.io/s/github/tanstack/query/tree/main/examples/react/nextjs?from-embed=&file=/pages/_app.js).

This integration uses Server-Side Rendering (SSR) to render the static HTML of the pages and then "hydrates" them with the dynamic data once it is available. This prevents a blank page from appearing while the data is fetched from the API.

