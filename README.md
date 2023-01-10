# Demo

## Get Started

First, install all the dependencies:

```
npm install
```

Then, run the server:

```
pnpm run start
```

Open http://localhost:4200 with your browser to see the result.

Or run the local json-server at port 3000:

```
pnpm run server
```

## Scripts

In package.json file, choose one command to run:

- Run `build` to build project.
- Run `serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.
- Run `server` to start the mock server. Navigate to http://localhost:3000/.
- Run `test` to run all test.
- Run `affected-test` to run all test.
- Run `lint` to use Eslint.
- Run `format:check` to use Prettier to do format check.
- Run `format` to use Prettier to correct format.

## Naming conventions

Reference Link: [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)

| Style          | Category                                                           |
| -------------- | ------------------------------------------------------------------ |
| UpperCamelCase | class / interface / type / enum / decorator / type parameters      |
| lowerCamelCase | variable / parameter / function / method / property / module alias |
| CONSTANT_CASE  | global constant values, including enum values.                     |
| #ident         | private identifiers are never used.                                |

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
| json-server           | Get a full fake REST API with zero coding in less than 30 seconds (seriously)                                                                                                                                                |

### NX

We’re going to use Nx for this setup because it provides a series of advantages:

- support for multiple apps (we can easily add more apps to our workspace and share common logic)
- structure our code as workspace libraries, thus facilitating a cleaner architecture, code reuse and responsibility segregation
- improved build and test speed via Nx affected commands and computation caching
- out of the box support for code generation, Storybook and Cypress integration

### Next.js

The pages/api directory is mapped to /api/\*. Files in this directory are treated as API routes instead of React pages.

### Emotion

It provides powerful and predictable style composition in addition to a great developer experience with features such as source maps, labels, and testing utilities. Both string and object styles are supported.

### next-i18next

The easiest way to translate your Next.js apps.
While next-i18next uses i18next and react-i18next under the hood, users of next-i18next simply need to include their translation content as JSON files and don't have to worry about much else.

## Project structure

```bash
+---.github
|   \---workflows
+---.husky
+---apps
|   +---demoapp
|   |   +---.next
|   |   +---public
|   |   |   \---locales
|   |   +---specs
|   |   \---src
|   |       +---common
|   |       |   \---components
|   |       +---features
|   |       |   \---counter
|   |       +---hooks
|   |       +---pages
|   |       +---store
|   |       +---styles
|   |       \---utils
|   \---demoapp-e2e
+---data
+---libs
+---node_modules
+---tsconfig.base.json
+---nx.json
```

/apps/ contains the application projects. This is the main entry point for a runnable application. We recommend keeping applications as light-weight as possible, with all the heavy lifting being done by libraries that are imported by each application.

/libs/ contains the library projects. There are many kinds of libraries, and each library defines its own external API so that boundaries between libraries remain clear.

/tools/ contains scripts that act on your code base. This could be database scripts, local executors, or local generators.

/nx.json configures the Nx CLI itself. It tells Nx what needs to be cached, how to run tasks etc.

/tsconfig.base.json sets up the global TypeScript settings and creates aliases for each library to aid when creating TS/JS imports.

## Procedure

### commit

With pre-commit husky hook, each commit will first run:

```
npx lint-staged
```

With commitlint, it will also check if your commit messages meet the [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0/).

### push

With pre-push husky hook, each push will first run:

```
npx nx affected --target=test --base=remotes/origin/main --head=HEAD
```

## Version release

semantic-release uses the commit messages to determine the consumer impact of changes in the codebase. Following formalized conventions for commit messages, semantic-release automatically determines the next semantic version number, generates a changelog and publishes the release.

By default, semantic-release uses Angular Commit Message Conventions.

Tools such as commitizen or commitlint can be used to help contributors and enforce valid commit messages.

The table below shows which commit message gets you which release type when semantic-release runs (using the default configuration):
| Commit message | Release type |
| ----------- | ----------- |
| fix(pencil): stop graphite breaking when too much pressure applied | Patch Fix Release |
| feat(pencil): add 'graphiteWidth' option | Minor Feature Release |
| BREAKING CHANGE: The graphiteWidth option has been removed. | Major Breaking Release |
