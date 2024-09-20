import Image from 'next/image'
import Badge from '../basis/badge'

import localFont from 'next/font/local';
import ProjectCard from '../basis/projectCard'

const nohemi = localFont({ src: '../../public/font/Nohemi/Nohemi-Bold.ttf', display: 'swap'});


export default function ProjectSection(){

    const redirectLinkify = () => {
        window.open('https://linkiify.netlify.app', '_blank')
    }

    const redirectPortfolio = () => {   
        window.open('http://christfaciledev.me', '_blank')
    }

    const redirectConvertMe = () => {
        window.open('https://github.com/ChristianLudovic/Convert-Me-Web-app', '_blank')
    }

    const projects = [
        {
            imagePath: "/projects_images/scheddo-Thumbnail.png",
            type: 'Side-project',
            tags: 'Laravel, Livewire, Alpine.js, Tailwindcss',
            name: 'Scheddo',
            description: "Développement de l'application web Sheddo, qui permet aux utilisateurs de réserver des services (coiffure, barbier, manucure, pédicure, etc.) dans des boutiques spécialisées.",
            redirect: 'https://github.com/ChristianLudovic/scheddo'
            
        },
        
    ]

    return(
        <>
            <div className='px-4 pb-[80px]'>
                <div className='max-w-[1080px] mx-auto flex flex-col space-y-11 max-xl:max-w-[900px] max-lg:max-w-[700px]'>
                    <h1 className={`text-2xl font-bold tracking-[1px] font-meduim ${nohemi.className}`}>Mes projets</h1>
                    <div className='flex flex-col gap-8 max-lg:w-full'>
                        <div className='flex justify-between max-xl:gap-4 max-lg:flex-col max-lg-w-full max-lg:space-y-11'>
                            {projects.map((project, index) => (
                                <ProjectCard key={index} data={project}/>
                            ))}
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}