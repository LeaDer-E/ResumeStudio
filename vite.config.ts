import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ResumeStudio/', // This must match your GitHub repository name exactly
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
