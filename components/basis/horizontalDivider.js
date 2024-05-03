export default function HorizontalDivider(){
    return(
        <>
            <div className="px-6">
                <div className="h-[1.5px] bg-stone-200 w-full max-w-[1180px] mx-auto relative max-xl:max-w-[900px]">
                    <div className="absolute h-[1.5px] bg-gradient-to-r from-sky-500 to-indigo-100 w-[128px] top-0 left-[208px]"></div>
                </div>
            </div>
        </>
    )
}