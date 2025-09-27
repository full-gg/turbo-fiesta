import { useState } from 'react';

const firstQuestions = [
	{
		topic: 'finance',
		question: 'Что такое банковский вклад?',
		possibleAnswers: ['A) Деньги, которые банк дает вам в долг', 'B) Деньги, которые вы храните в банке под проценты', 'C) Деньги, которые вы инвестируете в акции', 'D) Деньги, которые вы тратите на покупки'],
		correctAnswer: 'B) Деньги, которые вы храните в банке под проценты',
	},
	{
		topic: 'finance',
		question: 'Что такое процентная ставка по вкладу?',
		possibleAnswers: ['A) Комиссия за открытие вклада', 'B) Процент, который вы платите банку за хранение денег', 'C) Доход, который банк выплачивает вам за хранение денег', 'D) Налог на доход от вклада'],
		correctAnswer: 'C) Доход, который банк выплачивает вам за хранение денег ',
	},
	{
		topic: 'finance',
		question: 'Что такое пополняемый вклад?',
		possibleAnswers: ['A) Вклад, который можно увеличивать в течение срока ', 'B) Вклад с автоматическим продлением', 'C) Вклад с возможностью частичного снятия', 'D) Вклад с плавающей процентной ставкой'],
		correctAnswer: 'A) Вклад, который можно увеличивать в течение срока',
	},
	{
		topic: 'finance',
		question: 'Какая сумма вкладов застрахована в РФ?',
		possibleAnswers: ['A) До 100 000 рублей', 'B) До 500 000 рублей', 'C) До 1 400 000 рублей', 'D) До 5 000 000 рублей'],
		correctAnswer: 'C) До 1 400 000 рублей',
	},
	{
		topic: 'finance',
		question: 'Что покрывает система страхования вкладов?',
		possibleAnswers: ['A) Потерю денег из-за мошенничества', 'B) Отзыв лицензии у банка', 'C) Падение процентных ставок', 'D) Инфляцию'],
		correctAnswer: 'B) Отзыв лицензии у банка',
	},
	{
		topic: 'finance',
		question: 'Чем вклад отличается от накопительного счета?',
		possibleAnswers: ['A) Вклад всегда имеет фиксированную ставку и срок', 'B) Накопительный счет нельзя пополнять', 'C) Вклад можно открыть только в банке', 'D) Это одно и то же'],
		correctAnswer: 'A) Вклад всегда имеет фиксированную ставку и срок',
	},
];

const NumberOfQuestions1 = () => {
	const [index, setIndex] = useState(0);
	const [score, setScore] = useState(0);
	const total = firstQuestions.length;

	const handleAnswer = (answer: string) => {
		if (answer === firstQuestions[index].correctAnswer) {
			setScore((prev) => prev + 1);
		}
	};

	const nextQuestion = () => {
		if (index < total - 1) {
			setIndex(index + 1);
		}
	};

	const prevQuestion = () => {
		if (index > total - total) {
			setIndex(index - 1);
		}
	};

	return (
		<div>
			<h2>
				Вопрос {index + 1} из {total}
			</h2>
			<p>{firstQuestions[index].question}</p>

			<p>
				{firstQuestions[index].possibleAnswers.map((answer, i) => (
					<button
						key={i}
						onClick={() => handleAnswer(answer)}
					>
						{answer}
					</button>
				))}
			</p>

			<p>Ваш счёт: {score}</p>

			<button onClick={prevQuestion}>Предыдущий</button>
			<button onClick={nextQuestion}>Следующий</button>
		</div>
	);
};

export default NumberOfQuestions1;
