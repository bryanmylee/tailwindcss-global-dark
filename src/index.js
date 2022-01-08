const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addVariant, e }) => {
  addVariant('gdark', ({ container, separator }) => {
    container.walkRules((rule) => {
      const className = rule.selector.slice(1);
      rule.selector = `:global(.dark) .${e(`gdark${separator}${className}`)}`;
    });
  });
});
