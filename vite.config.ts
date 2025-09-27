import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { FULL_BACKEND_URL } from './constants';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		proxy: {
			'*': {
				// Маршрут для вашего эндпоинта
				target: `http://${FULL_BACKEND_URL}`, // Целевой сервер
				changeOrigin: true, // Меняем origin на target (обязательно для CORS)
				secure: false, // Если сервер без HTTPS (по умолчанию true)
				rewrite: (path) => path, // Не переписываем путь (или настройте, если нужно)
			},
		},
	},
});
