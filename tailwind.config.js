module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {},
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#d6dd6a",

          "secondary": "#e8515b",

          "accent": "#d84934",

          "neutral": "#151623",

          "base-100": "#F6F7F8",

          "info": "#80C0EA",

          "success": "#74ECC6",

          "warning": "#F9AD5D",

          "error": "#F32B42",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
