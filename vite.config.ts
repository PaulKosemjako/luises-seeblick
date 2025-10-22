import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    base: command === 'serve' ? '/' : './', // lokal /, auf dem Server relative Pfade
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
    },
  };
});
