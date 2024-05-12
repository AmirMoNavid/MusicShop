import { Outlet, useNavigate, useParams } from "react-router-dom";
import { tracks } from "../data/tracks";
import FadeBackgroundImage from "../Components/common/FadeBackgroundImage";

function TrackPage() {
  function GetTrackFromUrl() {
    const { id } = useParams();
    const trackToPlay = tracks.find((t) => t.id === id);
    return trackToPlay;
  }
  const music = GetTrackFromUrl();
  const navigate = useNavigate();
  //
  function handlePlay(e) {
    e.preventDefault();
    navigate("play");
  }

  return (
    <div className="relative flex h-full w-full flex-col pb-9">
      <FadeBackgroundImage imageUrl={music?.imageUrl} />

      <div className=" z-10 flex w-full flex-col h-[93vh] gap-4 py-2 lg:p-9 dark:text-white text-white pb-9">
        <div className="flex w-full flex-col items-center justify-start gap-6 lg:flex-row lg:items-end tImg">
          <img
            className="h-52 w-52 lg:h-64 lg:w-64 fadeShow1"
            src={music?.imageUrl}
            alt=""
          />
          <div className="order-1 flex flex-col items-center gap-3 lg:order-none lg:items-start fadeShow2">
            <p className="text-3xl font-bold lg:text-5xl">{music?.musicName}</p>
            <p className="lg:text-2xl">{music?.singer}</p>
            <p className="">156.6k plays / 683 likes </p>
          </div>
        </div>
        <div className="flex w-full items-center justify-around gap-14  lg:justify-start lg:gap-9 fadeShow4">
          <button
            className="order-none text-6xl lg:order-1"
            onClick={handlePlay}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z"></path>
            </svg>
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default TrackPage;
