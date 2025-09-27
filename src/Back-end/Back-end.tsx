const sendHp = async (count: number) => {
	try {
		const response = await fetchApi('/hp_update', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ count }),
		});

		console.log('Ответ от бэка:', response);
	} catch (err) {
		console.error('Ошибка при отправке hp:', err);
	}
};

export default sendHp;

export const fetchApi = async (endPoint: Parameters<typeof fetch>[0], options?: Parameters<typeof fetch>[1]) => {
	try {
		const response = await fetch(endPoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			...options,
		});

		const data = await response.json();
		console.log(import.meta.env.VITE_BACKEND_URL, import.meta.env.VITE_BACKEND_PORT);
		console.log('Ответ от бэка:', data);
		return data;
	} catch (err) {
		console.error('Ошибка при отправке hp:', err);
		return null;
	}
};
