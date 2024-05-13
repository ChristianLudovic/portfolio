import Image from 'next/image'
import educationIcon from '@/public/education.svg'
import Link from 'next/link'

export default function EductionSection(){

    const redirectBadjoun = () => {
        window.open('https://www.univ-dschang.org/iutfv-bandjoun/', '_blank')
    }

    return (
        <>
            <div className="px-4 py-16">
                <div className="flex flex-col items-start max-w-[1180px] mx-auto gap-6 max-xl:max-w-[900px] max-lg:max-w-[700px]">
                    <div className='flex flex-col gap-4 items-start'>
                        <div className="flex items-center justify-center">
                            <h2 className='text-2xl font-bold'>Mon parcours scolaire</h2>   
                        </div>
                        <div className='flex gap-7 max-sm:flex-col max-sm:gap-6'>
                            <p className='max-w-[382px]'>Je suis actuellement un pacours de 4 ans en ecole {'d\'ingenieur'} en genie logiciel a {'l\''}
                            <span className='font-semibold'> Universite Technologique de Gumushane</span>.
                            </p>
                            <p className='max-w-[382px]'>{'J\'ai'} obtenu un Diplome universitaire de Technologie (DUT) en Automatisme et Informatique Industrielle a {'l\''}
                            <span className='font-semibold' onClick={redirectBadjoun}> IUT Fotso Victor</span> a Bandjoun (Cameroun).
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}