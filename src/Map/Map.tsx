import { Link } from 'react-router-dom';
import bank from '../img/bank.png';
import barber from '../img/barber.png';
import institute from '../img/institute.png';
import map from '../img/map.png';
import { HomeButton } from '../HomeButton';

const Map = () => {
	return (
		<div className='mapWrapper'>
			<img
				style={{ height: '100%', width: '100%' }}
				src={map}
				alt=''
			/>
			<Link to='/Bank'>
				<img
					src={bank}
					alt=''
					style={{ position: 'absolute', left: '50%', top: '17%', width: '30%', height: '25%' }}
				/>
			</Link>
			<Link to='/Institute'>
				<img
					src={institute}
					alt=''
					style={{ position: 'absolute', left: '50%', top: '50%', width: '35%', height: '25%' }}
				/>
			</Link>
			<Link to='/Barber'>
				<img
					src={barber}
					alt=''
					style={{ position: 'absolute', left: '15%', top: '10%', width: '30%', height: '25%' }}
				/>
			</Link>
			<HomeButton />
		</div>
	);
};

export default Map;
