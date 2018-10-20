const Layout = props => {
	const {
		attributes: { DividerAlignment },
		children
	} = props;
	return (
		<div className="ninja-divider-container" align={DividerAlignment}>
			{children}
		</div>
	);
};

export default Layout;
