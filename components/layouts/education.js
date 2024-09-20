import Image from 'next/image'
import educationIcon from '@/public/education.svg'
import Link from 'next/link'
import localFont from 'next/font/local';

const nohemi = localFont({ src: '../../public/font/Nohemi/Nohemi-Bold.ttf', display: 'swap'});

export default function EductionSection(){

    const redirectBadjoun = () => {
        window.open('https://www.univ-dschang.org/iutfv-bandjoun/', '_blank')
    }

    return (
        <>
            <div className="px-4 py-16">
                <div className="flex flex-col items-start max-w-[1080px] mx-auto gap-6 max-xl:max-w-[900px] max-lg:max-w-[700px]">
                    <div className='flex flex-col space-y-11 max-sm:space-y-6 items-start'>
                        <div className="flex items-center justify-center">
                            <h2 
                                className={`text-2xl font-bold tracking-[1px] ${nohemi.className}`}
                            
                            >Mon parcours scolaire</h2>   
                        </div>
                        <div className='space-y-8'>
                            <div className='flex items-start space-x-12 max-sm:space-x-8'>
                                <p className='text-[14px] text-stone-500'>2023 - Present</p>
                                <div className='space-y-2'>
                                    <h3 className='text-md font-semibold'>Universite technologique de Gümüşhane, Turquie</h3>
                                    <p className='text-[15px]'>Je suis actuellement en deuxième année d'ingénierie en génie logiciel.</p>
                                </div>
                            </div>
                            <div className='flex items-start space-x-[56px]'>
                                <p className='text-[14px] text-stone-500'>2022 - 2023</p>
                                <div className='space-y-2'>
                                    <h3 className='text-md font-semibold'>Cours de langue Allemande, Cameroun</h3>
                                    <p className='text-[15px] max-w-[700px]'>Juste après l'obtention de mon DUT à l'IUT, je me suis inscrit dans un centre de cours de langue allemande. Actuellement, j'ai un niveau B2 et un certificat B1 en allemand.</p>
                                </div>
                            </div>
                            <div className='flex items-start space-x-16 max-sm:space-x-14'>
                                <p className='text-[14px] text-stone-500'>2019 - 2021</p>
                                <div className='space-y-2'>
                                    <h3 className='text-md font-semibold'>Institut Universitaire Fotso Victor, Cameroun</h3>
                                    <p className='text-[15px] max-w-[700px]'>J'y ai suivi un parcours de 2 ans en Génie Électrique, option Automatique et Informatique Industrielle, et j'y ai obtenu mon DUT (Diplôme Universitaire de Technologie).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}