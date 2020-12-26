const { NavLink, withRouter } = ReactRouterDOM;

class _MainHeader extends React.Component {

    state = {
        isNavOpen: false
    }

    render() {
        return <header className="main-header-container">
            <div >
                <NavLink className="logo-container" activeClassName="nav-active" exact to="/"><h2>AppSus</h2>
                    <img src="assets\img\logo-white-large.png" /></NavLink>
            </div>
            <nav>
                <i className="fa fa-th main-header-nav-menu" onClick={() => this.setState({ isNavOpen: !this.state.isNavOpen })}></i>
                {this.state.isNavOpen && <ul>
                    <li onClick={() => this.setState({ isNavOpen: false })}>
                        <NavLink activeClassName="nav-active" to="/bookApp"><i className="fa fa-book"></i></NavLink>
                    </li>
                    <li onClick={() => this.setState({ isNavOpen: false })}>
                        <NavLink activeClassName="nav-active" to="/mail"><i className="fa fa-envelope"></i></NavLink>
                    </li>
                    <li onClick={() => this.setState({ isNavOpen: false })}>
                        <NavLink activeClassName="nav-active" to="/keep"><i className="fa fa-sticky-note"></i></NavLink>
                    </li>
                </ul>}

            </nav>;
    </header>
    }
}
export const MainHeader = withRouter(_MainHeader);