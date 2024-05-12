import { useParams } from "react-router-dom";
import { data as playLists } from "../data/playLists";
import FadeBackgroundImage from "../Components/common/FadeBackgroundImage";
import TrackLine from "../Components/common/TrackLine";
import NavBar from "../Components/NavBar";
function PlayListPage() {
  const { title } = useParams();
  if (title == "YourPlayList") return;
  function GetListFromUrl() {
    const List = playLists.find((l) => l.title === title);
    return List;
  }
  const list = GetListFromUrl();
  const { tracks } = list;
  return (
    <div className="relative h-screen overflow-hidden pt-6 pb-9">
      <FadeBackgroundImage imageUrl={list.imageUrl} />
      <div className="z-10 relative mx-auto w-[50%] flex ">
        <img src={list.imageUrl} className="w-[20%] h-[10%] playListImg" />
        <div className="flex items-center gap-3  pl-[10px] pt-16 flex-col text-white detail">
          <h1 className="font-extrabold text-2xl">{list.title}</h1>
          <p className="pr-4 font-semibold text-nowrap">
            {list.followers}k followers
          </p>
        </div>
      </div>
      <p className="z-10 relative text-center w-[48%] pt-5 pb-1 font-semibold text-white ">
        songs...
      </p>
      <div className="z-10 flex flex-col gap-2 w-[60%] line relative mx-auto overflow-y-auto h-[55%]">
        {tracks.map((t) => (
          <TrackLine music={t} key={t.imageUrl} />
        ))}
      </div>

      <NavBar />
    </div>
  );
}

export default PlayListPage;
