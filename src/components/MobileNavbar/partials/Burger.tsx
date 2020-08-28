import React from "react";
import styles from "./Burger.scss";

export interface BurgerProps {
	className?: string;
	onClick?: (event: React.MouseEvent) => void;
 }

export const Burger: React.FC<BurgerProps> = ({	
	onClick
 }) => {
	return(
		<div 
			className={styles.Burger}
			onClick={onClick}
		>
			<span className={styles.Burger__body}></span>
		</div>
	)
}




