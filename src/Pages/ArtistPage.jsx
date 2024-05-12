import NavBar from "../Components/NavBar";
import FadeBackgroundImage from "../Components/common/FadeBackgroundImage";
import TrackLine from "../Components/common/TrackLine";
import { artists } from "../data/artists";
import { tracks } from "../data/tracks";
import { useParams } from "react-router-dom";

// {tracks.map((track) => {

function ArtistPage() {
  const { artist } = useParams();
  console.log(artist);
  const currentArtist = artists.find((a) => a.name === artist);
  console.log(currentArtist);
  return (
    <div className="relative h-screen overflow-hidden pt-6 pb-8">
      <FadeBackgroundImage imageUrl={currentArtist.imageUrl} />
      <div className="z-10 relative mx-auto w-[50%] flex ">
        <img
          src={currentArtist.imageUrl}
          className="w-[20%] h-[10%] artistImg"
        />
        <div className="flex items-center gap-3  pl-[10px] pt-16 flex-col text-white detail text-nowrap">
          <h1 className="font-extrabold text-2xl">{currentArtist.name}</h1>
          <p className="pr-4 font-semibold">
            {currentArtist.followers}k followers
          </p>
        </div>
      </div>
      <p className="z-10 relative text-center w-[48%] pt-5 pb-1 font-semibold text-white ">
        songs...
      </p>
      <div className="z-10 flex flex-col gap-2 w-[60%] relative mx-auto overflow-y-auto h-[55%] line">
        {tracks.map((track) => {
          if (track.singer === currentArtist?.name) {
            return <TrackLine music={track} />;
          }
        })}
      </div>

      <NavBar />
    </div>
  );
}

export default ArtistPage;
