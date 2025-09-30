import { type FC, useContext, useEffect } from 'react';
import './App.css';
import sendHp from '../Back-end/Back-end.tsx';
import heart from '../img/heart.png';
import { AppContext } from './App.tsx';

type HpProps = {
	count: number;
};

const Hp = ({ count }: HpProps) => {
	const context = useContext(AppContext);
	useEffect(() => {
		// отправляем hp на бэкенд при монтировании
		sendHp(context.userName[0] as string);
	}, [count]);
	return (
		<div>
			<span className='energy'>Энергия:</span>

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
	return (
		<>
			<span>Зарплата: </span>
			<div>{salary}</div>
		</>
	);
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

export { Welcome, Progress, SalaryMoney, KeyBid, Hp };
