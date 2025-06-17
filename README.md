# Modern React Development Setup

This is a starter template for React projects that comes pre-configured with all the essential development tools and best practices. It's designed to help you kickstart your React development with a solid foundation, including code quality tools, Git hooks, and modern development practices.

## 🎯 Purpose

This template aims to:
- Provide a quick way to start new React projects with TypeScript
- Include all necessary development tools pre-configured
- Enforce code quality and consistency from day one
- Save time on initial project setup and configuration

## 🚀 Tech Stack

- **React 18** - Latest version of React with concurrent features
- **TypeScript** - For type safety and better developer experience
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **SWC** - Super-fast compiler for JavaScript/TypeScript

## 🛠️ Development Tools

- **ESLint** - Code linting with TypeScript support
- **Prettier** - Code formatting
- **Husky** - Git hooks for pre-commit checks
- **lint-staged** - Run linters on staged files
- **commitlint** - Conventional commit messages
- **EditorConfig** - Consistent coding styles across editors

## 🏁 Getting Started

1. Clone this repository as a template for your new project:
```bash
git clone [repository-url] your-project-name
cd your-project-name
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn dev
```

4. Build for production:
```bash
yarn build
```

5. Preview production build:
```bash
yarn preview
```

## 📦 Project Structure

```
├── src/           # Source files
├── public/        # Static assets
├── .husky/        # Git hooks
└── ...config files
```

## 🔧 Code Quality

This project uses a comprehensive set of tools to ensure code quality:

- TypeScript for static type checking
- ESLint with TypeScript and React plugins
- Prettier for consistent code formatting
- Husky for pre-commit hooks
- Conventional commits for better version control

## 📝 License

This project is private and proprietary.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configurations

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
