import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

//const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
//if using {} brackets:
// const usePlatforms = () => {
//   const { data, error, isLoading } = useData<Platform>(
//     "/platforms/lists/parents"
//   );
//   return { platforms: data, error, isLoading };
// };

const usePlatforms = () => ({ data: platforms, error: null, isLoading: false }); //coz the list of platforms from the api rarely changes, we can statically pass the data prop here with info from the default import module "platforms" above

export default usePlatforms;
