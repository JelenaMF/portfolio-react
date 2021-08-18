import './testimonials.scss';

export default function Testimonials() {
    const data = [
        {
            id: 1,
            name: "Alex",
            title: "CEO",
            img: "http://ofad.org/files/imagecache/daily_picture/daily-photo/recent-and-random-portraits_8.jpg",
            icon: {
                img:"./assets/youtube.png",
                alt:"Youtube icon"},
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 2,
            name: "Mark",
            title: "CEO",
            img: "https://farm9.staticflickr.com/8488/8155406569_b30554abe2_z.jpg",
            icon: {
                img:"./assets/youtube.png",
                alt:"Youtube icon"},
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            featured: true
        },
        {
            id: 3,
            name: "Raelle",
            title: "CEO",
            img: "https://i.pinimg.com/originals/f9/a7/41/f9a7415027a2ce4913a6b0d74ed4d7d7.jpg",
            icon: {
                img:"./assets/youtube.png",
                alt:"Youtube icon"},
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ];

    return (
        <div className="testimonial" id="testimonials">
            <h1>Testimonials</h1>
           
            <div className="container">
                {data.map(d => (
                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img src="assets/rightarrow.png" className="left" alt="right arrow icon" />
                            <img className="user" 
                            src={d.img} alt={d.name} />
                            <img className="right" src={d.icon.img} alt={d.icon.alt} />
                        </div>
                        <div className="center">
                            {d.desc}
                        </div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4> {d.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
