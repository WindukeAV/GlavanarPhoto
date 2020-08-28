import React from 'react';

import styles from "./MobileNavbar.scss"
import { Burger } from './partials/Burger';


export interface MobileNavbarProps {

}

export const MobileNavbar: React.FC<MobileNavbarProps> = ({ }) => {
	const [isPushed, setIsPushed] = React.useState('0');
  
	const CurrentState = isPushed ? console.log('1') : console.log('2');

	const handleButtonClick = () => {
		setIsPushed(!isPushed);
		console.log('work')
	};

	return (
		<div className={CurrentState}>
			<div className={styles.MobileNavbar}>
			<Burger
				onClick={handleButtonClick}
			/>			
			</div>
		</div>

	)
}