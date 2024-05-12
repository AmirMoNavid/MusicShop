import { tracks } from "../../data/tracks";
import TrackLine from "../common/TrackLine";

function SideBar() {
  const sideBar = tracks.slice(0, 15);

  return (
    <div className="absolute right-5 flex sideBar flex-col gap-1  p-3 py-0 mt-4  w-[60%] h-[75%] overflow-y-scroll cursor-pointer   ">
      {sideBar.map((music) => (
        <TrackLine music={music} key={music.imageUrl} />
      ))}
    </div>
  );
}

export default SideBar;
