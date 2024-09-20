export default function HorizontalDivider(){
    return(
        <>
            <div className="px-4">
                <div className="h-[1.5px] bg-stone-200 w-full max-w-[1080px] mx-auto relative max-xl:max-w-[900px] max-lg:max-w-[700px]">
                    <div className="absolute h-[1.5px] bg-gradient-to-r from-[#3B82F6]-500 to-[#3B82F6]-100 w-[128px] top-0 left-[208px]"></div>
                </div>
            </div>
        </>
    )
}