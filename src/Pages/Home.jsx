import NavBar from "../Components/NavBar";
import GenreBox from "../Components/Artists/GenreBox";
import { data as playLists } from "../data/playLists";
import SomePlayList from "../Components/PlayList/SomePlayList";
import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";
import FavList from "../Components/PlayList/FavList";
import { useMediaPredicate } from "react-media-hook";
function Home() {
  const isMobile = useMediaPredicate("(max-width: 1024px)");
  const favoriteMusics = localStorage.getItem(`favorite`) || "[]";
  // {
  //   JSON.parse(favoriteMusics)?.map((track) => (
  //     <TrackLine music={track} key={track.id} />
  //   ));
  // }
  const fmusics = JSON.parse(favoriteMusics);

  const fovorite = {
    title: "YourPlayList",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT07Fa7NTUsu44X1QIytX6KVFv1qA5ecAHja855xT4TglW6PKPEc61CFoTS2EJYJWNZ6T4&usqp=CAU",
    followers: "1",
    tracks: fmusics,
    to: "/favList",
  };
  return (
    <div className="overflow-hidden h-screen">
      <div className="overflow-auto h-[100%] homeDiv pb-[125px]">
        <GenreBox type={"pop"} title="Some pop Artists" />
        <GenreBox type="nostalgic" title="Some nostalgia Artists" />
        <div className=""></div>

        <p className="text-lg italic opacity-70 lg:text-2xl text-white p-3">
          • PlayLists
        </p>
        <Swiper
          className="w-full"
          spaceBetween={isMobile ? 15 : 30}
          slidesPerView={!isMobile ? 9 : 3}
        >
          <div className="flex w-full h-[140px] justify-between gap-4 lg:lg:cursor-pointer text-white">
            {fovorite.tracks.length > 0 ? (
              <SwiperSlide>
                <FavList playList={fovorite} />
              </SwiperSlide>
            ) : (
              ""
            )}

            {playLists.map((list) => (
              <SwiperSlide>
                <SomePlayList playList={list} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      <NavBar />
    </div>
  );
}

export default Home;
