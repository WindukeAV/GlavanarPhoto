import * as React from "react";
import { buildClass } from "../../utils/buildClass";

import "./Typography.scss"

interface TypographyProps {
	className?: string;
	tag: string;
	fontWeight: FontWeights;
	children: React.ReactNode;
}

const prefix = "t";

export enum FontWeights {
	Regular = "regular",
	Medium = "medium",
	SemiBold = "semibold",
	Bold = "bold",
}



export const Typography: React.FC<TypographyProps> = (props) => {
	const {
		className: classNameFromProps,
		tag,
		fontWeight,
		children,
		...rest
	} = props;

	const className = buildClass(
		`${prefix}-locale-ru`,
		`${prefix}-weight-${fontWeight}`,
		classNameFromProps
	);


	return React.createElement(
		tag,
		{ className, ...rest },
		<span>
			{children}
		</span>
	);
}

