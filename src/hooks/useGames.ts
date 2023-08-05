import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}
  
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
  });

  return {games, error}
}

export default useGames