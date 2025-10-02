import { type FC } from 'react';
import './App.css';
import heart from '../img/heart.png';

type HpProps = {
	count: number;
};

const Hp = ({ count }: HpProps) => {
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

const Progress = ({ progress }: ProgressBar) => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<h4>Цель 10_000_000</h4>
			<div
				className='progress_bar'
				style={{ color: 'red', width: '100%', backgroundImage: `linear-gradient(to right, #3CFFB9 0%, #3CFFB9 ${progress}%, white ${progress}%, white 100%` }}
			></div>
		</div>
	);
};

export { Welcome, Progress, SalaryMoney, KeyBid, Hp };