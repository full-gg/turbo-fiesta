import type { ReactNode } from 'react';

export const Modal = ({ children }: { children: ReactNode }) => (
	<div className='wrapper'>
		<div className='modal'>{children}</div>
	</div>
);
