import ChangePhoto from './BarberApp.tsx';
import { HomeButton } from '../HomeButton.tsx';
import { MapButton } from '../MapButton.tsx';

const Barber = () => {
	return (
		<main className='barber'>
			<ChangePhoto />
			<HomeButton />
			<MapButton />
		</main>
	);
};

export default Barber;
