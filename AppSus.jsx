import { KeepApp } from './apps/Keep/KeepApp.jsx'
import { MailApp } from './apps/Mail/MailApp.jsx'
import { AppSusHome } from './pages/AppSusHome.jsx'
import { MainHeader } from "./cmps/MainHeader.jsx"
const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
export function AppSus() {
    return (
        <section>

            <Router>
                <MainHeader />
                <Switch>
                    <Route path="/keep" component={KeepApp} />
                    <Route path="/mail" component={MailApp} />
                    <Route path="/" component={AppSusHome} />
                </Switch>
            </Router>

        </section>
    )
}
