const { Link } = ReactRouterDOM;
export function AppSusHome() {

    return <section>
        <h3>Temporary links...</h3>
        <div className="homepage-links">
            <Link to="/mail"><button>Mail</button></Link>
            <Link to="/keep"><button>Keep</button></Link>
        </div>
    </section>

}