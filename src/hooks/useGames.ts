import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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
  metacritic: number;
}
  
interface FetchGameResponse {
  count: number;
  results: Game[];
}

//also use a hook eg below useGames() hook to handle http functionality instead of defining modules in services folder as seen before 
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]); //telling the ts compiler that the data stored in the games state var is an array[] of objs of type Game
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true); //before fetching data

    apiClient
      .get<FetchGameResponse>("/games", { //telling the ts compiler the 'type' of response expectes
        signal: controller.signal
      }) 
      .then((res) => {
        setGames(res.data.results)
        setLoading(false)
      }) //.results is also an array, hence updating the games state var of array objs with an array is valid
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)
        setLoading(false) //we can use the finally block for setting isLoading to false after the request has succeeded or falied, but it doesn't work in strict mode for some reason
      });

      return () => controller.abort()
  }, []); //never forget this bracket

  return {games, error, isLoading}
}

export default useGames