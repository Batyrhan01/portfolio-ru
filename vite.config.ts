import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' — относительные пути к файлам.
// Благодаря этому сайт работает на GitHub Pages по любому адресу (например /my-repo/).
export default defineConfig({
  plugins: [react()],
  base: './',
});
