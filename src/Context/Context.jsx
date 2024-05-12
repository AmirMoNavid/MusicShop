import { createContext, useState } from "react";
import { tracks } from "../data/tracks";
import { useParams } from "react-router-dom";
import GetTrackFromUrl from "./getMusicFromUrl";

const Mcontext = createContext();

function Context({ children }) {
  return <Mcontext.Provider value={{}}>{children}</Mcontext.Provider>;
}

export { Context, Mcontext };
