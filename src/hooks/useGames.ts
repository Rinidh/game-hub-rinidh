import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenre";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string; //write the exact name here as in the response obj eg writing background-image rather will cause errors
  parent_platforms: {platform: Platform}[]; //there is "design smell" in the response obj from rawg, where an array of objs - each with one prop holding the parent obj (what is needed) - is responded, instead of returning a direct array of parent objs
  metacritic: number;
}

const useGames = (gameQuery: GameQuery)=>{
  const {data, error, isLoading} = useData<Game>('/games', {params: {genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id}}, [gameQuery]) //passing the selected genre's and platform's id (if there) as params in the request config obj / query string in the GET request
  //the 3rd arg in calling the data hook above is the array of deps configured to use in the useData declaration's effect hook as deps 

  return {games: data, error, isLoading} //passing 'games' as 'data'
}

export default useGames
