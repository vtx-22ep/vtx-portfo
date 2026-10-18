import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className="nav-logo">
                <h1><span>vtx</span>-22ep</h1>
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
        </nav>
    )
}

export default Navbar