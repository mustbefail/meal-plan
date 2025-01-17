# Meal Plan

This project is a web application built using modern tools like React and Vite. It includes configurations for linting,
commit validation, and development utilities.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [DevDependencies](#devdependencies)
- [Linting and Pre-commit Hooks](#linting-and-pre-commit-hooks)
- [Development](#development)
- [Contributing](#contributing)

## Features

- **Next js**: A React framework for building server-rendered applications.
- **ESLint**: Ensures consistent and error-free code.
- **Husky & Lint-staged**: Streamlined Git workflows with pre-commit hooks.
- **TypeScript Support**: Includes type definitions for React and DOM.

## Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd meal-plan
npm install
```

## Scripts

The following scripts are available:

- **npm run dev**: Starts the development server.
- **npm run build**: Builds the application for production.
- **npm run start**: Previews the production build.
- **npm run lint**: Runs ESLint to check code quality.
- **npm run prepare**: Sets up Husky for Git hooks.

The project is configured with ESLint and Husky to enforce code quality. Pre-commit hooks run linting on staged files
using lint-staged.

* **fix**: For bug fixes
* **feat**: For new features
* **refactor**: For restructuring the code without adding features or fixing bugs
* **build**: For changes in the build system or dependencies
* **ci**: For changes in the CI/CD configuration
* **docs**: For changes in the documentation only
* **perf**: For performance optimizations
* **style**: For fixing code formatting
* **test**: For adding or adjusting tests

## Configurations

* **ESLint:** Located in .eslintrc.json.
* **Husky:** Automatically configured by prepare script.
* **Lint-staged:** Runs ESLint fixes on staged files.
*

## Development

Start the development server:

```bash
Копировать код
npm run dev
```

Build the project for production:

```bash
Копировать код
npm run build
```

Preview the production build locally:

```bash
npm run start
```

## Contributing

* Fork the repository.
* Create a new branch (git checkout -b feature-branch).
* Commit your changes (git commit -m "Add new feature").
* Push the branch (git push origin feature-branch).
* Open a pull request.
