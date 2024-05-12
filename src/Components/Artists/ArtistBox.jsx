import { Link, useParams } from "react-router-dom";

function ArtistBox({ followers, imageUrl, name }) {
  return (
    <Link
      to={`/Artists/${name}`}
      className="flex  flex-col items-center justify-between gap-2 text-sm text-white  lg:text-base"
    >
      <img
        className="h-[90%] w-[85%] rounded-full hover:opacity-70"
        src={imageUrl}
        alt=""
      />

      <p className="text-sm">
        {name.length <= 10 ? name : name.slice(0, 9) + "... "}
      </p>

      <p className="text-xs dark:opacity-60">{followers}k followers</p>
    </Link>
  );
}

export default ArtistBox;
