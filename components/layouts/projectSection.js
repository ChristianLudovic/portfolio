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
            imagePath: "/projects_images/subscribeThumbnail.png",
            type: 'Side-project',
            tags: 'Laravel, React, Tailwindcss',
            name: 'Subscribe',
            description: "Conception et participation à l'intégration de l'application web Subscribe, qui permet aux utilisateurs de gérer facilement leurs abonnements (Netflix, Spotify, Deezer, etc.).",
            url: 'https://subscribe-ui.vercel.app'
            
        },
        {
            imagePath: "/projects_images/scheddo-Thumbnail.png",
            type: 'Fun-project',
            tags: 'Laravel, Livewire, Alpine.js, Tailwindcss',
            name: 'Scheddo',
            description: "Développement de l'application web Sheddo, qui permet aux utilisateurs de réserver des services (coiffure, barbier, manucure, pédicure, etc.) dans des boutiques spécialisées.",
            url: 'https://github.com/ChristianLudovic/scheddo'
            
        },
        {
            imagePath: "/projects_images/portfolioThumbnail.png",
            type: 'Portfolio',
            tags: 'Nextjs, Tailwindcss',
            name: 'My portfolio',
            description: "Conception et integration de mon portfolio personnel, qui présente mes compétences, mes projets et mes expériences professionnelles.",
            url: 'https://chrisfaciledev.netlify.app'
        },
        {
            imagePath: "/projects_images/growThumbnail.png",
            type: 'fun-project',
            tags: 'Livewire, Alpine js, Laravel, Tailwindcss',
            name: 'Growk',
            description: "Développement de l'application web Growk, qui sert todo-list et permet aux utilisateurs de mieux organiser leur quotidien.",
            url: 'https://github.com/ChristianLudovic/todo-list-in-laravel-and-livewire'
        }
        
    ]

    return(
        <>
            <div className='px-4 pb-[80px]'>
                <div className='max-w-[1080px] mx-auto flex flex-col space-y-11 max-xl:max-w-[900px] max-lg:max-w-[700px]'>
                    <h1 className={`text-2xl font-bold tracking-[1px] font-meduim ${nohemi.className}`}>Mes projets</h1>
                    <div className='flex flex-col gap-8 max-lg:w-full'>
                        <div className='flex gap-[30px] flex-wrap max-xl:gap-4 max-lg:flex-col max-lg-w-full max-lg:space-y-11' >
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