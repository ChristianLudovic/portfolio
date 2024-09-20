import localFont from 'next/font/local';

const nohemi = localFont({ src: '../../public/font/Nohemi/Nohemi-Bold.ttf', display: 'swap'});



export default function HeroSection(){

    const twitterRedirect = () => {
        window.open('https://twitter.com/Ludovic_Tal', '_blank');
    }

    return (
        <>
            <div className="px-4 pt-[66px] pb-[78px] max-sm:pt-[50px] max-sm:pb-[60px] ">
                <div className="flex flex-col items-start max-w-[1080px] mx-auto space-y-4 max-xl:max-w-[900px] max-lg:max-w-[700px]">
                    <h1 className={`text-7xl font-bold max-w-[752px] ${nohemi.className} max-sm:text-6xl`}>Creer pour l'éternité.</h1>
                    <p className="max-w-[611px] leading-[170%]">Hello, je suis Christian Ludovic, 
                        etudiant en software engineering à {'l\’universite'} technologique de Gümüşhane. Je suis disponible pour des opportunités de stage ou de job à temps partiel en full-remote.
                        
                    </p>
                </div>
            </div>
        </>
    )
}