import './Projects.css'

const ProjectsCard = ({ img: Img, title, description, techUsed }) => {
    return(
        <article className="project-card">
            <div className="project-img">
                {/* <Img /> */}
            </div>
            <div className="project-details card-details">
                <h3>{title}</h3>
                <p>{description}</p>
                <p>Tech used: {techUsed}</p>
            </div>
        </article>
    )
}

export default ProjectsCard