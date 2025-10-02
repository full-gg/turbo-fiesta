import { Link } from 'react-router-dom';
import barber_office from '../img/barber_office.png';
import home from '../img/home.png';
import map_icon from '../img/map_icon.png';
import ChangePhoto from './BarberApp.tsx';

const Barber = () => {
	
	return (
		<main
			className='barber'
			style={{
				backgroundImage: `url(${barber_office})`,
				backgroundSize: 'cover',
				width: '100%',
				height: '100vh',
			}}
		>
			<div>
				<ChangePhoto />
			</div>
			<Link to='/'>
				<img
					src={home}
					alt=''
					style={{ position: 'absolute', left: '.5rem', top: '48rem', width: '5rem' }}
				/>
			</Link>
			<Link to='/Map'>
				<img
					src={map_icon}
					alt=''
					style={{ position: 'absolute', left: '5.3rem', top: '48rem', width: '5rem' }}
				/>
			</Link>
		</main>
	);
};

export default Barber;
