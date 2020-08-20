import * as React from "react";

import styles from "./Cover.scss";
import { Typography, FontWeights } from '@ui/Typography/Typography';

export interface CoverProps {

}

export class Cover extends React.Component<CoverProps> {
	
	public render(): JSX.Element {
		return (
			<>
				<Typography
					className={styles.cover__title}
					tag="span"
					fontWeight={FontWeights.Bold}
				>
					text
				</Typography>
			</>
		)
	}
}
