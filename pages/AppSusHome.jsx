const { Link } = ReactRouterDOM;
export function AppSusHome() {

    return <section className="home-container">
        <div className="home-mail-container">
            <div>
                <img src="../assets/img/home-mail.png" />
            </div>
            <div>
                <h2>Welcome to a new era of mailing</h2>
                <p>AppSus, has re-invented online mailing.
                You can search through your mails faster then ever before, mark important mails and more!
                All of that is brought to you in a smooth, modern and easy to use UI, check it out!
                </p>
                <Link to="/mail"><button>AppSus Mail</button></Link>
            </div>
        </div>
        <div className="home-keep-container">
            <div>
                <h2>Just rememberd something?</h2>
                <p>Indroducing AppSus Keep! The new way of keeping what comes to your mind,
                in a variaty of exciting ways! Text, To-do list, videos, Images, and even more! &#40;soon&#41;.
                Go have a look!
                </p>
                <Link to="/keep"><button>AppSus Keep</button></Link>
            </div>
            <div>
                <img src="../assets/img/home-keep.png" />
            </div>
        </div>
    </section>

}







{/* <h3>Temporary links...</h3>
<div className="homepage-links">
    <Link to="/mail"><button>Mail</button></Link>
    <Link to="/keep"><button>Keep</button></Link>
</div> */}