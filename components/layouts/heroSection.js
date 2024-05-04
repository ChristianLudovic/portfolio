import NavBar from "../basis/navBar";

export default function HeroSection(){

    const twitterRedirect = () => {
        window.open('https://twitter.com/Ludovic_Tal', '_blank');
    }
    return (
        <>
            <div className="px-4 pt-[66px] pb-[78px] max-sm:pt-[50px] max-sm:pb-[60px] ">
                <div className="flex flex-col items-start max-w-[1180px] mx-auto gap-8 max-xl:max-w-[900px] max-lg:max-w-[700px]">
                    <h1 className="text-5xl font-bold leading-[130%] max-w-[752px] max-sm:text-4xl">Développeur Frontend junior et Etudiant en L2 Genie Logiciel.</h1>
                    <p className="max-w-[611px]">Hello, je suis Christian Ludovic, Plus connus sous le pseudo de 
                        <span className="font-medium cursor-pointer" style={{color: "#8349FF"}} onClick={twitterRedirect}> @ChrisFacile_Dev</span>, 
                        etudiant en software engineering a {'l\’universite'} de Gümüşhane en Turquie.
                        <br/><br/> Je suis disponible en freelance ou en part-time job en remote ou sur site a trabzon et environs.
                        <br/><br/>Je parles couramment Francais 🇫🇷, {'j\'ai'} un niveau b2 en Anglais 🇺🇸, un certificat b1 en Allemand 🇩🇪 et un certificat C1 en Turc 🇹🇷
                    </p>
                </div>
            </div>
        </>
    )
}