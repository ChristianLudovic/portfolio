
import Image from 'next/image'
import ResponsiveImage from './responsiveImage'


export default function ProjectCard({data}){
    return(
        <div className='max-w-[340px] max-lg:max-w-full '>
            <ResponsiveImage
                src={data.imagePath}
                alt={data.name || "Project image"}
                baseWidth={1200}
                baseHeight={630}
                className="w-full h-[210px] max-lg:h-[350px] max-sm:h-[290px] rounded-xl mb-[18px] border border-solid border-stone-200 object-cover"
            />
            <div className='flex items-center gap-2 rounded-full border border-solid border-[#3F3F43] px-2 py-1 w-max bg-[#262629] mb-[10px]'>
                <div className='w-2 h-2 rounded-full bg-[#EAB308]'></div>
                <span className='text-xs text-white'>{data.type}</span>
            </div>
            <p className="mb-[10px] text-sm text-gray-500">{data.tags}</p>
            <div className="space-y-3">
                <h2 className='font-semibold'>{data.name}</h2>
                <p className='text-[14px]'>{data.description}</p>
            </div>
        </div>
    )
}