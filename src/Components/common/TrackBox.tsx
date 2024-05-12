import { TRACK_PAGE } from "@/pathes";

import React from "react";

import { Link, useNavigate } from "react-router-dom";

function TrackBox({ music }) {
  const Music = music;
  const navigate = useNavigate();
  function handleNav(e) {
    e.preventDefault();
    navigate(`/Play/${Music.id}`);
  }
  const name = Music.musicName;
  return (
    <Link
      to={`${Music.id}`}
      onClick={handleNav}
      className={`group/trackBox relative flex w-24  flex-col items-start justify-between gap-2 text-sm dark:text-white lg:w-auto lg:lg:cursor-pointer lg:text-base text-white`}
    >
      <img
        className={`h-full w-full rounded-lg hover:brightness-50`}
        src={Music.imageUrl}
        alt=""
      />
      <p className="">{name.length <= 10 ? name : name.slice(0, 9) + "... "}</p>
      <p className="dark:opacity-60">
        {Music.singer.length <= 10
          ? Music.singer
          : Music.singer.slice(0, 9) + "... "}
      </p>
    </Link>
  );
}
export default TrackBox;
