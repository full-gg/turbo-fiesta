import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		proxy: {
			'*': {
				// Маршрут для вашего эндпоинта
				target: `http://${process.env.VITE_BACKEND_URL}:${process.env.VITE_BACKEND_PORT}`, // Целевой сервер
				changeOrigin: true, // Меняем origin на target (обязательно для CORS)
				secure: false, // Если сервер без HTTPS (по умолчанию true)
				rewrite: (path) => path, // Не переписываем путь (или настройте, если нужно)
			},
		},
	},
});
