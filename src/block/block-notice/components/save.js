const { Component, Fragment } = wp.element;
const { RichText } = wp.editor;

export default class NBNoticeSave extends Component {
	render() {
		const {
			title,
			noticeTitleColor,
			noticBackground,
			noticBorderColor,
			noticeFontsize,
			noticeIcon,
			noticeDispaly
		} = this.props.attributes;

		return (
			<div
				className="nb_noticeBox"
				style={{
					backgroundColor: noticBackground,
					border: "solid 1px" + noticBorderColor
				}}
			>
				<div className="notice_text">
					<RichText.Content
						tagName="p"
						className="notice_title"
						value={title}
						style={{ color: noticeTitleColor, fontSize: noticeFontsize + "px" }}
					/>
				</div>
				<div
					className="notice_icon"
					onClick={noticeDispaly == true ? "dismissClick()" : noticeDispaly}
				>
					<span className={"dashicons dashicons-" + noticeIcon} />
				</div>
			</div>
		);
	}
}
