import { Braces, Terminal, PanelsTopLeft, Palette, Network } from 'lucide-react'
import './Skills.css'
import SkillsCard from './SkillsCard'

const Skills = () => {
    return(
        <section className="skills">
            <div className="container">
                <div className="skills-content">
                    <h1>Skills</h1>
                    <div className="skill-row">
                        <SkillsCard 
                            icon = { Braces }
                            title = "Programming Languages"
                            skills = "C - Java - Python - Shell - Javascript"
                            description = "Learning programming and problem solving."
                        />
                        <SkillsCard 
                            icon = { Terminal }
                            title = "Linux"
                            skills = "Linux - Ubuntu - Terminal"
                            description = "Practicing commands and System usage."
                        />
                        <SkillsCard 
                            icon = { PanelsTopLeft }
                            title = "Web Dev"
                            skills = "HTML - CSS - JS - React - Django"
                            description = "Building & styling websites."
                        />
                        <SkillsCard 
                            icon = { Network }
                            title = "Networking & Hardware"
                            skills = "Cisco PT - Computer Hardware."
                            description = "Exploring network devices and computer components."
                        />
                        <SkillsCard 
                            icon = { Palette }
                            title = "Graphic Design"
                            skills = "Adobe Photoshope - Canva - GIMP"
                            description = "Exploring image editing and visual design."
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills