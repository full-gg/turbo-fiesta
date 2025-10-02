import { Link } from 'react-router-dom';
import { useContext, type FC } from 'react';
import './App.css';
import menu_map from '../img/menu_map.png';
import main_profile from '../img/profile_img/main_profile.png';
import { Welcome, Progress, SalaryMoney, Hp } from './Tools.tsx';
import { AppContext } from '../main.tsx';

const App: FC = () => {
	const context = useContext(AppContext);
	return (
		<>
			<div className='mainMenu'>
				<main>
					<div className='title'>CAPITAL QUEST</div>
				</main>
				<section className='menu_grid'>
					<div className='hp'>
						<Hp count={context.hp[0] as number} />{' '}
					</div>
					<div className='profile'>
						<img
							src={main_profile}
							alt='Main Profile'
							style={{ width: '11rem' }}
						/>
						<Welcome name={context.userName[0] as string} />
					</div>
					<div className='salary'>
						<SalaryMoney salary={context.salary[0] as number} />
					</div>
					<div className='keybid'>
						<span className='keybid_title'>Ключевая ставка: </span>
						<div>{context.mortgageRate[0] as number}</div>
					</div>
				</section>
				<section>
					{Progress({ progress: 100 }, { salary: 100000 })}</section>
				<section>
					<Link to='/Map'>
						<div className='map'>
							<span className='map_title'>Карта</span>
							<img
								src={menu_map}
								alt=''
								style={{ width: '26rem', height: '11rem' }}
							/>
						</div>
					</Link>
				</section>
			</div>
		</>
	);
};

export default App;
