import * as React from "react";
import { buildClass } from "../../utils/buildClass";

import "./Typography.scss"

interface TypographyProps {
	tag: string;
	fontWeight: FontWeight;
	children: React.ReactNode;
	className?: string;
}

const prefix = "t";

export enum FontWeight {
	Regular = "regular",
	Medium = "medium",
	SemiBold = "semibold",
	Bold = "bold",
}

export const Typography: React.FC<TypographyProps> = (props) => {
	const {
		tag,
		fontWeight,
		children,
		className: classNameFromProps,
		...rest
	} = props;

	const className = buildClass(
		`${prefix}-${fontWeight}`,
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

