import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import eslintPlugin from '@nabla/vite-plugin-eslint';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), tailwindcss(), eslintPlugin()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@app': path.resolve(__dirname, '/src/app'),
      '@data': path.resolve(__dirname, './src/data'),
      '@entities': path.resolve(__dirname, './src/entities'),
      '@features': path.resolve(__dirname, './src/features'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@processes': path.resolve(__dirname, './src/processes'),
    },
  },
});
