// Internationalization
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

// import Block component
const { InspectorControls } = wp.editor;

// import Inspector components
const {
	PanelBody,
	PanelColor,
	ColorPalette,
	FontSizePicker,
	SelectControl,
	ColorIndicator,
	ToggleControl
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	render() {
		const {
			attributes: {
				noticeTitleColor,
				noticBackground,
				noticBorderColor,
				noticeFontsize,
				noticeIcon,
				noticeDispaly
			},
			setAttributes
		} = this.props;

		const colors = [
			{ color: "#00d1b2", name: "teal" },
			{ color: "#3373dc", name: "royal blue" },
			{ color: "#209cef", name: "sky blue" },
			{ color: "#22d25f", name: "green" },
			{ color: "#ffdd57", name: "yellow" },
			{ color: "#ff3860", name: "pink" },
			{ color: "#7941b6", name: "purple" },
			{ color: "#392F43", name: "black" },
			{ color: "#fff", name: "white" }
		];

		const fontSizes = [
			{ shortName: "S", size: 12 },
			{ shortName: "M", size: 26 }
		];
		const fallbackFontSize = 12;

		const noticeIcons = [
			{ label: "Dashboard", value: "dashboard" },
			{ label: "Admin Post", value: "admin-post" },
			{ label: "Dismiss", value: "no" }
		];

		return (
			<InspectorControls>
				<PanelBody>
					<p> Font Size</p>
					<FontSizePicker
						fontSizes={fontSizes}
						value={noticeFontsize}
						fallbackFontSize={fallbackFontSize}
						onChange={value => setAttributes({ noticeFontsize: value })}
					/>
				</PanelBody>

				<PanelBody>
					<p>
						Background Color: <ColorIndicator colorValue={noticBackground} />
					</p>

					<ColorPalette
						label={__("Backbround Color")}
						colors={colors}
						value={noticBackground}
						onChange={value => setAttributes({ noticBackground: value })}
					/>
				</PanelBody>

				<PanelBody>
					<p>
						Border Color: <ColorIndicator colorValue={noticBorderColor} />
					</p>

					<ColorPalette
						label={__("Title Color")}
						colors={colors}
						value={noticBorderColor}
						onChange={value => setAttributes({ noticBorderColor: value })}
					/>
				</PanelBody>

				<PanelBody>
					<p>
						Title Color: <ColorIndicator colorValue={noticeTitleColor} />
					</p>

					<ColorPalette
						label={__("Title Color")}
						colors={colors}
						value={noticeTitleColor}
						onChange={value => setAttributes({ noticeTitleColor: value })}
					/>
				</PanelBody>

				<PanelBody>
					<ToggleControl
						label="Notice Display"
						help={noticeDispaly ? "Notice Dismissable." : "Notice Always Show"}
						checked={noticeDispaly}
						onChange={value => setAttributes({ noticeDispaly: value })}
					/>

					<SelectControl
						label="icon"
						value={noticeIcon}
						options={noticeIcons}
						onChange={value => setAttributes({ noticeIcon: value })}
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}
