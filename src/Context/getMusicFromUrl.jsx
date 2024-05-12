// style={{
//     backgroundImage: "url(" + `${imageUrl}` + ")",
//   }}
import { useParams } from "react-router-dom";
import { tracks } from "../data/tracks";

function GetTrackFromUrl() {
  const { id } = useParams();
  const trackToPlay = tracks.find((t) => t.id === id);
  console.log(trackToPlay);
  return trackToPlay;
}

export default GetTrackFromUrl;
