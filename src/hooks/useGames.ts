import useData from "./useData";

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

const useGames = ()=>{
  const {data, error, isLoading} = useData<Game>('/games') //using the generic hook
  return {games: data, error, isLoading} //passing 'games' as 'data'
}

export default useGames
