const { __ } = wp.i18n;

import classnames from "classnames";
import Layout from "../containers/Layout";
import makeStyle from "../utils/makeStyles";

const { RichText } = wp.editor;

const NinjaSaveClass = props => {
	const {
		btnTxt,
		buttonUrl,
		buttonAlignment,
		buttonBackgroundColor,
		btnTextColor,
		buttonSize,
		btnShape,
		buttonTarget,
		ctaTitle,
		ctaText,
		ctaTitleFontSize,
		ctaTextFontSize,
		ctaWidth,
		ctaBackgroundColor,
		ctaTitleColor,
		ctaTextColor
	} = props.attributes;

	return (
		<Layout {...props}>
			<div class="ninja-cta-user">
				<div class="ninja-cta-content">
					{ctaText &&
						!!ctaText.length && (
							<RichText.Content
								tagName="p"
								className="ninja-cta-text"
								style={makeStyle({
									color: ctaTextColor,
									fontSize:
										ctaTextFontSize === "" || ctaTextFontSize === undefined
											? ""
											: ctaTextFontSize + "px"
								})}
								value={ctaText}
								keepPlaceholderOnFocus
							/>
						)}
				</div>

				{btnTxt &&
					!!btnTxt.length && (
						<div class="ninja-cta-button">
							<a
								href={buttonUrl}
								target={buttonTarget ? "_blank" : "_self"}
								style={makeStyle({
									color: btnTextColor
								})}
							>
								<button
									className={classnames(btnShape, buttonSize)}
									style={makeStyle({
										backgroundColor: buttonBackgroundColor
									})}
								>
									<RichText.Content value={btnTxt} />
								</button>
							</a>
						</div>
					)}
			</div>
		</Layout>
	);
};

export default NinjaSaveClass;
