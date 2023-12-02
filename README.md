# Turbo Template

A template repo for setting up a [Turborepo](https://turbo.build/repo) with sensible default configurations for [TypeScript](https://www.typescriptlang.org/), [ESlint](https://eslint.org/) and [Jest](https://jestjs.io/) with a set of generic [code generators](https://turbo.build/repo/docs/core-concepts/monorepos/code-generation) for quickly bootstrapping [workspaces](https://turbo.build/repo/docs/handbook/workspaces).

## Quickstart

This repo uses [pnpm](https://pnpm.io/) as its package manager. To enable Node.js to use pnpm, you need to [enable Corepack](https://nodejs.org/api/corepack.html) and then activate the version of pnpm specified in the root `package.json` file.

```bash
corepack enable
corepack prepare --activate
```

Once Corepack is enabled, you can install your dependencies and use the generators to get your projects setup:

```bash
pnpm install
pnpm gen
```
