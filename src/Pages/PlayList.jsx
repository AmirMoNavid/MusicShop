import { Swiper, SwiperSlide } from "swiper/react";
import NavBar from "../Components/NavBar";
import FavList from "../Components/PlayList/FavList";
import SomePlayList from "../Components/PlayList/SomePlayList";
import { data as playLists } from "../data/playLists";

function PlayList() {
  const favoriteMusics = localStorage.getItem(`favorite`) || "[]";
  // {
  //   JSON.parse(favoriteMusics)?.map((track) => (
  //     <TrackLine music={track} key={track.id} />
  //   ));
  // }
  const fmusics = JSON.parse(favoriteMusics);

  console.log(fmusics);
  const fovorite = {
    title: "YourPlayList",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT07Fa7NTUsu44X1QIytX6KVFv1qA5ecAHja855xT4TglW6PKPEc61CFoTS2EJYJWNZ6T4&usqp=CAU",
    followers: "1",
    tracks: fmusics,
  };

  return (
    <>
      <Swiper
        className="w-[90%] translate-y-44 "
        spaceBetween={30}
        slidesPerView={9}
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
      <NavBar />
    </>
  );
}

export default PlayList;
