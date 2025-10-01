const sendHp = async (userName: string) => {
	try {
		const response = await fetchApi(userName, `hp`, {
			method: 'GET',
		});

		console.log('Ответ от бэка:', response);
	} catch (err) {
		console.error('Ошибка при отправке hp:', err);
	}
};

export default sendHp;

export const fetchApi = async (userName: string, endPoint: string, options?: Parameters<typeof fetch>[1]) => {
	try {
		const response = await fetch(`https://${import.meta.env.VITE_BACKEND_URL || process.env.VITE_BACKEND_URL}:${import.meta.env.VITE_BACKEND_PORT || process.env.VITE_BACKEND_PORT}/api/${endPoint}?user_id=${userName}`, {
			method: 'POST',
			...options,
			headers: {
				'Content-Type': 'application/json;charset=UTF-8',
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
