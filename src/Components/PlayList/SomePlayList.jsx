import { Link } from "react-router-dom";

function SomePlayList({ playList }) {
  const { title, imageUrl, followers } = playList;
  const { to } = playList;
  return (
    <Link
      className="flex  flex-col items-center justify-between gap-2 text-sm text-white "
      to={to ? to : `/PlayList/${title}`}
    >
      <img
        className="h-[90%] w-[85%] rounded-full hover:opacity-70"
        src={imageUrl}
        alt=""
      />

      <p className="text-sm">
        {title.length <= 10 ? title : title.slice(0, 11) + "... "}
      </p>

      <p className="text-xs ">{followers}k followers</p>
      {/* <img
        src={imageUrl}
        className="w-[85%] h-[45%] p-[12px] rounded-[23px] hover:brightness-50 duration-100 "
      />
      <h1 className="font-bold">{title}</h1>
      <p className="italic text-sm  opacity-80">fallowers:{followers}k</p> */}
    </Link>
  );
}

export default SomePlayList;
