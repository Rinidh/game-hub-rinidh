import genres from "../data/genres";

export interface Genre { //this interface is not needed here in the useGenre declaration, but it is exported from here to be used elsewhere
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => ({ data: genres, error: null, isLoading: false }) //returning an obj that is alike to the obj returned by the useData hook. This time using static data imported from a module in this app to load the genre list

export default useGenre