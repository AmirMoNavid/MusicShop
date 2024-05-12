import NavBar from "../Components/NavBar";
import GenreBox from "../Components/Artists/GenreBox";
import { artists } from "../data/artists";

function Artists() {
  return (
    <div className="overflow-hidden h-screen">
      <div className="h-[100%] overflow-auto pb-24">
        <GenreBox type="pop" title="Pop" />
        <GenreBox type="rap" title="Persian Rap" />
        <GenreBox type="nostalgic" title="nostalgic" />
        <GenreBox type="sonnati" title="Sonnati" />
        <GenreBox type="newPop" title="NewPop" />
      </div>
      <NavBar />
    </div>
  );
}

export default Artists;
