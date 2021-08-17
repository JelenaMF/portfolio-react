import './works.scss'
import {PhoneAndroid} from "@material-ui/icons";


export default function Works() {
    return (
        <div className="works" id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <PhoneAndroid className="icon" />
                                </div>
                                <h2>Registration Form</h2>
                                <p> This application can be accessed on your mobile device to capture clients and guests from home or
                                    on the road. 
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="./assets/form.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <img src="./assets/arrows.png" className="arrow left" alt="left arrow" />
            <img src="./assets/arrows.png" className="arrow right" alt="right arrow" />

        </div>
    )
}
