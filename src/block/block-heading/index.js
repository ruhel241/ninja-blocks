/**
 * Block: Ninja Block Heading
 */

// Internationalization
const { __ } = wp.i18n;

// import Edit
import NBHeadingEdit from "./components/edit.js";

// import NBHeadingSave
import NBHeadingSave from "./components/save.js";

//  Import CSS
import "./styles/style.scss";
import "./styles/editor.scss";

// Register Block
const { registerBlockType } = wp.blocks;

registerBlockType("ninja-blocks/nb-heading", {
	title: __("Heading"),
	description: __("Add a heading text"),
	icon: "welcome-write-blog",
	category: "ninja-blocks",
	keywords: [__("headnig"), __("highlight"), __("text")],

	attributes: {
		heading: {
			type: "Array",
			source: "children",
			selector: ".heading"
		},
		headingTag: {
			type: "string",
			default: "h1"
		},
		headingColor: {
			type: "string",
			default: ""
		},
		headingFontSize: {
			type: "string",
			default: ""
		},
		headingAlignment: {
			type: "string",
			default: ""
		}
	},

	// Render Edit components
	edit: NBHeadingEdit,
	// Render Save Component
	save: NBHeadingSave
});
