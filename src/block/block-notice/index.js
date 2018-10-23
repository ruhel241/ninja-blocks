/**
 * Block: Ninja Block Notice
 */

//  Import Block Dependency component
import NBNoticeEdit from "./components/edit.js";
import NBNoticeSave from "./components/save.js";

//  Import CSS
import "./styles/style.scss";
import "./styles/editor.scss";

// Internationalization
const { __ } = wp.i18n;

// Register Block
const { registerBlockType } = wp.blocks;

// Register editor components
const {
	RichText,
	AlignmentToolbar,
	MediaUpload,
	BlockControls
	//BlockAlignmentToolbar,
} = wp.editor;

// Register components
const { Button } = wp.components;

registerBlockType("ninja-blocks/nb-notice", {
	title: __("NB Notice"),
	description: __("Add a text notice"),
	icon: "admin-post",
	category: "ninja-blocks",
	keywords: [__("notice"), __("announcement"), __("notification")],

	attributes: {
		title: {
			type: "array",
			source: "children",
			selector: ".notice_title"
		},

		noticeTitleColor: {
			type: "string",
			default: ""
		},

		noticBackground: {
			type: "string",
			default: ""
		},

		noticBorderColor: {
			type: "string",
			default: ""
		},

		noticeFontsize: {
			type: "string",
			default: ""
		},
		noticeIcon: {
			type: "string",
			default: "no"
		},
		noticeDispaly: {
			type: "boolean",
			default: false
		}
	},

	// edit
	edit: NBNoticeEdit,
	// save
	save: NBNoticeSave
});
