import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './Projects.css'
import ProjectsCard from './ProjectsCard'
import gptuThum from '../../assets/images/Projects Img/GPTU-Thumbnail.png'
import test from '../../assets/images/Projects Img/test.png'
import test2 from '../../assets/images/Projects Img/test2.jpg'

const projectData = [
    {
        id: 1,
        image: gptuThum,
        title: "GPT Uthangarai",
        description: "A Static website that describes about the Govt. Polytechnic College, Uthangarai.",
        techUsed: "HTML - CSS - JS - PHP"
    },

    {
        id: 2,
        image: test,
        title: "GPT Uthangarai",
        description: "A Static website that describes about the Govt. Polytechnic College, Uthangarai.",
        techUsed: "HTML - CSS - JS - PHP"
    },

    {
        id: 3,
        image: test2,
        title: "GPT Uthangarai",
        description: "A Static website that describes about the Govt. Polytechnic College, Uthangarai.",
        techUsed: "HTML - CSS - JS - PHP"
    },

    {
        id: 4,
        image: test,
        title: "GPT Uthangarai",
        description: "A Static website that describes about the Govt. Polytechnic College, Uthangarai.",
        techUsed: "HTML - CSS - JS - PHP"
    }
]

const Projects = () => {
    const trackRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    function getMaxIndex() {
        const track = trackRef.current

        if (!track || !track.children.length) {
            return 0
        }

        const firstCard = track.children[0]
        const cardWidth = firstCard.getBoundingClientRect().width
        const gap = parseFloat(getComputedStyle(track).columnGap) || 0

        const visibleCount = Math.max(
            1,
            Math.floor((track.clientWidth + gap) / (cardWidth + gap))
        )

        return Math.max(0, projectsData.length - visibleCount)
    }

    function moveCards(direction) {
        const track = trackRef.current

        if (!track) return

        const maxIndex = getMaxIndex()
        const nextIndex = Math.max(
            0,
            Math.min(currentIndex + direction, maxIndex)
        )

        const nextCard = track.children[nextIndex]

        if (nextCard) {
            track.scrollTo({
                left: nextCard.offsetLeft,
                behavior: 'smooth'
            })

            setCurrentIndex(nextIndex)
        }
    }

    function handleScroll() {
        const track = trackRef.current

        if (!track || !track.children.length) return

        const scrollPosition = track.scrollLeft

        let nearestIndex = 0
        let nearestDistance = Infinity

        Array.from(track.children).forEach((card, index) => {
            const distance = Math.abs(card.offsetLeft - scrollPosition)

            if (distance < nearestDistance) {
                nearestDistance = distance
                nearestIndex = index
            }
        })

        setCurrentIndex(Math.min(nearestIndex, getMaxIndex()))
    }

    return(
        <section className="projects page">
            <div className="container">
                <div className="project-content">
                    <h1 className="page-title">Projects</h1>
                    <div className="projects-controls">
                        <button
                            type="button"
                            onClick={() => moveCards(-1)}
                            disabled={currentIndex === 0}
                            aria-label="Previous projects"
                        >
                            <ChevronLeft />
                        </button>

                        <button
                            type="button"
                            onClick={() => moveCards(1)}
                            disabled={currentIndex >= getMaxIndex()}
                            aria-label="Next projects"
                        >
                            <ChevronRight />
                        </button>
                    </div>

                    <div className="cards-row ref={trackRef} onScroll={handleScroll}">
                        {projectData.map((projects) => (
                            <ProjectsCard 
                                img = {projects.image}
                                title = {projects.title}
                                description = {projects.description}
                                techUsed = {projects.techUsed}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects