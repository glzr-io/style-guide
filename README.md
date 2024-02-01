# Style Guide &middot; [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/glzr-io/actions/pulls) [![License](https://img.shields.io/github/license/glzr-io/actions)](https://github.com/glzr-io/actions/blob/main/LICENSE.md) [![Discord invite](https://img.shields.io/discord/1041662798196908052.svg?logo=discord&colorB=7289DA)](https://discord.gg/ud6z3qjRvM)

## Prettier

To use one of the Prettier config, add the following to `package.json`:

```json
{
  "prettier": "@glzr/style-guide/prettier"
}
```

## TSConfig

To use one of the TSConfig files available, add the following to `tsconfig.json`:

```json
{
  "extends": "@glzr/style-guide/tsconfig/solidjs-lib"
}
```

**Available configs:**

- Vanilla Node.js (`@glzr/style-guide/tsconfig/vanilla-nodejs`)
- Vanilla bundler (`@glzr/style-guide/tsconfig/vanilla-bundler`)
- Astro app (`@glzr/style-guide/tsconfig/astro-app`)
- NestJS app (`@glzr/style-guide/tsconfig/nestjs-app`)
- SolidJS app (`@glzr/style-guide/tsconfig/solidjs-app`)
- SolidJS library (`@glzr/style-guide/tsconfig/solidjs-lib`)

[TotalTypescript](https://www.totaltypescript.com/tsconfig-cheat-sheet) is a great reference for TSConfig guidelines.
