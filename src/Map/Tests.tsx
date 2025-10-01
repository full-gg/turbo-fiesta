import { useContext, useState } from 'react';
import { Modal } from '../Modal';
import type { Test } from './Institute';
import { fetchApi } from '../Back-end/Back-end';
import { AppContext } from '../main';

export const Tests = ({ tests, lesson_id }: { tests: Test[]; lesson_id: number }) => {
	const context = useContext(AppContext);
	const [current, setCurrent] = useState<number>(0);
	const [answers, setAnswers] = useState<number[]>([]);
	const [result, setResult] = useState<{
		correct_answers: string;
		new_salary: number;
		salary_addition: number;
	} | null>(null);

	if (!tests.length) {
		return <>Теста не существует</>;
	}

	if (result) {
		return (
			<Modal>
				<table>
					<tr>
						<td>Результат</td>
						<td>{result.correct_answers}</td>
					</tr>
					<tr>
						<td>Прибавка к зарплате</td>
						<td>{result.salary_addition}</td>
					</tr>
					<tr>
						<td>Новая зарплата</td>
						<td>{result.new_salary}</td>
					</tr>
				</table>
			</Modal>
		);
	}

	if (tests.length < current + 1) {
		return (
			<Modal>
				<h3>Вы завершили тестирование!</h3>
				<button
					className='pixelButton'
					onClick={async () => {
						const response = await fetchApi('answer', {
							method: 'POST',
							body: JSON.stringify({
								answers,
								id: lesson_id,
								user_id: context.userName[0],
							}),
						});
						setResult(response);
					}}
				>
					Посмотреть результат
				</button>
			</Modal>
		);
	}

	return (
		<Modal>
			<h3>
				Вопрос {current + 1} из {tests.length}
			</h3>
			<h2>{tests[current].question}</h2>
			{tests[current].answers.map((answer, i) => (
				<button
					className='pixelButton'
					onClick={() => {
						setCurrent((prev) => prev + 1);
						setAnswers((prev) => [...prev, i]);
					}}
				>
					{answer}
				</button>
			))}
		</Modal>
	);
};
