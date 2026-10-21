import './Projects.css'
import ProjectsCard from './ProjectsCard'

const Projects = () => {
    return(
        <section className="projects page">
            <div className="container">
                <div className="project-content">
                    <h1 className="page-title">Projects</h1>
                        <div className="cards-row">
                            <ProjectsCard 
                                title = "GPT Uthangarai"
                                description = "A Static website that describes about the Govt. Polytechnic College, Uthangarai."
                                techUsed = "HTML - CSS - JS - PHP"
                            />
                            <ProjectsCard 
                                title = "GPT Uthangarai"
                                description = "A Static website that describes about the Govt. Polytechnic College, Uthangarai."
                                techUsed = "HTML - CSS - JS - PHP"
                            />
                            <ProjectsCard 
                                title = "GPT Uthangarai"
                                description = "A Static website that describes about the Govt. Polytechnic College, Uthangarai."
                                techUsed = "HTML - CSS - JS - PHP"
                            />
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Projects