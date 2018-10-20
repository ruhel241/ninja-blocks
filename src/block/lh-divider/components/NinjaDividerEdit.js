// Including Fragment
const { Fragment } = wp.element;

import Layout from "../containers/Layout";
import Inspector from "./Inspector";

const { AlignmentToolbar, BlockControls } = wp.editor;

const NinjaDividerEdit = props => {
	const {
		attributes: {
			DividerHeight,
			DividerWidth,
			DividerColor,
			DividerAlignment,
			DividerMarginTop,
			DividerMarginBottom
		},
		setAttributes
	} = props;
	return (
		<Fragment>
			<BlockControls>
				<AlignmentToolbar
					value={DividerAlignment}
					onChange={DividerAlignment => setAttributes({ DividerAlignment })}
				/>
			</BlockControls>
			<Inspector {...props} />
			<Layout {...props}>
				<div
					style={{
						border: "1px solid " + DividerColor,
						height: DividerHeight + "px",
						width: DividerWidth + "%",
						background: DividerColor,
						marginTop: DividerMarginTop + "px",
						marginBottom: DividerMarginBottom + "px"
					}}
				/>
			</Layout>
		</Fragment>
	);
};

export default NinjaDividerEdit;
