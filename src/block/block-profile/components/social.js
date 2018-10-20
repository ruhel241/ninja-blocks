// Internationalization
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

export default class SocialIcons extends Component {
	render() {
		const {
			attributes: {
				facebook,
				facebookColor,
				twitter,
				twitterColor,
				googlePlus,
				googlePlusColor,
				linkedin,
				linkedinColor,
				email,
				emailColor
			}
		} = this.props;

		return (
			<div className="social-icon">
				{facebook &&
					!!facebook.length && (
						<a href={facebook} target="_blank" className="social-item facebook">
							<span
								class="dashicons dashicons-facebook-alt"
								style={{ color: facebookColor }}
							/>
						</a>
					)}

				{twitter &&
					!!twitter.length && (
						<a href={twitter} target="_blank" className="social-item twitter">
							<span
								class="dashicons dashicons-twitter"
								style={{ color: twitterColor }}
							/>
						</a>
					)}

				{googlePlus &&
					!!googlePlus.length && (
						<a
							href={googlePlus}
							target="_blank"
							className="social-item googlePlus"
						>
							<span
								class="dashicons dashicons-googleplus"
								style={{ color: googlePlusColor }}
							/>
						</a>
					)}

				{linkedin &&
					!!linkedin.length && (
						<a href={linkedin} target="_blank" className="social-item linkedin">
							<span
								class="dashicons dashicons-linkedIn"
								style={{ color: linkedinColor }}
							/>
						</a>
					)}

				{email &&
					!!email.length && (
						<a href={email} target="_blank" className="social-item email">
							<span
								class="dashicons dashicons-email"
								style={{ color: emailColor }}
							/>
						</a>
					)}
			</div>
		);
	}
}
