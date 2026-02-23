import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://www.muehlberg-spreewald.de',
  vite: {
    plugins: [tailwindcss()],
  },
});
