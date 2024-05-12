import { Link } from "react-router-dom";

function FavList({ playList }) {
  const { title, imageUrl, followers } = playList;
  return (
    <Link
      className="flex  flex-col items-center justify-between gap-2 text-sm text-white "
      to={`/favList`}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT07Fa7NTUsu44X1QIytX6KVFv1qA5ecAHja855xT4TglW6PKPEc61CFoTS2EJYJWNZ6T4&usqp=CAU"
        className=" w-[93%] rounded-full hover:opacity-70 h-[100px] bg-center bg-contain"
      />
      <p className="text-sm">
        {title.length <= 10 ? title : title.slice(0, 11) + "... "}
      </p>

      <p className="text-xs opacity-60">{followers}k followers</p>
    </Link>
  );
}

export default FavList;
