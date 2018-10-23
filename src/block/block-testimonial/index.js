/**
 * Block: Ninja Block Testimonial
 */

// Internationalization
const { __ } = wp.i18n;

// import Edit
import NBTestimonialEdit from "./components/edit.js";

// import NBTestimonialSave
import NBTestimonialSave from "./components/save.js";

//  Import CSS
import "./styles/style.scss";
import "./styles/editor.scss";

// Register Block
const { registerBlockType } = wp.blocks;

registerBlockType("ninja-blocks/nb-testimonial", {
	title: __("NB Testimonial"),
	description: __("Add a user testimonial with a name and title."),
	icon: "format-quote",
	category: "ninja-blocks",
	keywords: [__("tes"), __("feedback"), __("ninja")],

	attributes: {
		testimonialContent: {
			type: "Array",
			source: "children",
			selector: ".nbContent"
		},

		testimonialName: {
			type: "Array",
			source: "children",
			selector: ".nbName"
		},

		testimonialTitle: {
			type: "Array",
			source: "children",
			selector: ".nbTitle"
		},

		testimonialImageUrl: {
			type: "string",
			source: "attribute",
			attribute: "src",
			selector: ".testimonial_image"
		},
		testimonialAlt: {
			type: "string",
			attribute: "alt",
			selector: ".testimonial_image",
			default: "testimonai image"
		},
		testimonialImgId: {
			type: "number",
			default: ""
		},

		testimonialImgRadius: {
			default: "50%"
		},

		testimonialAlignment: {
			type: "string",
			default: ""
		},

		testimonialFontSize: {
			type: "number",
			default: ""
		},
		testimonialBackgound: {
			type: "string",
			default: ""
		},

		testimonialTextColor: {
			type: "string",
			default: ""
		},
		lineHeight: {
			type: "string",
			default: ""
		},
		paddingLeft: {
			type: "string",
			default: ""
		},
		paddingRight: {
			type: "string",
			default: ""
		},
		paddingTop: {
			type: "string",
			default: ""
		},
		paddingBottom: {
			type: "string",
			default: ""
		},
		marginLeft: {
			type: "string",
			default: ""
		},
		marginRight: {
			type: "string",
			default: ""
		},
		marginTop: {
			type: "string",
			default: ""
		},
		marginBottom: {
			type: "string",
			default: ""
		},
		// fontFamily: {
		// 	type: "string",
		// 	default: ""
		// },
		letterSpacing: {
			type: "string",
			default: ""
		},
		autohorInfoLayout: {
			type: "string",
			default: "middle-testimonial-info"
		},
		testimonialImgDiplay: {
			type: "boolean",
			default: true
		}
	},

	// Render Edit components
	edit: NBTestimonialEdit,
	// Render Save Component
	save: NBTestimonialSave
});
