import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: '/myPortfolio/', // Correct placement of base
  plugins: [react(), svgr()],
  build: {
    chunkSizeWarningLimit: 1000, // Set a higher limit (default is 500)
  },
});
