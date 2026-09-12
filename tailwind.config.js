// Regenerate tailwind.css after adding any new Tailwind utility class to index.html:
//   npx tailwindcss@3 -i tailwind-input.css -o tailwind.css --minify -c tailwind.config.js
// This mirrors the tailwind.config that used to be inlined for the CDN Play build.
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        ink:     { DEFAULT:'rgb(var(--c-ink)/<alpha-value>)', soft:'rgb(var(--c-ink-soft)/<alpha-value>)', faint:'rgb(var(--c-ink-faint)/<alpha-value>)' },
        sage:    { 900:'rgb(var(--c-sage-900)/<alpha-value>)', 700:'rgb(var(--c-sage-700)/<alpha-value>)', DEFAULT:'rgb(var(--c-sage)/<alpha-value>)', 300:'rgb(var(--c-sage-300)/<alpha-value>)', 100:'rgb(var(--c-sage-100)/<alpha-value>)' },
        gold:    { DEFAULT:'rgb(var(--c-gold)/<alpha-value>)', light:'rgb(var(--c-gold-light)/<alpha-value>)', pale:'rgb(var(--c-gold-pale)/<alpha-value>)' },
        paper:   'rgb(var(--c-paper)/<alpha-value>)',
        surface: { DEFAULT:'rgb(var(--c-surface)/<alpha-value>)', alt:'rgb(var(--c-surface-alt)/<alpha-value>)' },
        line:    { DEFAULT:'rgb(var(--c-line)/<alpha-value>)', soft:'rgb(var(--c-line-soft)/<alpha-value>)' },
        deep:    { DEFAULT:'rgb(var(--c-deep)/<alpha-value>)', fg:'rgb(var(--c-deep-fg)/<alpha-value>)' },
        danger:  'rgb(var(--c-danger)/<alpha-value>)',
      },
      fontFamily: {
        display: ['Fraunces','Georgia','serif'],
        sans:    ['Jost','ui-sans-serif','system-ui','sans-serif'],
      },
    }
  }
}
