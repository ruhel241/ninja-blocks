const { __ } = wp.i18n;

// Import block components
const {
	InspectorControls,
	BlockDescription,
	ColorPalette,
	MediaUpload
} = wp.editor;

// Import Inspector components
const {
	Toolbar,
	Button,
	PanelBody,
	PanelRow,
	PanelColor,
	FormToggle,
	RangeControl,
	SelectControl,
	ToggleControl,
	FontSizePicker,
	IconButton
} = wp.components;

const Inspector = props => {
	// Setup the attributes
	const {
		buttonText,
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
		ctaBackgroundColor,
		ctaTitleColor,
		ctaTextColor
	} = props.props.attributes;

	const { setAttributes } = props.props;

	const btnColor = [
		{ color: "#392F43", name: "black" },
		{ color: "#3373dc", name: "royal blue" },
		{ color: "#2DBAA3", name: "teal" },
		{ color: "#209cef", name: "sky blue" },
		{ color: "#2BAD59", name: "green" },
		{ color: "#ff3860", name: "pink" },
		{ color: "#7941b6", name: "purple" },
		{ color: "#F7812B", name: "orange" }
	];

	const btnShapeOptions = [
		{ value: "ninja-cta-button-shape-square", label: __("Square") },
		{ value: "ninja-cta-button-shape-rounded", label: __("Rounded Square") },
		{ value: "ninja-cta-button-shape-circular", label: __("Circular") }
	];

	const buttonSizeOptions = [
		{ value: "ninja-cta-button-size-small", label: __("Small") },
		{ value: "ninja-cta-button-size-medium", label: __("Medium") },
		{ value: "ninja-cta-button-size-large", label: __("Large") }
	];

	const fontSizes = [
		{ shortName: "S", size: 16 },
		{ shortName: "M", size: 32 },
		{ shortName: "L", size: 48 },
		{ shortName: "XL", size: 62 }
	];

	const fallbackFontSize = 16;

	return (
		<InspectorControls key="inspector">
			<PanelBody title={__("Text Options")} initialOpen={false}>
				<label>Text Font Size</label>
				<FontSizePicker
					fontSizes={fontSizes}
					value={ctaTextFontSize}
					fallbackFontSize={fallbackFontSize}
					onChange={ctaTextFontSize => setAttributes({ ctaTextFontSize })}
				/>

				<PanelColor
					title={__("Text Color")}
					colorValue={ctaTextColor}
					initialOpen={true}
				>
					<ColorPalette
						label={__("Text Color")}
						value={ctaTextColor}
						onChange={value => setAttributes({ ctaTextColor: value })}
					/>
				</PanelColor>
			</PanelBody>

			<PanelColor
				title={__("Background Color")}
				colorValue={ctaBackgroundColor}
				initialOpen={false}
			>
				<ColorPalette
					label={__("Background Color")}
					value={ctaBackgroundColor}
					onChange={value => setAttributes({ ctaBackgroundColor: value })}
				/>
			</PanelColor>

			<PanelBody title={__("Button Options")} initialOpen={false}>
				<ToggleControl
					label={__("Open link in new window")}
					checked={buttonTarget}
					onChange={() => setAttributes({ buttonTarget: !buttonTarget })}
				/>

				<SelectControl
					label={__("Button Size")}
					value={buttonSize}
					options={buttonSizeOptions.map(({ value, label }) => ({
						value: value,
						label: label
					}))}
					onChange={buttonSize => setAttributes({ buttonSize })}
				/>

				<SelectControl
					label={__("Button Shape")}
					value={btnShape}
					options={btnShapeOptions.map(({ value, label }) => ({
						value: value,
						label: label
					}))}
					onChange={btnShape => setAttributes({ btnShape })}
				/>

				<PanelColor
					title={__("Button Background Color")}
					colorValue={buttonBackgroundColor}
					initialOpen={false}
				>
					<ColorPalette
						label={__("Button Color")}
						value={buttonBackgroundColor}
						onChange={buttonBackgroundColor => {
							setAttributes({ buttonBackgroundColor });
						}}
						colors={btnColor}
					/>
				</PanelColor>

				<PanelColor
					title={__("Button Text Color")}
					colorValue={btnTextColor}
					initialOpen={false}
				>
					<ColorPalette
						label={__("Button Text Color")}
						value={btnTextColor}
						onChange={btnTextColor => {
							setAttributes({ btnTextColor });
						}}
						colors={btnColor}
					/>
				</PanelColor>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
