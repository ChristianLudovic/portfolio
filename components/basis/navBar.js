import Image from "next/image"
import avatar from "../../public/profilPic.png"
import LanguageSelector from "./languageSelector"

export default function NavBar (){

    const linkdinRedirect = () => {
        window.open('https://www.linkedin.com/in/christian-ludovic-90381a230/', '_blank')
    }

    const githubRedirect = () => {
        window.open('https://github.com/ChristianLudovic', '_blank')
    }

    const blogRedirect = () => {
        window.open('https://chrisfaciledev.me', '_blank')
    }

    return(
        <>
            <div className="px-4 pt-11 max-sm:pt-6">
                <div className="flex justify-between items-center max-w-[1080px] mx-auto max-xl:max-w-[900px] max-lg:max-w-[700px]">
                    <div 
                        className="flex items-center justify-center rounded-full border-2 w-[44px] h-[44px] border-solid"
                        style={{
                            borderColor: "#EEEEEE",
                        }}
                    >
                        <Image src={avatar} alt="my avatar" className="size-9 rounded-full object-cover"/>
                    </div>
                    <div className="flex items-center space-x-16 max-sm:space-x-3">
                        <div className="bg-white px-6 py-2 flex items-center space-x-6 shadow-md border border-solid border-stone-200 rounded-full text-sm font-medium">
                            <button>About me</button>
                            <button onClick={blogRedirect}>Blog</button>
                            <button>Projects</button>
                        </div>
                        <div className="flex items-flex gap-6">
                            <div className="flex items-center justify-center max-sm:hidden" onClick={linkdinRedirect}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M5.00379 6.99992H4.97563C4.66901 7.01841 4.36187 6.97349 4.07339 6.86796C3.78491 6.76242 3.52128 6.59855 3.29897 6.38657C3.07666 6.17458 2.90044 5.91904 2.78132 5.6359C2.6622 5.35276 2.60273 5.04811 2.60663 4.74095C2.61053 4.4338 2.67771 4.13075 2.80398 3.85072C2.93025 3.5707 3.1129 3.31972 3.34052 3.11344C3.56814 2.90717 3.83584 2.75004 4.12691 2.65187C4.41798 2.5537 4.72616 2.51658 5.03221 2.54286C5.33978 2.52058 5.64863 2.56218 5.93934 2.66504C6.23006 2.7679 6.49635 2.92979 6.72147 3.14054C6.94659 3.35129 7.12567 3.60634 7.24746 3.88964C7.36924 4.17295 7.4311 4.47839 7.42913 4.78676C7.42717 5.09513 7.36142 5.39975 7.23603 5.68148C7.11064 5.96322 6.92832 6.21596 6.70053 6.42382C6.47274 6.63168 6.20441 6.79017 5.91241 6.88931C5.62041 6.98845 5.31105 7.02611 5.00379 6.99992Z" fill="#27272A"/>
                                    <path d="M7.01758 10H3.01758V22H7.01758V10Z" fill="#27272A"/>
                                    <path d="M17.5176 10C16.8436 10.0018 16.1787 10.156 15.5726 10.451C14.9665 10.746 14.4349 11.1741 14.0176 11.7034V10H10.0176V22H14.0176V16.5C14.0176 15.9696 14.2283 15.4609 14.6034 15.0858C14.9785 14.7107 15.4872 14.5 16.0176 14.5C16.5481 14.5 17.0568 14.7107 17.4318 15.0858C17.8069 15.4609 18.0176 15.9696 18.0176 16.5V22H22.0176V14.5C22.0176 13.9091 21.9012 13.3239 21.6751 12.7779C21.4489 12.232 21.1175 11.7359 20.6996 11.318C20.2817 10.9002 19.7857 10.5687 19.2397 10.3425C18.6937 10.1164 18.1086 10 17.5176 10Z" fill="#27272A"/>
                                </svg>
                            </div>
                            <div className="flex items-center justify-center max-sm:hidden" onClick={githubRedirect}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017C0 14.442 2.865 18.197 6.839 19.521C7.339 19.613 7.521 19.304 7.521 19.038C7.521 18.801 7.513 18.17 7.508 17.335C4.726 17.94 4.139 15.992 4.139 15.992C3.685 14.834 3.029 14.526 3.029 14.526C2.121 13.906 3.098 13.918 3.098 13.918C4.101 13.988 4.629 14.95 4.629 14.95C5.521 16.48 6.97 16.038 7.539 15.782C7.631 15.135 7.889 14.694 8.175 14.444C5.955 14.191 3.62 13.331 3.62 9.493C3.62 8.4 4.01 7.505 4.649 6.805C4.546 6.552 4.203 5.533 4.747 4.155C4.747 4.155 5.587 3.885 7.497 5.181C8.31277 4.95851 9.15444 4.84519 10 4.844C10.85 4.848 11.705 4.959 12.504 5.181C14.413 3.885 15.251 4.154 15.251 4.154C15.797 5.533 15.453 6.552 15.351 6.805C15.991 7.505 16.379 8.4 16.379 9.493C16.379 13.341 14.04 14.188 11.813 14.436C12.172 14.745 12.491 15.356 12.491 16.291C12.491 17.629 12.479 18.71 12.479 19.038C12.479 19.306 12.659 19.618 13.167 19.52C15.1583 18.8521 16.8893 17.5753 18.1155 15.87C19.3416 14.1648 20.0009 12.1173 20 10.017C20 4.484 15.522 0 10 0Z" fill="#27272A"/>
                                </svg>
                            </div>
                            <div className=" relative flex items-center justify-center p-[6px] shadow-md rounded-full border border-solid border-stone-300">
                                <LanguageSelector />
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div> 
        </>
    )
}