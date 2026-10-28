import './Projects.css'

const ProjectsCard = ({ img, title, description, techUsed }) => {
    return(
        <article className="project-card">
            <div className="project-img">
                <img src={ img } alt="#" />
            </div>
            <div className="project-details card-details">
                <h2>{title}</h2>
                <p>{description}</p>
                <p>Tech used: {techUsed}</p>
            </div>
        </article>
    )
}

export default ProjectsCard