[![npm version](http://img.shields.io/npm/v/tailwindcss-global-dark.svg)](https://www.npmjs.com/package/tailwindcss-global-dark)
[![npm downloads](https://img.shields.io/npm/dm/tailwindcss-global-dark.svg)](https://www.npmjs.com/package/tailwindcss-global-dark)
![license](https://img.shields.io/npm/l/tailwindcss-global-dark)
![build](https://img.shields.io/github/workflow/status/bryanmylee/tailwindcss-global-dark/publish)
[![size](https://img.shields.io/bundlephobia/min/tailwindcss-global-dark)](https://bundlephobia.com/result?p=tailwindcss-global-dark)

A TailwindCSS variant for [class-based dark mode](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually) with Svelte's scoped stylesheets and CSS modules.

If you've ever tried to use TailwindCSS dark mode with Svelte and received an `Unused CSS selector ".dark ..."` error, this plugin is for you.

## Motivations

TailwindCSS uses a global `.dark` class for its manual dark mode, and the `dark:` selector simply adds `.dark` as a parent selector. When the `.dark` selector gets scoped, it breaks manual dark mode functionality.

`tailwindcss-global-dark` introduces a `gdark` variant that adds the [`:global`](https://github.com/css-modules/css-modules#exceptions) modifier to the `.dark` class used by TailwindCSS.

## Usage

Simply replace `dark:` with `gdark:`

```svelte
<style lang="postcss">
  .incorrect {
    @apply dark:bg-red-400;
    /* transpiles to - .dark .incorrect {...} */
  }

  .correct {
    @apply gdark:bg-green-400;
    /* transpiles to - :global(.dark) .correct {...} */
  }
</style>
```

## Installation

```bash
$ npm i tailwindcss-global-dark
```

Add the plugin to `tailwind.config.cjs`:

```js
module.exports = {
  ...
  theme: { ... },
  plugins: [require('tailwindcss-global-dark')]
};
```
