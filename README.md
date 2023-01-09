# Demo

## Get Started

First, run the server:

```
nx serve demoapp
```

Open http://localhost:4200 with your browser to see the result.
The pages/api directory is mapped to /api/\*. Files in this directory are treated as API routes instead of React pages.

## Scripts

- Run `nx graph` to see a diagram of the dependencies of the projects.
- Run `nx build` to build project.
- Run `nx serve demoapp` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.
- Run `nx server` to start the mock server. Navigate to http://localhost:3000/.
- Run `nx test` to run all test.
- Run `nx lint` to use Eslint.
- Run `pnpm run format:check` to use Prettier to do format check.
- Run `pnpm run format` to use Prettier to correct format.
- Run `nx e2e demoapp-e2e` to run E2E tests.

## Naming conventions

- Component: PascalCase

## Tech Stack

### List

| Name                  | Description                                                                                                                                                                                                                  |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nx                    | Nx is a smart, fast and extensible build system with first class monorepo support and powerful integrations.                                                                                                                 |
| React                 | A JavaScript library for building user interfaces.                                                                                                                                                                           |
| Next.js               | Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.                           |
| Redux toolkit         | The official, opinionated, batteries-included toolset for efficient Redux development                                                                                                                                        |
| emotion               | a library designed for writing css styles with JavaScript.                                                                                                                                                                   |
| i18n                  | i18next is an internationalization-framework written in and for JavaScript.                                                                                                                                                  |
| React testing library | The React Testing Library is a very light-weight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices. |
| Jest                  | Jest is a delightful JavaScript Testing Framework with a focus on simplicity.                                                                                                                                                |
| Eslint                | ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.                                                    |
| Prettier              | An opinionated code formatter.                                                                                                                                                                                               |
| husky                 | lint your commit messages, run tests, lint code, etc... when you commit or push.                                                                                                                                             |
| Axios                 | Axios is a promise-based HTTP Client for node.js and the browser.                                                                                                                                                            |
| Material UI           | MUI offers a comprehensive suite of UI tools to help you ship new features faster.                                                                                                                                           |
| pnpm                  | PNPM is an alternative package manager for Node. js which stands for “Performant NPM”.                                                                                                                                       |
| Apollo GraphQL        | Pa comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.                                                                                                 |

### NX

We’re going to use Nx for this setup because it provides a series of advantages:

- support for multiple apps (we can easily add more apps to our workspace and share common logic)
- structure our code as workspace libraries, thus facilitating a cleaner architecture, code reuse and responsibility segregation
- improved build and test speed via Nx affected commands and computation caching
- out of the box support for code generation, Storybook and Cypress integration

### React

A JavaScript library for building user interfaces.

### Next.js

Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.

### Emotion

It provides powerful and predictable style composition in addition to a great developer experience with features such as source maps, labels, and testing utilities. Both string and object styles are supported.

## Project structure

```
demo/
├── apps/
├── libs/
├── tools/
├── nx.json
├── package.json
└── tsconfig.base.json
```

/apps/ contains the application projects. This is the main entry point for a runnable application. We recommend keeping applications as light-weight as possible, with all the heavy lifting being done by libraries that are imported by each application.

/libs/ contains the library projects. There are many kinds of libraries, and each library defines its own external API so that boundaries between libraries remain clear.

/tools/ contains scripts that act on your code base. This could be database scripts, local executors, or local generators.

/nx.json configures the Nx CLI itself. It tells Nx what needs to be cached, how to run tasks etc.

/tsconfig.base.json sets up the global TypeScript settings and creates aliases for each library to aid when creating TS/JS imports.

## Procedure

### commit

### push

## Version release
