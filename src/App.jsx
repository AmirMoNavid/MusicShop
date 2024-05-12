import "./index.css";
import PlayerPage from "./Pages/Play";
import { Context, Mcontext } from "./Context/Context";
import Home from "./Pages/Home";
import Browe from "./Pages/Browe";
import Artists from "./Pages/Artists";
import PlayList from "./Pages/PlayList";
import TrackPage from "./Pages/TrackPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PlayListPage from "./Pages/PlayListPage";
import FavList from "./Pages/FavPage";
import Artist from "./Components/common/Artist";
import ArtistPage from "./Pages/ArtistPage";

// const track = GetTrackFromUrl();
// console.log(track);

const router = createBrowserRouter([
  {
    path: "*",
    element: <Home />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Browe",
    element: <Browe />,
  },
  {
    path: "/Artists",
    element: <Artists />,
  },
  {
    path: "/Artists/:artist",
    element: <ArtistPage />,
  },
  {
    path: "/PlayList",
    element: <PlayList />,
  },
  {
    path: "/PlayList/:title",
    element: <PlayListPage />,
  },
  {
    path: "/Play",
    element: <PlayerPage />,
  },
  {
    path: "/Play/:id",
    element: <TrackPage />,
  },
  {
    path: "/Play/:id/play",
    element: <PlayerPage />,
  },
  {
    path: "favList",
    element: <FavList />,
  },
]);
// {
//   path: "/play/:id",
//   element: <TrackPage />,
//   children: [
//     {
//       path: "test",
//       element: <Artists />,
//     },
//   ],
// },
function App() {
  return (
    <Context>
      <RouterProvider router={router}>
        <div></div>
      </RouterProvider>
    </Context>
  );
}

export default App;
