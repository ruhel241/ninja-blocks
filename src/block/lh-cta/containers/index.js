import "../styles/style.scss";
import "../styles/editor.scss";

// Import block dependencies and components
import NinjaEditClass from "../components/NinjaEditClass";
import NinjaSaveClass from "../components/NinjaSaveClass";

// Internalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

registerBlockType("ninja-blocks/ninja-block-call-to-action", {
	title: __("NINJA Call To Action"),
	description: __(
		"Add a call to action section with a title, text, and a button."
	),
	icon: "megaphone",
	category: "ninja-blocks",
	keywords: [__("call to action"), __("cta"), __("ninja")],
	attributes: {
		btnTxt: {
			type: "string"
		},
		buttonUrl: {
			type: "string",
			source: "attribute",
			selector: "a",
			attribute: "href"
		},
		buttonAlignment: {
			type: "string",
			default: "center"
		},
		buttonBackgroundColor: {
			type: "string",
			default: ""
		},
		btnTextColor: {
			type: "string",
			default: "#FFFFFF"
		},
		buttonSize: {
			type: "string",
			default: ""
		},
		btnShape: {
			type: "string",
			default: "ninja-cta-button-shape-square"
		},
		buttonTarget: {
			type: "boolean",
			default: false
		},
		ctaTitle: {
			type: "array",
			selector: ".ninja-cta-title",
			source: "children"
		},
		ctaTitleFontSize: {
			type: "string",
			default: ""
		},
		ctaTextFontSize: {
			type: "string",
			default: ""
		},
		ctaText: {
			type: "array",
			selector: ".ninja-cta-text",
			source: "children"
		},
		ctaWidth: {
			type: "string",
			default: "center"
		},
		ctaBackgroundColor: {
			type: "string",
			default: ""
		},
		ctaTitleColor: {
			type: "string",
			default: ""
		},
		ctaTextColor: {
			type: "string",
			default: ""
		}
	},

	getEditWrapperProps({ ctaWidth }) {
		if ("left" === ctaWidth || "right" === ctaWidth || "full" === ctaWidth) {
			return { "data-align": ctaWidth };
		}
	},

	edit: NinjaEditClass,

	save: NinjaSaveClass
});
