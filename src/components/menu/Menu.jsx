import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen}){
    return(
        <div className={"menu " + (menuOpen && "active")}>
            <ul> {/**to refactor rewrite the onclick function in a component and call the component */}
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contacts</a>
                </li>
            </ul>
        </div>
    )
}