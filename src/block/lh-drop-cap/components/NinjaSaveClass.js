import Layout from "../containers/Layout";
import classnames from "classnames";

const { RichText } = wp.editor;

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

const NinjaSaveClass = props => {
	const {
		attributes: { text, bgColor, dcTextColor, dcFontSize },
		setAttributes
	} = props;

	return (
		<Layout {...props}>
			<div
				classnames="ninja-dc-content"
				style={makeStyle({
					backgroundColor: bgColor !== "" ? bgColor : ""
				})}
			>
				<RichText.Content
					tagName="p"
					className={classnames(
						"ninja-drop-cap-text",
						dcFontSize !== undefined || dcFontSize !== ""
							? "ninja-dc-font-size-" + dcFontSize
							: ""
					)}
					value={text}
					formattingControls={["bold", "italic", "strikethrough", "link"]}
					style={makeStyle({
						color: dcTextColor !== "" ? dcTextColor : "",
						lineHeight: "25px"
					})}
				/>
			</div>
		</Layout>
	);
};

export default NinjaSaveClass;
