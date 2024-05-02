import Experience from "../basis/experience";
import MyStack from "../basis/myStack";
import Playlist from "../basis/playlist";

export default function StackExperiencePlaylistSection() {
  return (
    <>
        <div className="px-6">
            
              <div className="flex justify-between items-start max-w-[1180px] mx-auto">
                <div className="flex flex-col gap-6">
                  <Experience />
                  <MyStack />
                </div>
                <Playlist />
            
            </div>
        </div>
    </>
  );
}