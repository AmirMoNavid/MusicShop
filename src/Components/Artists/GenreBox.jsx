import ArtistBox from "./ArtistBox";
import { artists } from "../../data/artists";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useMediaPredicate } from "react-media-hook";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import { EffectCoverflow, Pagination, Navigation } from "swiper/react";
function GenreBox({ title, type }) {
  const isMobile = useMediaPredicate("(max-width: 1024px)");
  // return (
  //   <div className="flex  w-full flex-col items-start gap-2">
  //     <p className="text-lg italic dark:opacity-70 lg:text-2xl dark:text-white">
  //       • {title}
  //     </p>
  //     <div className="w-full">
  //       <Swiper className="flex w-[70%] h-[140px] mx-auto flex-col flex-wrap justify-between gap-4 lg:lg:cursor-pointer overflow-x-auto">
  //         {artists.map((artist) => {
  //           if (artist.genre === type) {
  //             return (
  //               <SwiperSlide key={artist.id}>
  //                 <ArtistBox
  //                   followers={artist.followers}
  //                   name={artist.name}
  //                   imageUrl={artist.imageUrl}
  //                 />
  //               </SwiperSlide>
  //             );
  //           }
  //         })}
  //       </Swiper>
  //     </div>
  //   </div>
  // );
  return (
    <div className="flex  w-full flex-col items-start gap-1 mb-7 mt-2">
      <p className="text-lg italic opacity-70 lg:text-2xl text-white p-3">
        • {title}
      </p>
      <Swiper
        className="w-full"
        spaceBetween={isMobile ? 15 : 30}
        slidesPerView={isMobile ? 3 : 9}
      >
        <div className="flex w-full h-[140px] justify-between gap-4 lg:lg:cursor-pointer">
          {artists.map((artist) => {
            if (artist.genre === type) {
              return (
                <SwiperSlide key={artist.id}>
                  <ArtistBox
                    followers={artist.followers}
                    name={artist.name}
                    imageUrl={artist.imageUrl}
                  />
                </SwiperSlide>
              );
            }
          })}
        </div>
      </Swiper>
    </div>
  );
}

export default GenreBox;
