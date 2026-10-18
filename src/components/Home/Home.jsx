import './Home.css'
import myImg from '../../assets/images/Profile Pic/myProfile_B&W3.png'

const Home = () => {
    return(
        <div className="container">
            <div className="greetings">
                <h4>Hey pal!<br />A warm welcome to my Portfo.</h4>
            </div>
            <div className="home-content">
                <img src={myImg} alt="Vignesh Thilagaraj" />
                <h4>Hi 👋🏼! This is<span>,</span></h4>
                <h1>Vignesh <span>Thilagaraj</span></h1>
                <p className="bio">
                    B.E CSE Student | On a Journey to Master Cybersecurity & Computer Networks | Linux Learner | Junior Web Developer
                </p>
                <p className="about">
                    Computer Science and Engineering student passionate about Computer Networks, cybersecurity, 
                    and problem solving. I love exploring new technologies, building real projects, and continuously 
                    improving my skills across multiple fields.
                </p>
                <div className="btn">
                    <a href="#">Download Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Home