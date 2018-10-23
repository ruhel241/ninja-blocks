// import makeStyle compoent
import makeStyle from "./makeStyle.js";

// Internationalization
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

// Register editor components
const { RichText } = wp.editor;

/**
 *  Save Component
 */
export default class NBTestimonialSave extends Component {
	render() {
		const {
			testimonialContent,
			testimonialName,
			testimonialTitle,
			testimonialAlt,
			testimonialImageUrl,
			testimonialAlignment,
			testimonialImgId,
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
		} = this.props.attributes;

		console.log(this.props.attributes);

		return (
			<div
				className="nb-testimonial"
				style={makeStyle({
					backgroundColor: testimonialBackgound,
					marginLeft:
						marginLeft === "" || marginLeft === undefined
							? ""
							: marginLeft + "px",
					marginRight:
						marginRight === "" || marginRight === undefined
							? ""
							: marginRight + "px",
					marginTop:
						marginTop === "" || marginTop === undefined ? "" : marginTop + "px",
					marginBottom:
						marginBottom === "" || marginBottom === undefined
							? ""
							: marginBottom + "px"
				})}
			>
				<div className="testimonial-content">
					<RichText.Content
						tagName="p"
						className="nbContent"
						value={testimonialContent}
						style={makeStyle({
							textAlign: testimonialAlignment,
							fontSize:
								testimonialFontSize === "" || testimonialFontSize === undefined
									? ""
									: testimonialFontSize + "px",
							color: testimonialTextColor,
							lineHeight: lineHeight,
							paddingLeft:
								paddingLeft === "" || paddingLeft === undefined
									? ""
									: paddingLeft + "px",
							paddingRight:
								paddingRight === "" || paddingRight === undefined
									? ""
									: paddingRight + "px",
							paddingTop:
								paddingTop === "" || paddingTop === undefined
									? ""
									: paddingTop + "px",
							paddingBottom:
								paddingBottom === "" || paddingBottom === undefined
									? ""
									: paddingBottom + "px",
							//fontFamily: fontFamily,
							letterSpacing:
								letterSpacing === "" || letterSpacing === undefined
									? ""
									: letterSpacing + "px"
						})}
					/>
				</div>
				<div
					className={
						autohorInfoLayout != "" ? autohorInfoLayout : "testimonial-info"
					}
				>
					{testimonialImageUrl &&
						!!testimonialImageUrl.length && (
							<div
								className="image"
								style={makeStyle({
									display: testimonialImgDiplay ? "" : "none"
								})}
							>
								<img
									className="testimonial_image"
									src={testimonialImageUrl}
									alt={testimonialAlt}
									style={makeStyle({
										borderRadius: testimonialImgRadius
									})}
								/>
							</div>
						)}

					<div className="testimonial-details">
						<RichText.Content
							tagName="h4"
							className="nbName"
							value={testimonialName}
							style={makeStyle({
								color: testimonialTextColor
							})}
						/>
						<RichText.Content
							tagName="p"
							className="nbTitle"
							value={testimonialTitle}
							style={makeStyle({
								color: testimonialTextColor
							})}
						/>
					</div>
				</div>
			</div>
		);
	}
}
