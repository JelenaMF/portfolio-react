import './topbar.scss';
import {Person, Mail } from "@material-ui/icons";

/** `Topbar` function 
 * @param menuOpen - bool
 * @param setMenuOpen - bool
 * when menu is open setMenuOpen is set to true display the white logo and text and the background color to the $maincolor
 * when the hamburger is clicked again setMenuOpen is set to false and black logo is displayed on a white background. menu disappears to the right. 
 */

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        <img className="black" src="./assets/dynodev-trans-bl432X165.png" alt="DynoDev logo" />
                        <img className= "white active" src="./assets/dynodev-trans-w385X160.png" alt="DynoDev logo" />
                            
                    </a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span> 813-710-7309 </span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span> jfel217@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)} >
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
