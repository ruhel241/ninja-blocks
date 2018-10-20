/*****
 * Inspector Controls Component
 ****/

const { __ } = wp.i18n;
const { Component } = wp.element;

const { InspectorControls} = wp.editor;

const { TextControl, PanelColor, ColorPalette, RangeControl, PanelBody, ToggleControl, SelectControl, FontSizePicker } = wp.components;




export default class Inspector extends Component{
    constructor( props ) {
        super( ...arguments );
    }
    
    render(){
        const {
            attributes: {
                imageShape, nameFz, nameColor, fontSize, designationColor, facebook, twitter, instagram, pinterest, google, youtube, github, website, linkedin, dropcap, buttonStyle, socialBgColor, socialIconColor, socialIconFz,socialBorderColor, socialBorderTopRDropCap, boxBgColor, boxBorderColor, columns
            },
            setAttributes,
            attributes,
        } = this.props;
 
        const nameDefaultcolors = [
            { name: '', color: '#f00' },
            { name: '', color: '#0000FF' },
            { name: '', color: '#415642' },
            { name: '', color: '#000' },
            { name: '', color: '#00f' },
            { name: '', color: '#415642' },
        ];

        const designationDefaultcolors = [
            { name: 'red', color: '#f00' },
            { name: 'white', color: '#0000FF' },
            { name: 'blue', color: '#C8A99F' },
            { name: 'blue', color: '#E55B44' },
            { name: 'blue', color: '#590B2C' },
            { name: 'blue', color: '#B8865B' },
        ];

        const imageShapeOptions = [
            { label: __('Square'), value: 'square'  },
            { label: __('Round'), value: 'round'  },
        ];

        const nameFontSizeOptions = [
            { shortName: __('S'), size: 18  },
            { shortName: __('M'), size: 24  },
            { shortName: __('L'), size: 32  },
            { shortName: __('XL'), size: 38  },
        ];
        const nameFallbackFontSize = 24;

        const fontSizeOptions = [
            { shortName: __('S'), size: 14  },
            { shortName: __('M'), size: 18  },
            { shortName: __('L'), size: 24  },
            { shortName: __('XL'), size: 28  },
        ];
        const fallbackFontSize = 14;

        const buttonStyleOptions = [
            { label: __('Icon Only'), value: 'icon'  },
            { label: __('Text Only'), value: 'text'  },
        ];

        const socialBgDefaultcolors = [
            { name: '', color: '#f00' },
            { name: '', color: '#0000FF' },
            { name: '', color: '#415642' },
            { name: '', color: '#000' },
            { name: '', color: '#00f' },
            { name: '', color: '#415642' },
        ];
        const socialIconDefaultcolors = [
            { name: '', color: '#47b475' },
            { name: '', color: '#0000FF' },
            { name: '', color: '#415642' },
            { name: '', color: '#000' },
            { name: '', color: '#00f' },
            { name: '', color: '#415642' },
        ];

        const socialBorderDefaultcolors = [
            { name: '', color: '#dedede' },
            { name: '', color: '#ccc' },
            { name: '', color: '#efefef' },
            { name: '', color: '#f9f9f9' },
            { name: '', color: '#00f' },
            { name: '', color: '#415642' },
        ];

        const iconfontSizeOptions = [
            { shortName: __('S'), size: 14  },
            { shortName: __('M'), size: 16  },
            { shortName: __('L'), size: 24  },
            { shortName: __('XL'), size: 28  },
        ];
        const iconFallbackFontSize = 16;

        const boxBgDefaultcolors = [
            { name: '', color: '#fff' },
            { name: '', color: '#0000FF' },
            { name: '', color: '#415642' },
            { name: '', color: '#000' },
            { name: '', color: '#00f' },
            { name: '', color: '#415642' },
        ];

        const boxBorderDefaultcolors = [
            { name: '', color: '#dedede' },
            { name: '', color: '#ccc' },
            { name: '', color: '#efefef' },
            { name: '', color: '#f9f9f9' },
            { name: '', color: '#00f' },
            { name: '', color: '#415642' },
        ];
        
        const columnsOptions = [
            { label: __('One Column'), value: '1'  },
            { label: __('Two Column'), value: '2'  },
            { label: __('Three Column'), value: '3'  },
        ];

        return(
            <InspectorControls key="inspector">
                <SelectControl
                    label = { __( 'Column Number' ) }
                    options={ columnsOptions }
                    value={ columns }
                    onChange={(newValue) => { setAttributes({columns: newValue}) }}
                />
                <PanelBody
                    title={__('Image Settings')}
                    initialOpen={ true }
                >
                    <SelectControl
                        label = { __( 'Image Shape' ) }
                        options={ imageShapeOptions }
                        value={ imageShape }
                        onChange={(value) => setAttributes({imageShape: value})}
                    />
                </PanelBody>
                <PanelBody
                    title={__('Name Settings')}
                    initialOpen={ false }
                >
                    <PanelColor
                        title={__('Color')}
                        colorValue={nameColor}
                        initialOpen={false}
                    >
                        <ColorPalette
                            colors={nameDefaultcolors}
                            value={nameColor}
                            onChange={(color) => setAttributes({nameColor: color})}
                        />
                    </PanelColor>
                    <PanelBody
                        title={__('Font Size')}
                        initialOpen={ false }
                    >
                    <FontSizePicker
                        label = { __( 'Font Size' ) }
                        fontSizes = {nameFontSizeOptions}
                        fallbackFontSize = {nameFallbackFontSize}
                        value={nameFz}
                        onChange={(value) => setAttributes({nameFz: value})}
                    />
                    </PanelBody>
                </PanelBody>

                <PanelBody
                    title={__('Designation Settings')}
                    initialOpen={ false }
                >
                    <PanelColor
                        title={ __( 'Color' ) }
                        colorValue={ designationColor }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            colors = { designationDefaultcolors }
                            value={ designationColor }
                            onChange={ ( color ) => setAttributes( { designationColor: color } ) }
                        />
                    </PanelColor>
                    <PanelBody
                        title={__('Font Size')}
                        initialOpen={ false }
                    >
                    <FontSizePicker
                        label = { __( 'Font Size' ) }
                        fontSizes = {fontSizeOptions}
                        fallbackFontSize = {fallbackFontSize}
                        value={fontSize}
                        onChange={(value) => setAttributes({fontSize: value})}
                    />
                    </PanelBody>
                   
                </PanelBody>
                <PanelBody
                    title = { __('Social Settings') }
                    initialOpen = { false }
                >
                    <ToggleControl
                        label = { __('Show/Hide Social') }
                        checked = { !!dropcap }
                        onChange = { value => setAttributes( { dropcap: value } ) }
                    />
                    <ToggleControl
                        label = { __('Show/Hide Border Top') }
                        checked = { !!socialBorderTopRDropCap }
                        onChange = { value => setAttributes( { socialBorderTopRDropCap: value } ) }
                    />
                    <PanelColor
                        title={ __( 'Background Color' ) }
                        colorValue={ socialBgColor }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            colors = { socialBgDefaultcolors }
                            value={ socialBgColor }
                            onChange={ ( color ) => setAttributes( { socialBgColor: color } ) }
                        />
                    </PanelColor>
                    <PanelColor
                        title={ __( 'Border Color' ) }
                        colorValue={ socialBorderColor }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            colors = { socialBorderDefaultcolors }
                            value={ socialBorderColor }
                            onChange={ ( color ) => setAttributes( { socialBorderColor: color } ) }
                        />
                    </PanelColor>
                    <PanelColor
                        title={ __( 'Icon Color' ) }
                        colorValue={ socialIconColor }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            colors = { socialIconDefaultcolors }
                            value={ socialIconColor }
                            onChange={ ( color ) => setAttributes( { socialIconColor: color } ) }
                        />
                    </PanelColor>
                    <PanelBody
                        title={__('Font Size')}
                        initialOpen={ false }
                    >
                    <FontSizePicker
                        label = { __( 'Icon Font Size' ) }
                        fontSizes = {iconfontSizeOptions}
                        fallbackFontSize = {iconFallbackFontSize}
                        value={socialIconFz}
                        onChange={(value) => setAttributes({socialIconFz: value})}
                    />
                    </PanelBody>
                </PanelBody>
                <PanelBody
                    title={__('Box Settings')}
                    initialOpen={ false }
                >
                    <PanelColor
                        title={ __( 'Background Color' ) }
                        colorValue={ boxBgColor }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            colors = { boxBgDefaultcolors }
                            value={ boxBgColor }
                            onChange={ ( color ) => setAttributes( { boxBgColor: color } ) }
                        />
                    </PanelColor>

                    <PanelColor
                        title={ __( 'Border Color' ) }
                        colorValue={ boxBorderColor }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            colors = { boxBorderDefaultcolors }
                            value={ boxBorderColor }
                            onChange={ ( color ) => setAttributes( { boxBorderColor: color } ) }
                        />
                    </PanelColor>
                </PanelBody>
            </InspectorControls>
        );
    }
}
