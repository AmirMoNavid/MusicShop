import NavBar from "../Components/NavBar";
import FadeBackgroundImage from "../Components/common/FadeBackgroundImage";
import TrackLine from "../Components/common/TrackLine";

function FavList() {
  const favoriteMusics = localStorage.getItem(`favorite`) || null;

  const fmusics = JSON.parse(favoriteMusics);

  const fovorite = {
    title: "YourPlayList",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT07Fa7NTUsu44X1QIytX6KVFv1qA5ecAHja855xT4TglW6PKPEc61CFoTS2EJYJWNZ6T4&usqp=CAU",

    followers: "1",
    tracks: fmusics,
  };

  return (
    <div className="relative h-screen overflow-hidden pt-6 pb-9 ">
      <FadeBackgroundImage imageUrl={fovorite.imageUrl} />
      <div className="z-10 relative mx-auto w-[50%] flex ">
        <img src={fovorite.imageUrl} className="w-[20%] h-[10%] playListImg" />
        <div className="flex items-center gap-3  pl-[10px] pt-16 flex-col text-white pDetail">
          <h1 className="font-extrabold text-2xl favtitle">{fovorite.title}</h1>
          <p className="pr-4 font-semibold">{fovorite.followers} follower</p>
        </div>
      </div>
      {fmusics.length > 0 ? (
        <>
          {" "}
          <p className="z-10 relative text-center w-[48%] pt-5 pb-1 font-semibold text-white ">
            songs...
          </p>
          <div className="z-10 flex flex-col gap-2 w-[60%] relative mx-auto overflow-y-auto h-[55%] line">
            {fmusics.map((t) => (
              <TrackLine music={t} key={t.imageUrl} />
            ))}
          </div>
        </>
      ) : (
        <p className="z-10 flex left-[35%] absolute text-white p-5 rounded-md mt-24 bg-slate-700 font-semibold">
          You don't have any fovorite music in list.
        </p>
      )}

      <NavBar />
    </div>
  );
}

export default FavList;
