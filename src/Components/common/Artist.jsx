function Artist({ artistImg, artist }) {
  return (
    <div className="flex flex-col overflow-x-auto w-[80%] mx-auto gap-2 bg-slate-200">
      <img src={artistImg} className="rounded-full w-[50%]" />
      <h3 className="w-[50%]">{artist}</h3>
    </div>
  );
}

export default Artist;
