import ChangePhoto from './BarberApp.tsx';
import { HomeButton } from '../HomeButton.tsx';
import { MapButton } from '../MapButton.tsx';

const Barber = () => {
	return (
		<main className='barber'>
			<div>
				<ChangePhoto />
			</div>
			<HomeButton />
			<MapButton />
		</main>
	);
};

export default Barber;
