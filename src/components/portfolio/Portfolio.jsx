import PortfolioList from '../portfolioList/PortfolioList';
import { useEffect, useState} from 'react';
import './portfolio.scss'

export default function Portfolio() {
    //decide whether active or not
    const [selected, setSelected] = useState('featured')
    //create list array to map through;
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "mobile",
            title: "Mobile App"
        },
        {
            id: "design",
            title: "Design"
        },
        {
            id: "content",
            title: "Content"
        }
    ]
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList 
                    title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected}
                    id={item.id}
                     />
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="/assets/game250.jpg" alt="" />
                    <h3>What's that Phrase? Game</h3>
                </div>
                <div className="item">
                    <img src="/assets/game250.jpg" alt="" />
                    <h3>What's that Phrase? Game</h3>
                </div>
                <div className="item">
                    <img src="/assets/game250.jpg" alt="" />
                    <h3>What's that Phrase? Game</h3>
                </div>
                <div className="item">
                    <img src="/assets/game250.jpg" alt="" />
                    <h3>What's that Phrase? Game</h3>
                </div>
                <div className="item">
                    <img src="/assets/game250.jpg" alt="" />
                    <h3>What's that Phrase? Game</h3>
                </div>
                <div className="item">
                    <img src="/assets/game250.jpg" alt="" />
                    <h3>What's that Phrase? Game</h3>
                </div>
                
            </div>
        </div>
    )
}
