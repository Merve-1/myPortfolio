import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    base: '/myPortfolio/', // Replace with your repository name
    chunkSizeWarningLimit: 1000, // Set a higher limit (default is 500)
  },
});
