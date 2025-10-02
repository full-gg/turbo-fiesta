import React, { createContext, useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Map from './Map/Map.tsx';
import Bank from './Map/Bank.tsx';
import Institute from './Map/Institute.tsx';
import Barber from './Map/Barber.tsx';
import App from './Main/App.tsx';
import { USER_NAME_KEY } from './constants.ts';
import { fetchApi } from './Back-end/Back-end.tsx';
import { Modal } from './Modal.tsx';

export const AppContext = createContext<Record<string, [unknown, React.Dispatch<React.SetStateAction<unknown>>]>>({});

const getUserNameFromLocal = () => localStorage.getItem(USER_NAME_KEY);

const MainNavigation = () => {
	const [isAuth, setIsAuth] = useState(Boolean(getUserNameFromLocal()?.length));
	const [userName, setUserName] = useState(getUserNameFromLocal() ?? '');
	const [salary, setSalary] = useState<number>(0);
	const [mortgageRate, setMortgageRate] = useState<number>(0);
	const [hp, setHp] = useState<number>(0);
	const location = useLocation();
	const navigate = useNavigate();
	const [progress, setProgress] = useState<number>(0);
	const [avatar, setAvatar] = useState<number>(0);

	const checkUserName = async () => {
		const response = await fetchApi('auth', { method: 'POST', body: JSON.stringify({ user_id: userName }) }, `?user_id=${userName}`);
		if (response) {
			setIsAuth(true);
		}
	};

	const context = useMemo(
		() => ({
			userName: [userName, setUserName] as [unknown, React.Dispatch<React.SetStateAction<unknown>>],
			salary: [salary, setSalary] as [unknown, React.Dispatch<React.SetStateAction<unknown>>],
			mortgageRate: [mortgageRate, setMortgageRate] as [unknown, React.Dispatch<React.SetStateAction<unknown>>],
			hp: [hp, setHp] as [unknown, React.Dispatch<React.SetStateAction<unknown>>],
			isAuth: [isAuth, setIsAuth] as [unknown, React.Dispatch<React.SetStateAction<unknown>>],
			progress: [progress, setProgress] as [unknown, React.Dispatch<React.SetStateAction<unknown>>],
			avatar: [avatar, setAvatar] as [unknown, React.Dispatch<React.SetStateAction<unknown>>],
		}),
		[userName, salary, mortgageRate, hp, isAuth, progress, avatar],
	);

	useEffect(() => {
		if (isAuth) {
			(async () => {
				const response = await fetchApi('salary', { method: 'GET' }, `?user_id=${userName}`);
				if (response) {
					setSalary(response);
				}
			})();
			(async () => {
				const response = await fetchApi('hp', { method: 'GET' }, `?user_id=${userName}`);
				if (response) {
					setHp(response);
				}
			})();
			(async () => {
				const response = await fetchApi('mortgage_rate', { method: 'GET' }, `?user_id=${userName}`);
				if (response) {
					setMortgageRate(response);
				}
			})();
			(async () => {
				const response = await fetchApi('progress', { method: 'GET' }, `?user_id=${userName}`);
				if (response) {
					setProgress(response);
				}
			})();
			(async () => {
				const response = await fetchApi('avatar', { method: 'GET' }, `?user_id=${userName}`);
				if (response) {
					setAvatar(response);
				}
			})();
		} else {
			navigate('/', { replace: true });
		}
	}, [isAuth, location.pathname]);

	if (!isAuth) {
		return (
			<AppContext value={context}>
				<div className='content'>
					<Modal>
						<h3 className='authHeader'>Введите имя пользователя</h3>
						<input
							className='authInput'
							value={userName}
							onChange={(event) => setUserName(event.target.value)}
						/>
						<button
							className='pixelButton'
							onClick={checkUserName}
						>
							ВОЙТИ
						</button>
					</Modal>
				</div>
			</AppContext>
		);
	}

	return (
		<AppContext value={context}>
			<div className='content'>
				<Routes>
					<Route
						path='/'
						element={<App />}
					/>
					<Route
						path='/Map'
						element={<Map />}
					/>
					<Route
						path='/Bank'
						element={<Bank />}
					/>
					<Route
						path='/Barber'
						element={<Barber />}
					/>
					<Route
						path='/Institute'
						element={<Institute />}
					/>
				</Routes>
			</div>
		</AppContext>
	);
};
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<Router>
			<MainNavigation />
		</Router>
	</React.StrictMode>,
);
