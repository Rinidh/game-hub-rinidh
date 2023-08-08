import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
//if using {} brackets:
// const usePlatforms = () => {
//   const { data, error, isLoading } = useData<Platform>(
//     "/platforms/lists/parents"
//   );
//   return { platforms: data, error, isLoading };
// };

export default usePlatforms;
