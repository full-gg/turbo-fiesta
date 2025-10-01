import { HomeButton } from '../HomeButton.tsx';
import { MapButton } from '../MapButton.tsx';
import { useContext, useEffect, useMemo, useState } from 'react';
import { AppContext } from '../main.tsx';
import { fetchApi } from '../Back-end/Back-end.tsx';
import { Deposits } from '../lections/Deposits.tsx';
import { Deposits1 } from '../lections/Deposits1.tsx';
import { Credit } from '../lections/Credit.tsx';
import { Deposits2 } from '../lections/Deposits2.tsx';
import { Credit1 } from '../lections/Credit1.tsx';
import { Credit2 } from '../lections/Credit2.tsx';
import { Tests } from './Tests.tsx';

export type Lecture = {
	id: number;
	name: string;
	status: 'unavailable' | 'available' | 'passed';
};

export type Test = {
	question: string;
	answers: string[];
};

const guides = [Deposits, Deposits1, Deposits2, Credit, Credit1, Credit2];

const Institute = () => {
	const context = useContext(AppContext);
	const [lectures, setLectures] = useState<Lecture[]>([]);
	const [lecture, setLecture] = useState<Lecture | null>(null);
	const [tests, setTests] = useState<Test[] | null>(null);

	useEffect(() => {
		(async () => {
			const response = await fetchApi('lectures', { method: 'GET' }, `?user_id=${context.userName[0]}`);
			if (response) {
				setLectures(response);
			}
		})();
	}, []);

	const Guide = useMemo(() => (lecture ? guides[lecture.id] : () => <></>), [lecture]);

	if (tests && lecture) {
		return (
			<>
				<Tests
					tests={tests}
					lesson_id={lecture.id}
				/>
				<HomeButton />
				<MapButton />
			</>
		);
	}

	if (!lecture) {
		return (
			<div className='institute_main'>
				{lectures.map((lec) => (
					<button
						disabled={lec.status !== 'available'}
						className='pixelButton'
						onClick={() => {
							setLecture(lec);
						}}
					>
						{lec.name}
					</button>
				))}
				<HomeButton />
				<MapButton />
			</div>
		);
	}

	return (
		<div className='institute_main'>
			<Guide />
			<button
				className='pixelButton'
				style={{ marginLeft: '200px' }}
				onClick={async () => {
					const result = await fetchApi('test', { method: 'GET' }, `?user_id=${context.userName[0]}&test_id=${lecture.id}`);
					setTests(result);
				}}
			>
				Пройти тест
			</button>
			<HomeButton />
			<MapButton />
		</div>
	);
};

export default Institute;
