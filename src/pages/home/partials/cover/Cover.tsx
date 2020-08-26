import React from "react";

import styles from "./Cover.scss";
import { Typography, FontWeight } from '@ui/Typography/Typography';
import { Button } from '@ui';

export interface CoverProps {

}

export class Cover extends React.Component<CoverProps> {
	
	public render(): JSX.Element {
		return (
			<div className={styles.Cover}>
				<div className={styles.Сover__container}>
					<Typography
						className={styles.Cover__title}
						tag='p'
						fontWeight={FontWeight.SemiBold}
					>
					Арина Главанарь
					</Typography>

					<Typography
						className={styles.Cover__subtitle}
						tag='p'
						fontWeight={FontWeight.Regular}
					>
					фотограф
					</Typography>
					<Button					
					>
					<Typography
						className={styles.Cover__btn}
						tag='p'
						fontWeight={FontWeight.Medium}
					>
					записаться
					</Typography>
					</Button>
				</div>
			</div>

		)
	}
}
