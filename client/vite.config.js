import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // works on GitHub Pages, Render or any custom domain
  server: {
    // During development, forward /api calls to the Express server.
    proxy: { '/api': 'http://localhost:5000' },
  },
});
