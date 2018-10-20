const { __ } = wp.i18n;

import Layout from "../containers/Layout";
import Inspector from "./Inspector";
import classnames from "classnames";

const { Fragment } = wp.element;

const {
	AlignmentToolbar,
	URLInput,
	BlockControls,
	BlockAlignmentToolbar,
	MediaUpload,
	RichText
} = wp.editor;

const NinjaEditClass = props => {
	const {
		attributes: {
			text,
			bgColor,
			dcWidth,
			paddingTop,
			fontFamily,
			dcTextColor,
			paddingLeft,
			paddingRight,
			dcLineHeight,
			paddingBottom,
			dcTextFontSize,
			buttonAlignment,
			dcLetterSpacing,
			dcFontSize
		},
		setAttributes
	} = props;

	return (
		<Fragment>
			<BlockControls>
				<AlignmentToolbar
					value={buttonAlignment}
					onChange={buttonAlignment => setAttributes({ buttonAlignment })}
				/>
			</BlockControls>
			<Inspector {...props} />
			<Layout {...props}>
				<div
					class="ninja-dc-content"
					style={{
						backgroundColor: bgColor,
						paddingBottom: "33px"
					}}
				>
					<RichText
						tagName="p"
						placeholder={__("Drop Cap Text")}
						formattingControls={["bold", "italic", "strikethrough", "link"]}
						className={classnames(
							"ninja-drop-cap-text",
							"ninja-dc-font-size-" + dcFontSize
						)}
						keepPlaceholderOnFocus
						value={text}
						onChange={text => setAttributes({ text })}
					/>
				</div>
			</Layout>
		</Fragment>
	);
};

export default NinjaEditClass;
