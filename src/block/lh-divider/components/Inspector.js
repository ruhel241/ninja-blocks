const { __ } = wp.i18n;

const { InspectorControls, ColorPalette } = wp.editor;

const { PanelBody, RangeControl, PanelColor } = wp.components;

const Inspector = props => {
	const {
		attributes: {
			DividerHeight,
			DividerWidth,
			DividerColor,
			DividerMarginTop,
			DividerMarginBottom
		},
		setAttributes
	} = props;

	return (
		<InspectorControls key="inspector">
			<PanelColor
				title={__("Divider Options")}
				colorValue={DividerColor}
				initialOpen={true}
			>
				<RangeControl
					label={__("Divider Height")}
					min={0}
					max={15}
					step={1}
					value={DividerHeight}
					onChange={DividerHeight => setAttributes({ DividerHeight })}
					initialPosition={0.1}
				/>
				<RangeControl
					label={__("Divider Width")}
					min={0}
					max={100}
					step={1}
					value={DividerWidth}
					onChange={DividerWidth => setAttributes({ DividerWidth })}
					initialPosition={0.1}
				/>

				<ColorPalette
					label={__("Divider Color")}
					value={DividerColor}
					onChange={DividerColor => setAttributes({ DividerColor })}
				/>
			</PanelColor>
			<PanelBody title={__("Margin")} initialOpen={false}>
				<RangeControl
					label={__("Margin Top")}
					min={0}
					max={100}
					step={1}
					value={DividerMarginTop}
					onChange={DividerMarginTop => setAttributes({ DividerMarginTop })}
					initialPosition={1}
				/>

				<RangeControl
					label={__("Margin Bottom")}
					min={0}
					max={100}
					step={1}
					value={DividerMarginBottom}
					onChange={DividerMarginBottom =>
						setAttributes({ DividerMarginBottom })
					}
					initialPosition={1}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
