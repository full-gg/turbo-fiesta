const sendHp = async (userName: string) => {
	try {
		const response = await fetchApi(
			`hp`,
			{
				method: 'GET',
			},
			`?user_id=${userName}`,
		);

		console.log('Ответ от бэка:', response);
	} catch (err) {
		console.error('Ошибка при отправке hp:', err);
	}
};

export default sendHp;

export const fetchApi = async (endPoint: string, options?: Parameters<typeof fetch>[1], params?: string) => {
	try {
		const response = await fetch(`https://${import.meta.env.VITE_BACKEND_URL || process.env.VITE_BACKEND_URL}:${import.meta.env.VITE_BACKEND_PORT || process.env.VITE_BACKEND_PORT}/api/${endPoint}${params ?? ''}`, {
			method: 'POST',
			...options,
			headers: {
				'Content-Type': 'application/json;charset=UTF-8',
				'ngrok-skip-browser-warning': 'true',
				...options?.headers,
			},
		});

		if (response.status.toString().startsWith('2') && endPoint === 'auth') {
			return true;
		}

		const data = await response.json();

		console.log('Ответ от бэка:', data);
		return data;
	} catch (err) {
		console.error('Ошибка:', err);
		return null;
	}
};
