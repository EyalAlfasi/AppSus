const { NavLink, withRouter } = ReactRouterDOM;

function _MainHeader() {

    return <header className="main-header-container">
        <nav>
            <ul>
                <li><NavLink activeClassName="nav-active" exact to="/">Home</NavLink></li>
                <li><NavLink activeClassName="nav-active" to="/bookApp">Books</NavLink></li>
                <li><NavLink activeClassName="nav-active" to="/mail">Mail</NavLink></li>
                <li><NavLink activeClassName="nav-active" to="/keep">Keep</NavLink></li>
            </ul>
        </nav>;
    </header>
}
export const MainHeader = withRouter(_MainHeader);