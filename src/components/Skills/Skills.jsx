import { 
    Braces,
    Terminal,
    PanelsTopLeft,
    Palette,
    Network,
    GitBranch 
} from 'lucide-react'
import './Skills.css'
import SkillsCard from './SkillsCard'

const skillsData = [
    {
        id: 1,
        icon: Braces,
        title: "Programming Languages",
        skills: "C - Java - Python - Shell - Javascript",
        description: "Learning programming and problem solving."
    },

    {
        id: 2,
        icon: Terminal,
        title: "Linux",
        skills: "Linux - Ubuntu - Terminal",
        description: "Practicing commands and System usage."
    },

    {
        id: 3,
        icon: PanelsTopLeft,
        title: "Web Dev",
        skills: "HTML - CSS - JS - React - Django",
        description: "Building & styling websites."
    },

    {
        id: 4,
        icon: GitBranch,
        title: "Version Control",
        skills: "Git - GitHub",
        description: "Learning version control, tracking code changes, and managing repositories on GitHub."
    },
    
    {
        id: 5,
        icon: Network,
        title: "Networking & Hardware",
        skills: "Cisco PT - Computer Hardware.",
        description: "Exploring network devices and computer components."
    },
    
    {
        id: 6,
        icon: Palette,
        title: "Graphic Design",
        skills: "Adobe Photoshope - Canva - GIMP",
        description: "Exploring image editing and visual design."
    }
]

const Skills = () => {
    return(
        <section className="skills page">
            <div className="container">
                <div className="skills-content">
                    <h1 className="page-title">Skills</h1>
                    <div className="cards-row">
                        {skillsData.map((skill) => (
                            <SkillsCard 
                                key = {skill.id}
                                icon = {skill.icon}
                                title = {skill.title}
                                skills = {skill.skills}
                                description = {skill.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills