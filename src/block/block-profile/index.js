/**
 * Block: Ninja Block Profile
 */

//  Import Block Dependency component
// import Inspector from "./components/inspector.js";
// import SocialIcons from "./components/social.js";

// Edit Component
import NBAuthorProfileEdit from "./components/edit.js";

// save Component
import NBAuthorProfileSave from "./components/save.js";

//  Import CSS
import "./styles/style.scss";
import "./styles/editor.scss";

// Internationalization
const { __ } = wp.i18n;

// Register Block
const { registerBlockType } = wp.blocks;

registerBlockType("ninja-blocks/author-profile", {
	title: __("NB Author Profile"),
	description: __("Add your profile infomation"),
	icon: "admin-users",
	category: "ninja-blocks",
	keywords: [__("profile"), __("avator"), __("author")],

	attributes: {
		title: {
			type: "string",
			source: "text",
			selector: ".title"
		},
		designation: {
			type: "string",
			source: "text",
			selector: ".designation"
		},
		description: {
			type: "Array",
			source: "children",
			selector: ".desc"
		},
		authorImgUrl: {
			type: "string",
			source: "attribute",
			attribute: "src",
			selector: ".authorImg"
		},
		authorImgAlt: {
			type: "string",
			attribute: "alt",
			selector: ".authorImg"
		},
		authorImageId: {
			type: "number"
		},
		profileBackground: {
			type: "string",
			default: ""
		},
		facebook: {
			type: "url"
		},
		facebookColor: {
			type: "string",
			default: ""
		},
		twitter: {
			type: "url"
		},
		twitterColor: {
			type: "string",
			default: ""
		},
		googlePlus: {
			type: "url"
		},
		googlePlusColor: {
			type: "string",
			default: ""
		},

		linkedin: {
			type: "url"
		},
		linkedinColor: {
			type: "string",
			default: ""
		},

		email: {
			type: "url"
		},
		emailColor: {
			type: "string",
			default: ""
		},

		titleFontSize: {
			type: "string",
			default: ""
		},
		titleColor: {
			type: "string",
			default: ""
		},
		designationFontSize: {
			type: "string",
			default: ""
		},
		designationColor: {
			type: "string",
			default: ""
		},
		descriptionFontSize: {
			type: "string",
			default: ""
		},
		descriptionColor: {
			type: "string",
			default: ""
		},
		imageShape: {
			type: "string",
			default: "50%"
		},
		descriptionAlign: {
			type: "string",
			default: "left"
		},
		profileLayout: {
			type: "string",
			default: ""
		}
	},

	// Render Edit components
	edit: NBAuthorProfileEdit,
	// Render Save Component
	save: NBAuthorProfileSave
});
