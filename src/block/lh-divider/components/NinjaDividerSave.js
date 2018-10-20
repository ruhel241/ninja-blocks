function makeStyle(prop = {}) {
	var style = {};

	for (let key in prop) {
		if (prop.hasOwnProperty(key)) {
			if (prop[key] !== "") {
				style[key] = prop[key];
			}
		}
	}
	return style;
}

const NinjaDividerSave = props => {
	const {
		attributes: {
			DividerHeight,
			DividerWidth,
			DividerColor,
			DividerAlignment,
			DividerMarginTop,
			DividerMarginBottom
		}
	} = props;

	return (
		<div
			align={DividerAlignment}
			className="ninjaDividerUserView"
			style={{ marginTop: DividerMarginTop, marginBottom: DividerMarginBottom }}
		>
			<div
				style={makeStyle({
					border:
						DividerColor === undefined || DividerColor === ""
							? "1px solid"
							: "1px solid " + DividerColor,
					height: DividerHeight,
					width: DividerWidth + "%",
					backgroundColor: DividerColor
				})}
			/>
		</div>
	);
};

export default NinjaDividerSave;
