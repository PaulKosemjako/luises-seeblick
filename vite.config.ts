import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👉 unbedingt base setzen!
export default defineConfig({
  base: '/luises-seeblick/',  // ⬅️ Name deines Repos!
  plugins: [react()],
})
