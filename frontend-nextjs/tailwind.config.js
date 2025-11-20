/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* BG Tokens */
        "bg-strong": "var(--bg-strong-950)",
        "bg-surface": "var(--bg-surface-800)",
        "bg-soft": "var(--bg-soft-200)",
        "bg-weak": "var(--bg-weak-50)",

        /* TEXT Tokens */
        "text-strong": "var(--text-strong-950)",
        "text-sub": "var(--text-sub-600)",
        "text-soft": "var(--text-soft-400)",
        "text-disabled": "var(--text-disabled-300)",

        /* STROKE Tokens */
        "stroke-strong": "var(--stroke-strong-950)",
        "stroke-sub": "var(--stroke-sub-300)",
        "stroke-soft": "var(--stroke-soft-200)",

        /* ICON Tokens */
        "icon-strong": "var(--icon-strong-950)",
        "icon-sub": "var(--icon-sub-600)",
        "icon-soft": "var(--icon-soft-400)",
        "icon-disabled": "var(--icon-disabled-300)",
      },

      borderColor: {
        "stroke-strong": "var(--stroke-strong-950)",
        "stroke-sub": "var(--stroke-sub-300)",
        "stroke-soft": "var(--stroke-soft-200)",
      },

      textColor: {
        "text-strong": "var(--text-strong-950)",
        "text-sub": "var(--text-sub-600)",
        "text-soft": "var(--text-soft-400)",
        "text-disabled": "var(--text-disabled-300)",
      },

      backgroundColor: {
        "bg-strong": "var(--bg-strong-950)",
        "bg-surface": "var(--bg-surface-800)",
        "bg-soft": "var(--bg-soft-200)",
        "bg-weak": "var(--bg-weak-50)",
      },

      fill: {
        "icon-strong": "var(--icon-strong-950)",
        "icon-sub": "var(--icon-sub-600)",
        "icon-soft": "var(--icon-soft-400)",
        "icon-disabled": "var(--icon-disabled-300)",
      },

      stroke: {
        "icon-strong": "var(--icon-strong-950)",
        "icon-sub": "var(--icon-sub-600)",
        "icon-soft": "var(--icon-soft-400)",
        "icon-disabled": "var(--icon-disabled-300)",
      },
    },
  },
  plugins: [],
};
