//  Import Block Dependency component
import Inspector from "./inspector.js";

// import makeStyle compoent
import makeStyle from "./makeStyle.js";

// Internationalization
const { __ } = wp.i18n;

// Extend component
const { Component, Fragment } = wp.element;

// Register editor components
const {
	RichText,
	AlignmentToolbar,
	MediaUpload,
	BlockControls
	//BlockAlignmentToolbar,
} = wp.editor;

// Register components
const { Dashicon, IconButton, Button, Toolbar } = wp.components;

export default class NBTestimonialEdit extends Component {
	render() {
		const {
			attributes: {
				testimonialContent,
				testimonialName,
				testimonialTitle,
				testimonialAlt,
				testimonialImageUrl,
				testimonialImgId,
				testimonialAlignment,
				testimonialFontSize,
				testimonialBackgound,
				testimonialTextColor,
				testimonialImgRadius,
				lineHeight,
				paddingLeft,
				paddingRight,
				paddingTop,
				paddingBottom,
				marginLeft,
				marginRight,
				marginTop,
				marginBottom,
				//fontFamily,
				letterSpacing,
				autohorInfoLayout,
				testimonialImgDiplay
			},
			attributes,
			className,
			setAttributes
		} = this.props;

		return [
			<Inspector {...{ setAttributes, ...this.props }} />,
			<Fragment>
				<BlockControls>
					<AlignmentToolbar
						value={testimonialAlignment}
						onChange={value => setAttributes({ testimonialAlignment: value })}
					/>
					{testimonialImageUrl && (
						<Toolbar>
							<MediaUpload
								onSelect={media => {
									setAttributes({
										testimonialAlt: media.alt,
										testimonialImageUrl: media.url,
										testimonialImgId: media.id
									});
								}}
								type="image"
								value={testimonialImgId}
								render={({ open }) => (
									<IconButton
										className="components-toolbar__control"
										label={__("Edit image")}
										icon="edit"
										onClick={open}
									/>
								)}
							/>
							<IconButton
								className="components-toolbar__control"
								label={__("Remove image")}
								icon="trash"
								onClick={() =>
									setAttributes({
										testimonialImageUrl: "",
										testimonialImgId: ""
									})
								}
							/>
						</Toolbar>
					)}
				</BlockControls>
			</Fragment>,
			<div
				className="nb-testimonial"
				style={makeStyle({
					backgroundColor: testimonialBackgound,
					marginLeft: marginLeft != "" ? marginLeft + "px" : "",
					marginRight: marginRight != "" ? marginRight + "px" : "",
					marginTop: marginTop != "" ? marginTop + "px" : "",
					marginBottom: marginBottom != "" ? marginBottom + "px" : ""
				})}
			>
				<div className="testimonial-content">
					<RichText
						tagName="p"
						className="nbContent"
						value={testimonialContent}
						style={makeStyle({
							textAlign: testimonialAlignment,
							fontSize:
								testimonialFontSize != "" ? testimonialFontSize + "px" : "",
							color: testimonialTextColor,
							lineHeight: lineHeight,
							paddingLeft: paddingLeft != "" ? paddingLeft + "px" : "",
							paddingRight: paddingRight != "" ? paddingRight + "px" : "",
							paddingTop: paddingTop != "" ? paddingTop + "px" : "",
							paddingBottom: paddingBottom != "" ? paddingBottom + "px" : "",
							//fontFamily: fontFamily,
							letterSpacing: letterSpacing != "" ? letterSpacing + "px" : ""
						})}
						onChange={value =>
							setAttributes({
								testimonialContent: value
							})
						}
						placeholder={__("Enter Your Description")}
						keepPlaceholderOnFocus
					/>
				</div>

				<div
					className={
						autohorInfoLayout != "" ? autohorInfoLayout : "testimonial-info"
					}
				>
					<div
						className="image"
						style={makeStyle({
							borderRadius: testimonialImgRadius,
							display: testimonialImgDiplay ? "" : "none"
						})}
					>
						<MediaUpload
							onSelect={media => {
								setAttributes({
									testimonialAlt: media.alt,
									testimonialImageUrl: media.url,
									testimonialImgId: media.id
								});
							}}
							type="image"
							value={testimonialImgId}
							render={({ open }) => (
								<Button onClick={open}>
									{!testimonialImgId ? (
										<Dashicon icon="format-image" className="defaultImgIcon" />
									) : (
										<img
											src={testimonialImageUrl}
											alt={testimonialAlt}
											className="testimonialImg"
											style={makeStyle({
												borderRadius: testimonialImgRadius
											})}
										/>
									)}
								</Button>
							)}
						/>
					</div>

					<div className="testimonial-details">
						<RichText
							tagName="h4"
							className="nbName"
							value={testimonialName}
							style={makeStyle({
								color: testimonialTextColor
							})}
							onChange={value => setAttributes({ testimonialName: value })}
							placeholder={__("Add Name")}
							keepPlaceholderOnFocus
						/>
						<RichText
							tagName="p"
							className="nbTitle"
							value={testimonialTitle}
							style={makeStyle({
								color: testimonialTextColor
							})}
							onChange={value => setAttributes({ testimonialTitle: value })}
							keepPlaceholderOnFocus
							placeholder={__("Add Title")}
						/>
					</div>
				</div>
			</div>
		];
	}
}
