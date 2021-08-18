import './works.scss'
import {useState} from 'react';

export default function Works() {
    //useState used to set data 
    const [currentSlide, setCurrentSlide] = useState(0);


    const data = [
        {
            id: 1,
            icon: "./assets/phone.png",
            title: "Web Design (placeholder)",
            desc: "we will describe what this is when we know more about what will be placed here.",
            img: "./assets/placeholder.jpg"
        },
        {
            id: 2,
            icon: "./assets/globe.png",
            title: "Mobile Application (placeholder)",
            desc: "we will describe what this is when we know more about what will be placed here.",
            img: "./assets/placeholder1.jpg"
        },
        {
            id: 3,
            icon: "./assets/writing.png",
            title: "Branding (placeholder)",
            desc: "we will describe what this is when we know more about what will be placed here.",
            img: "./assets/placeholder2.jpg"
        }
    ];

    /**
     * this callback function is called `handleClick` checks way and sets Current Slide 
     * setCurrentSlide checks  if the currentSlide is bigger than 0 decrease the currentSlide by 1 else its 2.
     * then if its right set current slide which checks if the currentSlide is smaller than the data length is minus 1 add 1 else its 0
     * @param way - the direction right or left  */

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2) : 
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    };
    
    return (
        <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}> {/**moves slide */}
                {data.map(d => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt={d.title} />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p> {d.desc}</p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
            <img src="./assets/arrows.png" className="arrow left" alt="left arrow" onClick={()=> handleClick('left')} />
            <img src="./assets/arrows.png" className="arrow right" alt="right arrow" onClick={()=> handleClick()} />

        </div>
    )
}
