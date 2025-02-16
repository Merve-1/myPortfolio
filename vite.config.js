import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/myPortfolio/', // Correct placement of base
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Set a higher limit (default is 500)
  },
});
