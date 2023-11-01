// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // ... other build options
  },
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
      ],
    },
  },
});
