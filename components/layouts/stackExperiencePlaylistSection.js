import Experience from "../basis/experience";
import MyStack from "../basis/myStack";
import Playlist from "../basis/playlist";

export default function StackExperiencePlaylistSection() {
  return (
    <>
        <div className="px-4 pt-[80px] pb-[68px] max-sm:pb-[120px]">
            
            <div className="flex justify-between items-start max-w-[1080px] mx-auto max-xl:max-w-[900px] max-xl:flex-col gap-6 max-lg:max-w-[700px] max-md:max-w-full">
              <div className="flex flex-col gap-6 max-xl:flex-row max-xl:justify-between max-xl:w-[900px] max-xl:gap-4 max-lg:flex-col max-lg:gap-6 max-lg:max-w-[700px] max-md:max-w-full">
                <Experience />
                <MyStack />
              </div>
              <Playlist />
            </div>
        </div>
    </>
  );
}