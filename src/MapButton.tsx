import { Link } from 'react-router-dom';
import map_icon from './img/map_icon.png';

export const MapButton = () => (
	<Link to='/Map'>
		<img
			src={map_icon}
			alt=''
			style={{ position: 'absolute', left: '85px', top: 'calc(100vh - 70px)', width: '70px' }}
		/>
	</Link>
);
