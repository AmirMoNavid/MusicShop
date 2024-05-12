import Artist from "../common/Artist";
import { artists } from "../../data/artists";

const suggest = artists.slice(0, 15);
function Suggestion() {
  return (
    <div className="flex justify-between items-center">
      {suggest.map((s) => (
        <Artist artistImg={s.imageUrl} key={s.imageUrl} artist={s.name} />
      ))}
    </div>
  );
}

export default Suggestion;
