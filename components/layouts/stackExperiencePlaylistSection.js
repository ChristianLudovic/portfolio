import Experience from "../basis/experience";
import MyStack from "../basis/myStack";
import Playlist from "../basis/playlist";

export default function StackExperiencePlaylistSection() {
  return (
    <>
        <div className="px-6 pt-[80px] pb-[68px]">
            
              <div className="flex justify-between items-start max-w-[1180px] mx-auto max-xl:max-w-[900px] max-xl:flex-col gap-6">
                <div className="flex flex-col gap-6 max-xl:flex-row max-xl:justify-between max-xl:w-[900px] max-xl:gap-0 max-lg:flex-col max-lg:gap-6">
                  <Experience />
                  <MyStack />
                </div>
                <Playlist />
            
            </div>
        </div>
    </>
  );
}