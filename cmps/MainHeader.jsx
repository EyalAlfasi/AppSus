const { NavLink, withRouter } = ReactRouterDOM;

class _MainHeader extends React.Component {

    state = {
        isNavOpen: false
    }

    onOpenNav = () => {
        this.setState({ isNavOpen: !this.state.isNavOpen })
        setTimeout(() => {
            if (this.state.isNavOpen) {
                this.setState({ isNavOpen: !this.state.isNavOpen })
            }
        }, 3000);
    }

    render() {
        return <header className="main-header-container">
            <div >
                <NavLink className="logo-container" activeClassName="nav-active" exact to="/"><h2>AppSus</h2>
                    <img src="assets\img\logo-white-large.png" /></NavLink>
            </div>
            <nav>
                <i className="fa fa-th main-header-nav-menu" onClick={() => this.onOpenNav()}></i>
                {this.state.isNavOpen && <ul>
                    <li onClick={() => this.setState({ isNavOpen: false })}>
                        <a href="https://eyalalfasi.github.io/books-proj/" target="_blank"><i className="fa fa-book"></i><h4>Books</h4></a>
                    </li>
                    <li onClick={() => this.setState({ isNavOpen: false })}>
                        <NavLink activeClassName="nav-active" to="/mail"><i className="fa fa-envelope"></i><h4>Mail</h4></NavLink>
                    </li>
                    <li onClick={() => this.setState({ isNavOpen: false })}>
                        <NavLink activeClassName="nav-active" to="/keep"><i className="fa fa-sticky-note"></i><h4>Keep</h4></NavLink>
                    </li>
                </ul>}

            </nav>;
    </header>
    }
}
export const MainHeader = withRouter(_MainHeader);