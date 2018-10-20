// Internationalization
const { __ } = wp.i18n;

// Registering block
const { registerBlockType } = wp.blocks;

// Importing custom scss
import "../styles/style.scss";
import "../styles/editor.scss";

// Importing custom components
import NinjaEditClass from "../components/NinjaEditClass";
import NinjaSaveClass from "../components/NinjaSaveClass";

const blockAttributes = {
	text: {
		type: "array",
		selector: ".ninja-drop-cap-text",
		source: "children"
	},
	bgColor: {
		type: "string",
		default: ""
	},
	dcFontSize: {
		type: "number"
	},
	dcWidth: {
		type: "string",
		default: "center"
	},
	dcTextColor: {
		type: "string",
		default: ""
	},
	buttonAlignment: {
		type: "string",
		default: "left"
	}
};

registerBlockType("ninja-blocks/ninja-block-drop-cap", {
	title: __("Ninja Drop Cap"), // Title of the block
	description: __("Add a DropCap, put your text on the block!"), // Description of the block
	icon: "format-quote", // Icon of the block
	category: "ninja-blocks", // Category of the block
	keywords: [__("ninja drop cap"), __("drop cap"), __("ninja")], // Keywords of the block
	attributes: blockAttributes, // Attributes of the block
	edit: NinjaEditClass, // responsible to render the Admin view
	save: NinjaSaveClass // responsible to render the User View
});
