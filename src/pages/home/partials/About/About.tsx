import React from 'react';

import styles from './About.scss';
import { Typography, FontWeight } from '@ui/Typography/Typography';

// import Avatar from '~@assets/images/avatar.png'

export interface AboutProps {

}

export const About: React.FC<AboutProps> = ({}) => {
	return (
		<div className={styles.About__container}>
			<Typography
				className={styles.About__title}
				tag='p'
				fontWeight={FontWeight.Regular}
			>
			кто я?
			</Typography>
			<div className={styles.About__content}>
				{/* <img src={Avatar} alt="Avatar"/> */}
			</div>
		</div>
	); 
};

