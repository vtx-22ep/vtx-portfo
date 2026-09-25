import './Home.css'
import myImg from '../../assets/images/Profile Pic/pic2.jpg'

function Home(){
    return(
        <div className="row">
            <div className="col1">
                <h4>Hello, I am</h4>
                <h1>Vignesh Thilagaraj</h1>
                <p>
                    B.E CSE Student | On a Journey to Master Cybersecurity & Computer Networks | Linux Learner | Junior Web Developer
                </p>
                <p>
                    Computer Science and Engineering student passionate about Computer Networks, cybersecurity, 
                    and problem solving. I love exploring new technologies, building real projects, and continuously 
                    improving my skills across multiple fields.
                </p>
                {/* <div className="btn">
                    <a href="#">Download Resume</a>
                </div> */}
            </div>
            <div className="col2">
                <img src={myImg} alt="Vignesh Thilagaraj" />
            </div>
        </div>
    )
}

export default Home