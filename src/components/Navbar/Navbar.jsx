import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <div className="nav-bar">
                <div className="nav-logo">
                    <h1>VTX-22EP</h1>
                </div>
                <div className="nav-links">
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">SKILLS</a></li>
                        <li><a href="#">PROJECTS</a></li>
                        <li><a href="#">CERTIFICATES</a></li>
                        <li><a href="#">LEARNING</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                </div>
            </div>
            <div className="theme"></div>
        </nav>
    )
}

export default Navbar