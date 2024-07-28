import path from 'path';
import reactPlugin from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import { defineConfig } from 'vite';

const isTest = process.env.NODE_ENV === 'test';

export default defineConfig({
  plugins: [!isTest && TanStackRouterVite(), reactPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
