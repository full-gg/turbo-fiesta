import { type FC, useEffect, useState } from 'react';
import './App.css';
import sendHp, { fetchApi } from '../Back-end/Back-end.tsx';
import heart from '../img/heart.png';

type HpProps = {
	count: number;
};

const ShowCount = () => {
	const [serverCount, setServerCount] = useState<number | null>(null);

	useEffect(() => {
		fetchApi('/hp_update')
			.then((data) => setServerCount(data.count))
			.catch((err) => console.error('Ошибка при получении count:', err));
	}, []);

	return <div>Значение count на бэке: {serverCount}</div>;
};

const Hp = ({ count }: HpProps) => {
	useEffect(() => {
		// отправляем hp на бэкенд при монтировании
		sendHp(count);
	}, [count]);
	return (
		<div>
			<span className='energy'>Энергия: {count}</span>

			<div style={{ display: 'flex', gap: '0.1rem' }}>
				{Array.from({ length: count }).map((_, index) => (
					<img
						key={index}
						src={heart}
						alt='heart'
						width={35}
						height={35}
					/>
				))}
			</div>
		</div>
	);
};

type Salary = {
	salary: number;
};

const SalaryMoney: FC<Salary> = ({ salary }) => {
	return <span>your salary is {salary}</span>;
};

type KeyRandom = {
	min: number;
	max: number;
};

const KeyBid = ({ min, max }: KeyRandom) => {
	const c = Math.floor(Math.random() * (max - min) + min);
	return c;
	// Отдать Дане на проработку
};

type WelcomeProps = {
	name: string;
};

const Welcome: FC<WelcomeProps> = ({ name }) => {
	return <span className='profile_title'>{name}</span>;
};

type ProgressBar = {
	progress: number;
};

const Progress = ({ progress }: ProgressBar, { salary }: Salary) => {
	const purpose = 2000000;
	const purpose_percent = (salary / purpose) * 100;
	return (
		<div
			className='progress_bar'
			style={{ color: 'red', width: `${progress}%`, backgroundImage: `linear-gradient(90deg, #3CFFB9 ${purpose_percent}%, white ${100 - purpose}%` }}
		></div>
	);
};

export { Welcome, Progress, SalaryMoney, KeyBid, Hp, ShowCount };
