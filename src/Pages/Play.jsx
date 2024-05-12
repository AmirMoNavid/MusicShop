import { useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Player from "../Components/Player";
import SideBar from "../Components/TrackPage/SideBar";
import { tracks } from "../data/tracks";
import { useState } from "react";
import TrackBox from "../Components/common/TrackBox";
import { SwiperSlide, Swiper } from "swiper/react";
import FadeBackgroundImage from "../Components/common/FadeBackgroundImage";
function PlayerPage() {
  const [key, setKey] = useState(null);
  const moreMusics = tracks.slice(0, 15);
  function GetTrackFromUrl() {
    const { id } = useParams();

    const trackToPlay = tracks.find((t) => t.id === id);
    return trackToPlay;
  }
  const music = GetTrackFromUrl();
  return (
    <div className="overflow-hidden">
      <FadeBackgroundImage imageUrl={music.imageUrl} />
      <div className="h-[90vh] overflow-auto pt-4 pb-9">
        <SideBar />
        <Player music={music} />
        <div className=" w-full mt-14 p-4 more">
          <Swiper
            className="h-auto w-full rounded-xl"
            spaceBetween={10}
            slidesPerView={2.2}
          >
            <div className="flex w-full justify-between gap-1">
              {moreMusics.map((track) => {
                return (
                  <SwiperSlide key={track.musicName}>
                    <TrackBox music={track} />
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
      </div>
      <NavBar />
    </div>
  );
}

export default PlayerPage;
