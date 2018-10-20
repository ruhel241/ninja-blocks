const { __ } = wp.i18n;

const { InspectorControls, BlockDescription, ColorPalette } = wp.editor;

// Import Inspector components
const {
	Button,
	Toolbar,
	PanelRow,
	PanelBody,
	PanelColor,
	FormToggle,
	IconButton,
	RangeControl,
	SelectControl,
	ToggleControl
} = wp.components;

const Inspector = props => {
	const {
		attributes: { bgColor, dcTextColor, dcFontSize },
		setAttributes
	} = props;

	return (
		<InspectorControls key="inspector">
			<PanelColor
				title={__("Background Color")}
				value={bgColor}
				initialOpen={false}
			>
				<ColorPalette
					label={__("Background Color")}
					value={bgColor}
					onChange={value => setAttributes({ bgColor: value })}
				/>
			</PanelColor>

			<PanelBody title={__("Text Options")} initialOpen={false}>
				<RangeControl
					label={__("Drop Cap Font Size")}
					min={0}
					max={7}
					step={1}
					value={dcFontSize}
					onChange={dcFontSize => setAttributes({ dcFontSize })}
					initialPosition={0.01}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
