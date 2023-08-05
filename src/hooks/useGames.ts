import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string; //write the exact name here as in the response obj eg writing background-image rather will cause errors
  parent_platforms: {platform: Platform}[]; //there is "design smell" in the response obj from rawg, where an array of objs - each with one prop holding the parent obj (what is needed) - is responded, instead of returning a direct array of parent objs
}
//{---}[] means array of objs
  
interface FetchGameResponse {
  count: number;
  results: Game[];
}

//also use a hook eg below useGames() hook to handle http functionality instead of defining modules in services folder as seen before 
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]); //telling the ts compiler that the data stored in the games state var is an array[] of objs of type Game
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGameResponse>("/games") //telling the ts compiler the 'type' of response expectes
      .then((res) => setGames(res.data.results)) //.results is also an array, hence updating the games state var of array objs with an array is valid
      .catch((err) => setError(err.message));
  }, []); //never forget this bracket

  return {games, error}
}

export default useGames