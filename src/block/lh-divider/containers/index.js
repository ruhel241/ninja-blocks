// Importing Styles
import "../styles/style.scss";
import "../styles/editor.scss";

import NinjaDividerEdit from "../components/NinjaDividerEdit";
import NinjaDividerSave from "../components/NinjaDividerSave";

// Internalization
const { __ } = wp.i18n;

// RegisterBlockType
const { registerBlockType } = wp.blocks;

// Registering Editor Components
const {
	AlignmentToolbar,
	URLInput,
	BlockControls,
	BlockAlignmentToolbar,
	RichText
} = wp.editor;

// Registering Components
const {
	GamepadButton,
	withFallbackStyles,
	IconButton,
	Dashicon,
	Toolbar
} = wp.components;

// Attributes for the Block
const blockAttributes = {
	DividerHeight: {
		type: "number"
	},
	DividerWidth: {
		type: "number",
		default: 50
	},
	DividerAlignment: {
		type: "string",
		default: "left"
	},
	DividerColor: {
		type: "string",
		default: ""
	},
	DividerMarginTop: {
		type: "number"
	},
	DividerMarginBottom: {
		type: "number"
	}
};

registerBlockType("ninja-blocks/ninja-block-divider", {
	title: __("Ninja Divider"), // Title of the Block
	description: __("Add a Divider"), // Description of the Block
	icon: "minus", // Icon of the Block
	category: "ninja-blocks", // Category of the Block
	keywords: [__("divider"), __("ninja")], // Keywords of the Block
	attributes: blockAttributes, // Atrributes of the Block
	edit: NinjaDividerEdit, // Render to the Admin View
	save: NinjaDividerSave // Render to the User View
});
