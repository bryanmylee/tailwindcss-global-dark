[![npm version](http://img.shields.io/npm/v/tailwindcss-global-dark.svg)](https://www.npmjs.com/package/tailwindcss-global-dark)
[![npm downloads](https://img.shields.io/npm/dm/tailwindcss-global-dark.svg)](https://www.npmjs.com/package/tailwindcss-global-dark)
![license](https://img.shields.io/npm/l/tailwindcss-global-dark)
![build](https://img.shields.io/github/workflow/status/bryanmylee/tailwindcss-global-dark/publish)
[![size](https://img.shields.io/bundlephobia/min/tailwindcss-global-dark)](https://bundlephobia.com/result?p=tailwindcss-global-dark)

A TailwindCSS variant for [class-based dark mode](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually) with CSS modules.

In popular frameworks like Svelte, stylesheets are **scoped with CSS modules by default**. Using `@apply dark:text-white` in a scoped stylesheet will produce incorrect CSS for the class-based dark mode on TailwindCSS.

`tailwindcss-global-dark` introduces a `gdark` variant that adds the [`:global`](https://github.com/css-modules/css-modules#exceptions) modifier to the `.dark` class used by TailwindCSS.

```svelte
<style lang="postcss">
  .incorrect {
    @apply dark:bg-red-400
    /* compiles to .dark.svelte-1847890 .correct.svelte-1847890 */
  }

  .correct {
    @apply gdark:bg-green-400;
    /* compiles to .dark .correct.svelte-1847890 */
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
