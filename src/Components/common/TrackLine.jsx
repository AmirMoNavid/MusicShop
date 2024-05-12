import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
function TrackLine({ music }) {
  const Music = music;
  const navigate = useNavigate();
  function handleNav(e) {
    e.preventDefault();
    navigate(`/Play/${Music.id}`);
  }
  return (
    <Link
      key={Music.url}
      className="flex  gap-2 border-black  p-2 w-[100%] rounded-md hover:bg-slate-300 row group "
      onClick={handleNav}
      to={`${Music.id}`}
    >
      <img src={Music.imageUrl} alt="" className="w-10" />
      <div className="hover:text-black">
        <h2 className="text-white font-medium  group-hover:text-black">
          {Music.singer}
        </h2>
        <p className="text-white font-extralight group-hover:text-black group-hover:font-[400]">
          {Music.musicName}
        </p>
      </div>
    </Link>
  );
}

export default TrackLine;
