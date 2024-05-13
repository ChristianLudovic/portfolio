import Image from 'next/image'
import btkAkademi from '../../public/logos/btk.svg'

export default function CertificationsSection(){
    return (
        <>
            <div className="px-4 py-16">
                <div className="flex flex-col items-start max-w-[1180px] mx-auto gap-6 max-xl:max-w-[900px] max-lg:max-w-[700px]">
                    <div className='flex flex-col gap-4 items-start w-full'>
                        <div className="flex items-center justify-center">
                            <h2 className='text-2xl font-bold'>Mes certifications</h2>   
                        </div>
                        <div className=' w-full flex gap-7 items-start max-sm:flex-col max-sm:gap-6'>
                            <div className=" max-w-[382px] border-2 w-full border-stone-200 border-solid rounded-[6px] bg-[#FAFAFA] px-3 py-[10px] ">
                                <div className='flex items-center w-full justify-between w-full'>
                                    <div className='flex gap-[10px] items-center'>
                                        <Image src={btkAkademi} alt = "btk akademi" className=''/>
                                        <p>Apllied Figma</p>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <svg class="svg" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.8332 2H11.3748C11.3748 1.86739 11.3178 1.74021 11.2162 1.64645C11.1146 1.55268 10.9768 1.5 10.8332 1.5V2ZM10.2915 8C10.2915 8.13261 10.3486 8.25979 10.4501 8.35355C10.5517 8.44732 10.6895 8.5 10.8332 8.5C10.9768 8.5 11.1146 8.44732 11.2162 8.35355C11.3178 8.25979 11.3748 8.13261 11.3748 8H10.2915ZM4.33315 1.5C4.18949 1.5 4.05172 1.55268 3.95014 1.64645C3.84856 1.74021 3.79149 1.86739 3.79149 2C3.79149 2.13261 3.84856 2.25979 3.95014 2.35355C4.05172 2.44732 4.18949 2.5 4.33315 2.5V1.5ZM1.78353 9.6465C1.73179 9.69262 1.69053 9.7478 1.66214 9.8088C1.63375 9.8698 1.61881 9.93541 1.61818 10.0018C1.61756 10.0682 1.63126 10.134 1.6585 10.1955C1.68574 10.2569 1.72596 10.3128 1.77681 10.3597C1.82767 10.4066 1.88815 10.4438 1.95472 10.4689C2.02129 10.4941 2.09262 10.5067 2.16454 10.5061C2.23646 10.5055 2.30754 10.4918 2.37362 10.4656C2.43971 10.4393 2.49948 10.4013 2.54945 10.3535L1.78353 9.6465ZM10.2915 2V8H11.3748V2H10.2915ZM10.8332 1.5H4.33315V2.5H10.8332V1.5ZM10.4502 1.6465L1.78353 9.6465L2.54945 10.3535L11.2161 2.3535L10.4502 1.6465Z" fill="#D4D4D8" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className=" max-w-[382px] border w-full border-stone-200 border-solid rounded-[6px] bg-[#FAFAFA] px-3 py-[10px] ">
                                <div className='flex items-center w-full justify-between w-full'>
                                    <div className='flex gap-[10px] items-center'>
                                        <Image src={btkAkademi} alt = "btk akademi" className=''/>
                                        <p>Apllied Figma</p>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <svg class="svg" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.8332 2H11.3748C11.3748 1.86739 11.3178 1.74021 11.2162 1.64645C11.1146 1.55268 10.9768 1.5 10.8332 1.5V2ZM10.2915 8C10.2915 8.13261 10.3486 8.25979 10.4501 8.35355C10.5517 8.44732 10.6895 8.5 10.8332 8.5C10.9768 8.5 11.1146 8.44732 11.2162 8.35355C11.3178 8.25979 11.3748 8.13261 11.3748 8H10.2915ZM4.33315 1.5C4.18949 1.5 4.05172 1.55268 3.95014 1.64645C3.84856 1.74021 3.79149 1.86739 3.79149 2C3.79149 2.13261 3.84856 2.25979 3.95014 2.35355C4.05172 2.44732 4.18949 2.5 4.33315 2.5V1.5ZM1.78353 9.6465C1.73179 9.69262 1.69053 9.7478 1.66214 9.8088C1.63375 9.8698 1.61881 9.93541 1.61818 10.0018C1.61756 10.0682 1.63126 10.134 1.6585 10.1955C1.68574 10.2569 1.72596 10.3128 1.77681 10.3597C1.82767 10.4066 1.88815 10.4438 1.95472 10.4689C2.02129 10.4941 2.09262 10.5067 2.16454 10.5061C2.23646 10.5055 2.30754 10.4918 2.37362 10.4656C2.43971 10.4393 2.49948 10.4013 2.54945 10.3535L1.78353 9.6465ZM10.2915 2V8H11.3748V2H10.2915ZM10.8332 1.5H4.33315V2.5H10.8332V1.5ZM10.4502 1.6465L1.78353 9.6465L2.54945 10.3535L11.2161 2.3535L10.4502 1.6465Z" fill="#D4D4D8" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}