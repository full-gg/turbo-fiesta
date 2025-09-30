import { Link } from 'react-router-dom';
import { createContext, useEffect, useMemo, useState, type FC } from 'react';
import './App.css';
import menu_map from '../img/menu_map.png';
import main_profile from '../img/profile_img/main_profile.png';
import { Welcome, Progress, SalaryMoney, Hp } from './Tools.tsx';
import { USER_NAME_KEY } from '../constants.ts';
import { fetchApi } from '../Back-end/Back-end.tsx';

const getUserNameFromLocal = () => localStorage.getItem(USER_NAME_KEY);

const AppContext = createContext<Record<string, [unknown, React.Dispatch<React.SetStateAction<unknown>>]>>({});

const App: FC = () => {
	const [isAuth, setIsAuth] = useState(Boolean(getUserNameFromLocal()?.length));
	const [userName, setUserName] = useState(getUserNameFromLocal() ?? '');
	const [salary, setSalary] = useState<number>(0);
	const [mortgageRate, setMortgageRate] = useState<number>(0);
	const [hp, setHp] = useState<number>(0);

	const checkUserName = async () => {
		const response = await fetchApi(userName, 'auth', { method: 'POST', body: JSON.stringify({ user_id: userName }) });
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
		}),
		[userName, setUserName, salary, setSalary, mortgageRate, setMortgageRate, hp, setHp],
	);

	useEffect(() => {
		(async () => {
			const response = await fetchApi(userName, 'salary', { method: 'GET' });
			if (response) {
				setSalary(response);
			}
		})();
		(async () => {
			const response = await fetchApi(userName, 'hp', { method: 'GET' });
			if (response) {
				setHp(response);
			}
		})();
		(async () => {
			const response = await fetchApi(userName, 'mortgage_rate', { method: 'GET' });
			if (response) {
				setMortgageRate(response);
			}
		})();
	}, []);

	if (!isAuth) {
		return (
			<AppContext value={context}>
				<div className='content'>
					<div className='authWrapper'>
						<div className='authModal'>
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
						</div>
					</div>
				</div>
			</AppContext>
		);
	}

	return (
		<AppContext value={context}>
			<div className='content'>
				<div className='mainMenu'>
					<main>
						<div className='title'>CAPITAL QUEST</div>
					</main>
					<section className='menu_grid'>
						<div className='hp'>
							<Hp count={hp} />{' '}
						</div>
						<div className='profile'>
							<img
								src={main_profile}
								alt='Main Profile'
								style={{ width: '11rem' }}
							/>
							<Welcome name={userName} />
						</div>
						<div className='salary'>
							<SalaryMoney salary={salary} />
						</div>
						<div className='keybid'>
							<span className='keybid_title'>Ключевая ставка: </span>
							<div>{mortgageRate}</div>
						</div>
					</section>
					<section>{Progress({ progress: 100 }, { salary: 100000 })}</section>
					<section>
						<Link to='/Map'>
							<div className='map'>
								<span className='map_title'>Карта</span>
								<img
									src={menu_map}
									alt=''
									style={{ width: '26rem', height: '11rem' }}
								/>
							</div>
						</Link>
					</section>
				</div>
			</div>
		</AppContext>
	);
};

export default App;
