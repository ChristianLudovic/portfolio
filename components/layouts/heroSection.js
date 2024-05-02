import NavBar from "../basis/navBar";

export default function HeroSection(){
    return (
        <>
            <div className="px-6 pt-[66px] pb-[78px]">
                <div className="flex flex-col items-start max-w-[1180px] mx-auto gap-8">
                    <h1 className="text-5xl font-bold leading-[130%] max-w-[752px]">Développeur Frontend junior et Etudiant en L2 Genie Logiciel.</h1>
                    <p className="max-w-[611px]">Hello, je suis Christian Ludovic, Plus connus sous le pseudo de Tal, etudiant en software engineering a {'l\’universite'} de Gümüşhane en Turquie.</p>
                </div>
            </div>
        </>
    )
}