import Image from 'next/image'
import Badge from '../basis/badge'
import subscribe from '@/public/pojects_images/subscribe.svg'
import linkify from '@/public/pojects_images/linkify.svg'
import to_do from '@/public/pojects_images/to_do.svg'  
import portfolio from '@/public/pojects_images/portfolio.svg' 


export default function ProjectSection(){

    const redirectLinkify = () => {
        window.open('https://linkiify.netlify.app', '_blank')
    }

    const redirectPortfolio = () => {   
        window.open('http://christfaciledev.me', '_blank')
    }

    

    return(
        <>
            <div className='px-4 pb-[80px]'>
                <div className='max-w-[1180px] mx-auto flex flex-col gap-8 max-xl:max-w-[900px] max-lg:max-w-[700px]'>
                    <div className="flex flex-col gap-2">
                        <h1 className='text-2xl font-bold'>Mes projets</h1>
                        <p>Ici, je présente quelques projets que {'j\'ai'} réalisés ou auxquels {'j\'ai'} participé</p>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <div className='flex justify-between max-xl:gap-4 max-lg:flex-col'>
                            <div className='flex items-start gap-6 border border-solid border-stone-200 rounded-xl w-max pt-[24px] pr-[46px] pb-[21px] pl-[24px] max-xl:pr-[24px] max-lg:w-full max-md:p-[12px] cursor-pointer' >
                                <Image src={subscribe} alt='subscribe image'  
                                    className='border border-solid border-stone-200 rounded-lg max-sm:w-[140px] max-sm:h-[160px] max-sm:object-cover'
                                />
                                <div className='flex flex-col gap-6'>
                                    <div className='flex flex-col gap-3'>
                                        
                                        <div className='flex items-center gap-2 rounded-full border border-solid border-stone-200 px-2 py-1 w-max' style={{backgroundColor: "#F6F6F7"}}>
                                            <div className='w-2 h-2 rounded-full' style={{backgroundColor: '#EAB308'}}></div>
                                            <span className='text-xs font-semibold'>Saas</span>
                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <p className='text-sm '>React, Tailwindcss, Lavarel</p>
                                            <h2 className='font-bold text-base'>SubScribe</h2>
                                        </div>
                                    </div>
                                    <p className='max-w-[241.25px] text-sm'>Conception et développement d'une plateforme avec des amis ou les utilisateurs peuvent gerer facilement leurs abonnements (netflix, spotify...).</p>
                                    
                                </div>
                                <div className='flex items-center justify-center max-lg:hidden'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M16.6667 3.33333H17.5C17.5 3.11232 17.4122 2.90036 17.2559 2.74408C17.0996 2.5878 16.8877 2.5 16.6667 2.5V3.33333ZM15.8333 13.3333C15.8333 13.5543 15.9211 13.7663 16.0774 13.9226C16.2337 14.0789 16.4456 14.1667 16.6667 14.1667C16.8877 14.1667 17.0996 14.0789 17.2559 13.9226C17.4122 13.7663 17.5 13.5543 17.5 13.3333H15.8333ZM6.66665 2.5C6.44564 2.5 6.23368 2.5878 6.0774 2.74408C5.92112 2.90036 5.83332 3.11232 5.83332 3.33333C5.83332 3.55435 5.92112 3.76631 6.0774 3.92259C6.23368 4.07887 6.44564 4.16667 6.66665 4.16667V2.5ZM2.74415 16.0775C2.66456 16.1544 2.60108 16.2463 2.5574 16.348C2.51373 16.4497 2.49074 16.559 2.48978 16.6697C2.48882 16.7803 2.5099 16.89 2.5518 16.9925C2.5937 17.0949 2.65558 17.1879 2.73382 17.2662C2.81207 17.3444 2.90511 17.4063 3.00752 17.4482C3.10994 17.4901 3.21967 17.5112 3.33032 17.5102C3.44097 17.5092 3.55032 17.4863 3.65199 17.4426C3.75366 17.3989 3.84561 17.3354 3.92249 17.2558L2.74415 16.0775ZM15.8333 3.33333V13.3333H17.5V3.33333H15.8333ZM16.6667 2.5H6.66665V4.16667H16.6667V2.5ZM16.0775 2.74417L2.74415 16.0775L3.92249 17.2558L17.2558 3.9225L16.0775 2.74417Z" fill="#D4D4D8"/>
                                    </svg>
                                </div>
                            </div>
                            <div className='flex items-start gap-6 border border-solid border-stone-200 rounded-xl w-max pt-[24px] pr-[46px] pb-[21px] pl-[24px] max-xl:pr-[24px] max-lg:w-full max-md:p-[12px] cursor-pointer' onClick={redirectLinkify}>
                                <Image src={linkify} alt='linkify image'  
                                    className='border border-solid border-stone-200 rounded-lg max-sm:w-[140px] max-sm:h-[160px] max-sm:object-cover'
                                />
                                <div className='flex flex-col gap-6'>
                                    <div className='flex flex-col gap-3'>
                                        
                                        <div className='flex items-center gap-2 rounded-full border border-solid border-stone-200 px-2 py-1 w-max' style={{backgroundColor: "#F6F6F7"}}>
                                            <div className='w-2 h-2 rounded-full' style={{backgroundColor: '#EAB308'}}></div>
                                            <span className='text-xs font-semibold'>Open Source</span>
                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <p className='text-sm '>Next.js, Tailwindcss, Shadcn</p>
                                            <h2 className='font-bold text-base'>linkify</h2>
                                        </div>
                                    </div>
                                    <p className='max-w-[241.25px] text-sm'> Conception et developpement {'d\'un'} site qui me permet de partager les liens de streaming du sport (football, nba) a mes potes.
                                    </p>
                                    
                                </div>
                                <div className='flex items-center justify-center max-lg:hidden'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M16.6667 3.33333H17.5C17.5 3.11232 17.4122 2.90036 17.2559 2.74408C17.0996 2.5878 16.8877 2.5 16.6667 2.5V3.33333ZM15.8333 13.3333C15.8333 13.5543 15.9211 13.7663 16.0774 13.9226C16.2337 14.0789 16.4456 14.1667 16.6667 14.1667C16.8877 14.1667 17.0996 14.0789 17.2559 13.9226C17.4122 13.7663 17.5 13.5543 17.5 13.3333H15.8333ZM6.66665 2.5C6.44564 2.5 6.23368 2.5878 6.0774 2.74408C5.92112 2.90036 5.83332 3.11232 5.83332 3.33333C5.83332 3.55435 5.92112 3.76631 6.0774 3.92259C6.23368 4.07887 6.44564 4.16667 6.66665 4.16667V2.5ZM2.74415 16.0775C2.66456 16.1544 2.60108 16.2463 2.5574 16.348C2.51373 16.4497 2.49074 16.559 2.48978 16.6697C2.48882 16.7803 2.5099 16.89 2.5518 16.9925C2.5937 17.0949 2.65558 17.1879 2.73382 17.2662C2.81207 17.3444 2.90511 17.4063 3.00752 17.4482C3.10994 17.4901 3.21967 17.5112 3.33032 17.5102C3.44097 17.5092 3.55032 17.4863 3.65199 17.4426C3.75366 17.3989 3.84561 17.3354 3.92249 17.2558L2.74415 16.0775ZM15.8333 3.33333V13.3333H17.5V3.33333H15.8333ZM16.6667 2.5H6.66665V4.16667H16.6667V2.5ZM16.0775 2.74417L2.74415 16.0775L3.92249 17.2558L17.2558 3.9225L16.0775 2.74417Z" fill="#D4D4D8"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between max-xl:gap-4 max-lg:flex-col'>
                            <div className='flex items-start gap-6 border border-solid border-stone-200 rounded-xl w-max pt-[24px] pr-[46px] pb-[21px] pl-[24px] max-xl:pr-[24px] max-lg:w-full max-md:p-[12px]' style={{backgroundColor: '#18181B'}}>
                                <Image src={to_do} alt='subscribe image'  
                                    className='border border-solid border-stone-200 rounded-lg max-sm:w-[140px] max-sm:h-[160px] max-sm:object-cover'
                                />
                                <div className='flex flex-col gap-6'>
                                    <div className='flex flex-col gap-3'>
                                        
                                        <div className='flex items-center gap-2 rounded-full border border-solid px-2 py-1 w-max' style={{backgroundColor: "#262629", borderColor: '#3F3F43'}}>
                                            <div className='w-2 h-2 rounded-full' style={{backgroundColor: '#EAB308'}}></div>
                                            <span className='text-xs font-semibold text-white'>Open Source</span>
                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <p className='text-sm ' style={{color: '#A1A1AA'}}>Next.js</p>
                                            <h2 className='font-semibold text-base text-white'>to-do</h2>
                                        </div>
                                    </div>
                                    <p className='max-w-[241.25px] text-sm' style={{color: '#D4D4D8'}}>Outil de gestion de tâches simple et efficace pour les personnes qui veulent organiser leur journée.</p>
                                
                                    
                                </div>
                                <div className='flex items-center justify-center max-lg:hidden'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M16.6667 3.33333H17.5C17.5 3.11232 17.4122 2.90036 17.2559 2.74408C17.0996 2.5878 16.8877 2.5 16.6667 2.5V3.33333ZM15.8333 13.3333C15.8333 13.5543 15.9211 13.7663 16.0774 13.9226C16.2337 14.0789 16.4456 14.1667 16.6667 14.1667C16.8877 14.1667 17.0996 14.0789 17.2559 13.9226C17.4122 13.7663 17.5 13.5543 17.5 13.3333H15.8333ZM6.66665 2.5C6.44564 2.5 6.23368 2.5878 6.0774 2.74408C5.92112 2.90036 5.83332 3.11232 5.83332 3.33333C5.83332 3.55435 5.92112 3.76631 6.0774 3.92259C6.23368 4.07887 6.44564 4.16667 6.66665 4.16667V2.5ZM2.74415 16.0775C2.66456 16.1544 2.60108 16.2463 2.5574 16.348C2.51373 16.4497 2.49074 16.559 2.48978 16.6697C2.48882 16.7803 2.5099 16.89 2.5518 16.9925C2.5937 17.0949 2.65558 17.1879 2.73382 17.2662C2.81207 17.3444 2.90511 17.4063 3.00752 17.4482C3.10994 17.4901 3.21967 17.5112 3.33032 17.5102C3.44097 17.5092 3.55032 17.4863 3.65199 17.4426C3.75366 17.3989 3.84561 17.3354 3.92249 17.2558L2.74415 16.0775ZM15.8333 3.33333V13.3333H17.5V3.33333H15.8333ZM16.6667 2.5H6.66665V4.16667H16.6667V2.5ZM16.0775 2.74417L2.74415 16.0775L3.92249 17.2558L17.2558 3.9225L16.0775 2.74417Z" fill="#D4D4D8"/>
                                    </svg>
                                </div>
                            </div>
                            <div className='flex items-start gap-6 border border-solid border-stone-200 rounded-xl w-max pt-[24px] pr-[46px] pb-[21px] pl-[24px] max-xl:pr-[24px] max-lg:w-full max-md:p-[12px] cursor-pointer' onClick={redirectPortfolio} style={{backgroundColor: '#18181B'}}>
                                <Image src={portfolio} alt='portfolio image'  
                                    className='border border-solid border-stone-200 rounded-lg max-sm:w-[140px] max-sm:h-[160px] max-sm:object-cover'
                                />
                                <div className='flex flex-col gap-6'>
                                    <div className='flex flex-col gap-3'>
                                        
                                        <div className='flex items-center gap-2 rounded-full border border-solid border-stone-200 px-2 py-1 w-max' style={{backgroundColor: "#262629", borderColor: '#3F3F43'}}>
                                            <div className='w-2 h-2 rounded-full' style={{backgroundColor: '#EAB308'}}></div>
                                            <span className='text-xs font-semibold text-white'>Open Source</span>
                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <p className='text-sm ' style={{color: '#A1A1AA'}}>Next.js, Tailwindcss</p>
                                            <h2 className='font-semibold text-base text-white'>Mon Portfolio</h2>
                                        </div>
                                    </div>
                                    <p className='max-w-[241.25px] text-sm' style={{color: '#D4D4D8'}}>Conception et integration de mon portfolio personnel. Il me permet de presenter mes projets et mes experiences.</p>
                                    
                                    
                                </div>
                                <div className='flex items-center justify-center max-lg:hidden'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M16.6667 3.33333H17.5C17.5 3.11232 17.4122 2.90036 17.2559 2.74408C17.0996 2.5878 16.8877 2.5 16.6667 2.5V3.33333ZM15.8333 13.3333C15.8333 13.5543 15.9211 13.7663 16.0774 13.9226C16.2337 14.0789 16.4456 14.1667 16.6667 14.1667C16.8877 14.1667 17.0996 14.0789 17.2559 13.9226C17.4122 13.7663 17.5 13.5543 17.5 13.3333H15.8333ZM6.66665 2.5C6.44564 2.5 6.23368 2.5878 6.0774 2.74408C5.92112 2.90036 5.83332 3.11232 5.83332 3.33333C5.83332 3.55435 5.92112 3.76631 6.0774 3.92259C6.23368 4.07887 6.44564 4.16667 6.66665 4.16667V2.5ZM2.74415 16.0775C2.66456 16.1544 2.60108 16.2463 2.5574 16.348C2.51373 16.4497 2.49074 16.559 2.48978 16.6697C2.48882 16.7803 2.5099 16.89 2.5518 16.9925C2.5937 17.0949 2.65558 17.1879 2.73382 17.2662C2.81207 17.3444 2.90511 17.4063 3.00752 17.4482C3.10994 17.4901 3.21967 17.5112 3.33032 17.5102C3.44097 17.5092 3.55032 17.4863 3.65199 17.4426C3.75366 17.3989 3.84561 17.3354 3.92249 17.2558L2.74415 16.0775ZM15.8333 3.33333V13.3333H17.5V3.33333H15.8333ZM16.6667 2.5H6.66665V4.16667H16.6667V2.5ZM16.0775 2.74417L2.74415 16.0775L3.92249 17.2558L17.2558 3.9225L16.0775 2.74417Z" fill="#D4D4D8"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}