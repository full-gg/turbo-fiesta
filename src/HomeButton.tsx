import { Link } from 'react-router-dom';
import home from './img/home.png';

export const HomeButton = () => (
	<Link to='/'>
		<img
			src={home}
			alt=''
			style={{ position: 'absolute', left: '10px', top: 'calc(100vh - 70px)', width: '70px' }}
		/>
	</Link>
);
