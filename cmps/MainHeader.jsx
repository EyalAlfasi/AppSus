const { NavLink, withRouter } = ReactRouterDOM;

function _MainHeader() {

    return <header className="main-header-container">
        <div className="logo-container">
            <h2>AppSus</h2>
            <img src="assets\img\logo-white-large.png"/>
        </div>
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