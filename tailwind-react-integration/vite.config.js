import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'  // make sure React plugin is included
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),  // <-- this is the Tailwind plugin
  ],
})
