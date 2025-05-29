import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/luises-seeblick/', // wichtig für GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
