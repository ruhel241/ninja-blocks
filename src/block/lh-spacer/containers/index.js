// Importing Styles
import "../styles/style.scss";
import "../styles/editor.scss";

// Importing Custom Components
import NinjaSpacerEdit from "../components/NinjaSpacerEdit";
import NinjaSpacerSave from "../components/NinjaSpacerSave";

// Internalization
const { __ } = wp.i18n;

// Register BlockType
const { registerBlockType } = wp.blocks;

// Extending Component
const { Component } = wp.element;

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
	Button,
	withFallbackStyles,
	IconButton,
	Dashicon,
	Toolbar
} = wp.components;

// Block Attributes
const blockAttributes = {
	SpacerHeight: {
		type: "number",
		default: 25
	},
	BorderVisibility: {
		type: "boolean",
		default: true
	}
};

registerBlockType("ninja-blocks/ninja-block-spacer", {
	title: __("Ninja Spacer"), // Title of the Block
	description: __("Add a Spacer"), // Description of the Block
	icon: "image-flip-vertical", // Icon of the Block
	category: "ninja-blocks", // Category of the Block
	keywords: [__("spacer"), __("ninja")], // Keywords of the Block, in order to search
	attributes: blockAttributes, // Attributes of the Block
	edit: NinjaSpacerEdit, // Render to the Admin View
	save: NinjaSpacerSave // Render to the User View
});
