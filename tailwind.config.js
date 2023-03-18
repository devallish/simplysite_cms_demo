module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js", "./slices/**/*.js"],
  theme: {
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif:
        '"Libre Baskerville", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    },
    extend: {},
    colors: {
      blue: '#a5b4fc',
      teal: '#99f6e4',
      zinc: '#d4d4d8'
    }
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
