import { Link } from 'react-router-dom';
import bank_office from '../img/bank_office.png';
import home from '../img/home.png';
import map_icon from '../img/map_icon.png';

const Institute = () => {
	return (
		<div>
			<img
				src={bank_office}
				alt=''
			/>
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
		</div>
	);
};

export default Institute;
