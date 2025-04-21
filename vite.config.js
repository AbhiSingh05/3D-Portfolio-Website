// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/3D-Portfolio-Website/', // 👈 this is the fix
  plugins: [react()],
});
