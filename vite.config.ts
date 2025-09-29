import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		outDir: path.resolve(__dirname, 'build'),
	},
	server: {
	    host: '0.0.0.0',
		port: 3000,
        strictPort: true,
		allowedHosts: true,
        cors: true,
	},
});
