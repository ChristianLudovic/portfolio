import Image from 'next/image'
import educationIcon from '@/public/education.svg'
import Link from 'next/link'

export default function EductionSection(){
    return (
        <>
            <div className="px-6 py-16">
                <div className="flex flex-col items-start max-w-[1180px] mx-auto gap-6 max-xl:max-w-[900px]">
                    <div className='flex flex-col gap-4 items-start'>
                        <div className="flex items-center justify-center">
                            <Image src={educationIcon} alt="education icon"/>
                        </div>
                        <div className='flex gap-7'>
                            <p className='max-w-[382px]'>I got a {'Master\’s'} in Interaction Design from the
                            <span className='font-semibold'> IDC School of Design</span> at IIT Bombay.
                            </p>
                            <p className='max-w-[382px]'>I got a {'Master\’s'} in Interaction Design from the
                            <span className='font-semibold'>IDC School of Design</span> at IIT Bombay.
                            </p>
                        </div>
                    </div>
                    
                    <p>More details are in <Link legacyBehavior href='/'><a className='no-underline' style={{color: "#8349FF"}}> my resume</a></Link>.</p>
                </div>
            </div>
        </>
    )
}