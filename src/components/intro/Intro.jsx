import'./intro.scss'

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                        <img src="assets/me_.jpg"  alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Jelena Feliciano</h1>
                    <h3>Freelance <span>{ /**add changing titles */} </span> </h3>
                
                    <a href="#portfolio">
                        <img src="assets/assets/downarrow_121316.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}
