import './Skills.css'

const SkillsCard = ({ icon: Icon, title, skills, description }) => {
    return(
        <article className="skills-card">
            <div className="skill-icon">
                <Icon className="icon" />
            </div>
            <div className="skills-details">
                <h3>{title}</h3>
                <p>{skills}</p>
                <p>{description}</p>
            </div>
        </article>
    )
}

export default SkillsCard