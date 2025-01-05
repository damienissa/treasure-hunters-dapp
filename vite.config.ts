import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';


export default defineConfig({
  plugins: [react(), basicSsl(), nodePolyfills({
    protocolImports: true, // Enable polyfills for global Node.js modules
  }),],
  build: {
    outDir: './docs'
  },
  base: './',
  resolve: {
    alias: {
      buffer: 'buffer', // Ensure `Buffer` is aliased correctly
    },
  },
});