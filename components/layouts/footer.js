import localFont from 'next/font/local';

const nohemi = localFont({ src: '../../public/font/Nohemi/Nohemi-Bold.ttf', display: 'swap'});

const handleClick = () => {
    window.open('mailto:talchrist10@gmail.com', '_blank')
}

export default function Footer() {
    return (
        <>
            <div className=" px-4 text-white">
                <div className="mx-auto py-[120px] max-w-[1080px]  max-xl:max-w-[900px] max-lg:max-w-[700px] space-y-6">
                    <h2 className={`text-7xl ${nohemi.className}`}>Let get it in touch</h2>
                    <p className='text-lg max-w-[400px]'>Je serais ravi d'explorer une collaboration, de répondre à vos questions ou simplement de discuter.</p>
                    <button className='text-lg border-2 border-solid border-white rounded-full px-11 py-3' onClick={handleClick}>Hello@chris</button>
                </div>
                
            </div>
        </>
    ) 
}