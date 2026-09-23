import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <div className="nav-bar">
                <div className="logo">
                    <h1>vtx-Portfo</h1>
                </div>
                <div className="nav-links">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Project</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar