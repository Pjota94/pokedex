/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      grass: "#C5E3D4",
      fire: "rgba(235, 121, 33, 0.48)",
      water: "rgba(69, 146, 196, 0.48)",
      bug: "#e3f7a3",
      normal: "rgba(164, 173, 176, 0.48)",
      poison: "rgba(185, 126, 200, 0.48)",
      electric: "rgba(238, 213, 53, 0.48)",
      ground: "rgba(210, 186, 74, 0.48)",
      fairy: "rgba(238, 183, 232, 0.48)",
      fighting: "rgba(219, 114, 49, 0.48)",
      psychic: "rgba(238, 113, 194, 0.6)",
      rock: "rgba(156, 138, 53, 0.48)",
      ghost: "rgba(123, 98, 163, 0.65)",
      ice: "rgba(92, 196, 230, 0.48)",
      dragon: "rgba(122, 109, 248, 0.48)",
      "poison-hover": "rgba(185, 126, 200, 1)",
      "electric-hover": "rgba(238, 213, 53, 1)",
      "ground-hover": "rgba(210, 186, 74, 1)",
      "fairy-hover": "rgba(238, 183, 232, 1)",
      "fighting-hover": "rgba(219, 114, 49, 1)",
      "psychic-hover": "rgba(238, 113, 194, 1)",
      "rock-hover": "rgba(156, 138, 53, 1)",
      "ghost-hover": "rgba(123, 98, 163, 1)",
      "ice-hover": "rgba(92, 196, 230, 1)",
      "dragon-hover": "rgba(122, 109, 248, 1)",
      "normal-hover": "rgba(164, 173, 176, 1)",
      "grass-hover": "#70c199",
      "fire-hover": "rgba(235, 121, 33, 1)",
      "water-hover": "rgba(69, 146, 196, 1)",
      "bug-hover": "#d6ed7b",
    },
  },
};
export const plugins = [];
