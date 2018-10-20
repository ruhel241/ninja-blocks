const { __ } = wp.i18n; 

const Layout = props => {
    const {
        attributes: {
            buttonAlignment
        },
        children
    } = props
    return(
        <div
            style={{ textAlign: buttonAlignment }}>
            { children }
        </div>
    )
}

export default Layout