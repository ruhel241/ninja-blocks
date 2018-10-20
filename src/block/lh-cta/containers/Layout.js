import classnames from "classnames";
import makeStyle from "../utils/makeStyles";

const CallToAction = props => {
	const {
		attributes: {
			buttonText,
			buttonUrl,
			buttonAlignment,
			buttonBackgroundColor,
			buttonTextColor,
			buttonSize,
			buttonShape,
			buttonTarget,
			ctaTitle,
			ctaText,
			ctaTitleFontSize,
			ctaTextFontSize,
			ctaWidth,
			ctaBackgroundColor,
			ctaTextColor
		},
		className,
		children
	} = props;

	return (
		<div
			style={makeStyle({
				backgroundColor: ctaBackgroundColor,
				textAlign: buttonAlignment
			})}
			className={classnames(className, `align${ctaWidth}`, "ninja-block-cta")}
		>
			{children}
		</div>
	);
};

export default CallToAction;
