import * as React from "react";
import { buildClass } from "../../utils/buildClass";

interface TypographyProps {
	fontWeight: FontWeights;
	className?: string;
	tag: string;
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
		fontWeight,
		className: classNameFromProps,
		tag,
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

