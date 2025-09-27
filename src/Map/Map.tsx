import { Link } from 'react-router-dom';
import map from '../img/map.png';
import bank from '../img/bank.png';
import barber from '../img/barber.png';
import institute from '../img/institute.png';
import home from '../img/home.png';

const Map = () => {
	return (
		<div>
			<img
				src={map}
				alt=''
			/>
			<Link to='/Bank'>
				<img
					src={bank}
					alt=''
					style={{ position: 'absolute', left: '16rem', top: '6.4rem', width: '7.8rem' }}
				/>
			</Link>
			<Link to='/Institute'>
				<img
					src={institute}
					alt=''
					style={{ position: 'absolute', left: '13.8rem', top: '27.3rem', width: '12.5rem' }}
				/>
			</Link>
			<Link to='/Barber'>
				<img
					src={barber}
					alt=''
					style={{ position: 'absolute', left: '4.5rem', top: '9.71rem', width: '9rem' }}
				/>
			</Link>
			<Link to='/'>
				<img
					src={home}
					alt=''
					style={{ position: 'absolute', left: '.5rem', top: '48rem', width: '5rem' }}
				/>
			</Link>
		</div>
	);
};

export default Map;
