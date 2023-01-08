import "./mailList.css"

const MailList = () => {
    return(
        <div className="mail">
            <h1 className="mailTitle">Save Time, Save Money</h1>
            <span className="mailDesc">Sign up for info on deals</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Email"/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default MailList