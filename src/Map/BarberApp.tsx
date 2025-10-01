import { type FC, useState } from 'react';
import main_profile from '../img/profile_img/main_profile.png';
import womain_profile from '../img/profile_img/womain_profile.png';
import main_hawaian from '../img/profile_img/main_hawaian.png';
import womain_hawaian from '../img/profile_img/womain_hawaian.png';
import main_knight from '../img/profile_img/main_knight.png';
import womain_queen from '../img/profile_img/womain_queen.png';
import main_alien from '../img/profile_img/main_alien.png';
import womain_goth from '../img/profile_img/womain_goth.png';

const ProfileImage = [
	{
		title: 'Main_profile',
		id: 1,
		ImageUrl: main_profile,
	},
	{
		title: 'Main_profile',
		id: 2,
		ImageUrl: womain_profile,
	},
	{
		title: 'Main_profile',
		id: 3,
		ImageUrl: main_hawaian,
	},
	{
		title: 'Main_profile',
		id: 4,
		ImageUrl: womain_hawaian,
	},
	{
		title: 'Main_profile',
		id: 5,
		ImageUrl: main_knight,
	},
	{
		title: 'Main_profile',
		id: 6,
		ImageUrl: womain_queen,
	},
	{
		title: 'Main_profile',
		id: 7,
		ImageUrl: main_alien,
	},
	{
		title: 'Main_profile',
		id: 8,
		ImageUrl: womain_goth,
	},
];

const ChangePhoto: FC = () => {
	const [index, setIndex] = useState(0);

	return (
		<>
			<img
				src={ProfileImage[index].ImageUrl}
				alt=''
			/>
			<div
				className='Barber_grid'
				style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}
			>
				{ProfileImage.map((item, i) => (
					<div key={item.id}>
						<img
							src={item.ImageUrl}
							onClick={() => setIndex(i)}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default ChangePhoto;
