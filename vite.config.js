import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// this is for gh pages
// export default defineConfig({
//   base: '/Hospital-Dashboard',
//   plugins: [react()],
// });

// this is for vercel app
export default defineConfig({
  base: './',
  plugins: [react()],
});


