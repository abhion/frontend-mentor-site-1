// vite.config.js
import { defineConfig } from 'vite';
import tailwindcss from "tailwindcss"

export default defineConfig({
  build: {
    // ... other build options
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
      ],
    },
  },
});
