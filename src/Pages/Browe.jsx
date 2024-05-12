import { useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import InfiniteScroll from "react-infinite-scroll-component";
import { tracks } from "../data/tracks";
import { useEffect, useState } from "react";
import TracksLoading from "../Components/common/TrackLoading";
import TrackLine from "../Components/common/TrackLine";
import { useMediaPredicate } from "react-media-hook";
function Browe() {
  const { id } = useParams();
  console.log(id);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [query, setQuery] = useState("");
  const [foundTracks, setFoundTracks] = useState();
  const isMobile = useMediaPredicate("(max-width: 1024px)");

  useEffect(() => {
    setItems(tracks.slice(0, 15));
  }, [tracks]);

  const fetchMoreData = () => {
    if (items.length >= tracks.length) {
      setHasMore(false);
    } else {
      setTimeout(() => {
        setItems([...items, ...tracks.slice(items.length, items.length + 10)]);
      }, 1000);
    }
  };
  function handleSearch(e) {
    setQuery(e);
    const foundTracks = tracks.filter((track) =>
      track.musicName.toLowerCase().includes(e)
    );

    setFoundTracks(foundTracks);
  }

  return (
    <div className="overflow-hidden h-screen">
      <div className="overflow-hidden h-[100%] pb-24">
        <div className=" flex w-full infinite flex-col items-start justify-start gap-5 p-4  pb-1 pt-2">
          <input
            className="fixed left-0 w-[20%]   top-2 z-30 h-7 flex   mx-auto mt-2 items-center justify-center rounded-md searchBox p-2 text-md text-slate-100 lg:relative lg:justify-start    "
            placeholder="Search Your Song ..."
            onChange={(e) => handleSearch(e.target.value.toLowerCase())}
          />

          <div className="w-full">
            <InfiniteScroll
              className="hideScrollbar flex flex-col gap-4 fadeShow"
              dataLength={items.length}
              next={fetchMoreData}
              loader={<TracksLoading />}
              hasMore={hasMore}
              height={isMobile ? 490 : 470}
            >
              {foundTracks
                ? foundTracks.map((track) => {
                    return <TrackLine music={track} key={track.imageUrl} />;
                  })
                : items.map((track) => {
                    return <TrackLine music={track} key={track.imageUrl} />;
                  })}
            </InfiniteScroll>
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
}

export default Browe;
