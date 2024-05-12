import { document } from "postcss";
import { useEffect, useRef } from "react";
import { useState } from "react";

import { toast } from "react-toastify";

function Player({ music }) {
  //

  // const [artist, setArtitst] = useState('"Reza Bahram"');
  // const [musicImg, setMusicImg] = useState(
  //   "https://music-fa.com/wp-content/uploads/2019/11/Shahin-Banan-975629458264523-Music-fa..com_.jpg"
  // );
  // const [musicUrl, setMusicUrl] = useState(
  //   "https://dls.music-fa.com/tagdl/downloads/Shahin%20Banan%20-%20Deltangi%20(320).mp3"
  // );
  // const [musicName, setMusicName] = useState("Gole Eshgh");

  const { imageUrl, musicName, url, singer } = music;

  const [isPlay, setIsPlay] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [key, setkey] = useState(null);
  const [progress, setProgress] = useState(0);
  const [musicTotalLength, setMusicTotalLength] = useState("03 : 44");
  const [musicCurrentTime, setMusicCurrentTime] = useState("00 : 00");

  const audioRef = useRef(null);

  useEffect(() => {
    const favoriteMusics = localStorage.getItem(`favorite`) || "";
    const isInFavorites = favoriteMusics
      ? JSON.parse(favoriteMusics).find((track) => track.id === music?.id)
      : "";
    setIsLike(isInFavorites ? true : false);
  }, []);
  const addToFavoritesHandler = () => {
    setIsLike(!isLike);
    const favoriteMusics = localStorage.getItem(`favorite`) || "";
    const isInFavorites = favoriteMusics
      ? JSON.parse(favoriteMusics).find((track) => track.id === music?.id)
      : "";

    if (!isInFavorites) {
      localStorage.setItem(
        "favorite",
        JSON.stringify(
          [favoriteMusics && JSON.parse(favoriteMusics), music]
            .flat(1)
            .filter((e) => e !== "")
        )
      );
      toast("Add to favorites playlist 🌟", {
        autoClose: 2000,
        position: "top-center",
        theme: "dark",
      });
      isInFavorites(true);
    } else {
      const deleteFromFavorites = favoriteMusics
        ? JSON.parse(favoriteMusics).filter((track) => track.id !== music?.id)
        : "";
      toast("Delete from favorites playlist 💔", {
        autoClose: 2000,
        position: "top-center",
        theme: "dark",
      });
      localStorage.setItem("favorite", JSON.stringify(deleteFromFavorites));
      isInFavorites(false);
    }
  };

  function handleProgress(e) {
    setProgress(e.target.value);
    audioRef.current.currentTime =
      (e.target.value * audioRef.current.duration) / 100;
  }
  function handlePausePlay() {
    if (isPlay) {
      audioRef.current?.pause();
      setIsPlay(false);
    } else {
      audioRef.current?.play();
      setIsPlay(true);
    }
  }

  function handleTimeUpdates() {
    //Input total length of the audio
    let minutes = Math.floor(audioRef.current.duration / 60);
    let seconds = Math.floor(audioRef.current.duration % 60);
    let musicTotalLength0 = `${minutes < 10 ? `0${minutes}` : minutes} : ${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
    setMusicTotalLength(musicTotalLength0);
    //
    //
    let curMin = Math.floor(audioRef.current.currentTime / 60);
    let curSec = Math.floor(audioRef.current.currentTime % 60);
    let musicCurrentT = `${curMin < 10 ? `0${curMin}` : curMin} : ${
      curSec < 10 ? `0${curSec}` : curSec
    }`;
    setMusicCurrentTime(musicCurrentT);

    const progress = parseInt(
      (audioRef.current.currentTime / audioRef.current.duration) * 100
    );
    setProgress(isNaN(progress) ? 0 : progress);

    if (musicCurrentT == musicTotalLength) {
      setMusicCurrentTime("00 : 00");
      setIsPlay(false);
    }
  }

  return (
    <div className="w-[25%] absolute left-[7%] h-[75%] flex justify-center items-center flex-col  player mt-4">
      <img src={imageUrl} className="h-[250px] rounded-b-md pt-2" />
      <div className="pb-4 w-[56%]">
        <div className="flex flex-col justify-center items-center pt-[6px] musicDetail my-3">
          <h1 className="font-bold text-white italic  ">{musicName}</h1>
          <p className="font-serif italic font-medium text-white">{singer}</p>
        </div>
        <audio src={url} ref={audioRef} onTimeUpdate={handleTimeUpdates} />
        <div>
          <div className="flex justify-between">
            <p className="text-white">{musicCurrentTime}</p>
            <p className="text-white">{musicTotalLength}</p>
          </div>

          <input
            type="range"
            value={progress}
            onChange={handleProgress}
            className="range rounded-lg w-full mb-[14px] outline-nonw-full appearance-none bg-transparent outline-none lg:cursor-pointer [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:h-[8px] [&::-webkit-slider-thumb]:w-[7px] [&::-webkit-slider-thumb]:scale-150 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
          />
          <div className="flex justify-between pt-2">
            <a href={url}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </a>
            <button onClick={handlePausePlay}>
              {!isPlay ? (
                <div className="animate-bounce">
                  <svg
                    stroke="currentColor"
                    fill="white"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    height="1.8em"
                    width="1.8em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z"></path>
                  </svg>
                </div>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  height="1.8em"
                  width="1.8em"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                  />
                </svg>
              )}
            </button>
            <button onClick={addToFavoritesHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={isLike ? "red" : "none"}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="Toastify"></div>
    </div>
  );
}

export default Player;
