import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // 👈 Это позволяет принимать подключения извне
    port: 5173,
  },
  plugins: [react()],
});
