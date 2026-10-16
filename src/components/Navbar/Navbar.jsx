import './Navbar.css'
import logoBanner from '../../assets/images/vtx/vtx-logo_banner.png'

function Navbar() {
    return (
        <nav>
            <div className="nav-logo">
                {/* <img src={logoBanner} alt="VTX-22EP" /> */}
                <h1>vtx<span>22</span>ep.me</h1>
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