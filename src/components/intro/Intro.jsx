import'./intro.scss';
import { init } from 'ityped';
import {useEffect , useRef} from 'react'; 

export default function Intro() {
    const textRef = useRef();
    //npm doc for iTyped is written for class component using componentDidMount translate for a functional component using useEffect
    //this useEffect will work only one time because it's followed by an empty array
    useEffect(() =>{
        //choose item
        //initialize item
        init(textRef.current, {
            showCursor: true, //displays a cursor   
            backDelay: 1500, //delays for a half a second before backspacing
            backSpeed: 60, //type back speed in milliseconds doc found in npm ityped docs
            strings: ["Developer", "Designer", "Content Creator"] //strings to replace text in h3 span tags
        })
        console.log(textRef);
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                        <img src="assets/-me.png"  alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Jelena Feliciano</h1>
                    <h3>Freelance <span ref={textRef}> </span> </h3>
                   
                </div>
                <a href="#portfolio">
                        <img src="assets/downarrow_121316.png" alt="" />
                </a>
            </div>
        </div>
    )
}
