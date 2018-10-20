const { __ } = wp.i18n;

import classnames from "classnames";
import Inspector from "./Inspector";
import Layout from "../containers/Layout";

const {
	AlignmentToolbar,
	URLInput,
	BlockControls,
	BlockAlignmentToolbar,
	MediaUpload,
	RichText
} = wp.editor;

const { IconButton, Dashicon } = wp.components;

const { Fragment } = wp.element;

const NinjaEditClass = props => {
	const {
		attributes: {
			btnTxt,
			buttonUrl,
			buttonAlignment,
			buttonBackgroundColor,
			btnTextColor,
			buttonSize,
			btnShape,
			buttonTarget,
			ctaText,
			ctaTitleFontSize,
			ctaTextFontSize,
			ctaWidth,
			ctaBackgroundColor,
			ctaTitleColor,
			ctaTextColor
		},
		attributes,
		isSelected,
		editable,
		className,
		setAttributes
	} = props;

	return (
		<Fragment>
			<BlockControls>
				<AlignmentToolbar
					value={buttonAlignment}
					onChange={value => {
						setAttributes({ buttonAlignment: value });
					}}
				/>
			</BlockControls>

			<Inspector props={props} />

			<Layout {...props}>
				<div class="ninja-cta">
					<div class="ninja-cta-content">
						<RichText
							tagName="p"
							placeholder={__("Call To Action Text")}
							keepPlaceholderOnFocus
							formattingControls={["bold", "italic", "strikethrough", "link"]}
							value={ctaText}
							className="ninja-cta-text"
							style={{ color: ctaTextColor, fontSize: ctaTextFontSize + "px" }}
							onChange={ctaText => setAttributes({ ctaText })}
						/>
					</div>
					<div class="ninja-cta-button">
						<RichText
							tagName="p"
							placeholder={__("Button text...")}
							keepPlaceholderOnFocus
							value={btnTxt}
							className={classnames("ninja-button", btnShape, buttonSize)}
							style={{
								color: btnTextColor,
								backgroundColor: buttonBackgroundColor
							}}
							onChange={btnTxt => setAttributes({ btnTxt })}
							formattingControls={[]}
						/>
						{isSelected && (
							<form
								key="form-link"
								className={`blocks-button__inline-link ninja-button-${buttonAlignment}`}
								onSubmit={event => event.preventDefault()}
								style={{ textAlign: buttonAlignment }}
							>
								<Dashicon icon={"admin-links"} />
								<URLInput
									className="button-url"
									value={buttonUrl}
									onChange={buttonUrl => setAttributes({ buttonUrl })}
								/>
								<IconButton
									icon="editor-break"
									label={__("Apply")}
									type="submit"
								/>
							</form>
						)}
					</div>
				</div>
			</Layout>
		</Fragment>
	);
};

export default NinjaEditClass;
