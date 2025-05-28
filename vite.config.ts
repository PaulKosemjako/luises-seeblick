import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/luises-seeblick/', // << das ist wichtig für GitHub Pages!
});
