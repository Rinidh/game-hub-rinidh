import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Genre {
  id: number;
  name: string;
}

interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGenre = () => {
  const [genre, setGenre] = useState<Genre[]>([]); //telling the ts compiler that the data stored in the games state var is an array[] of objs of type Game
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true); //before fetching data

    apiClient
      .get<FetchGenreResponse>("/games", { //telling the ts compiler the 'type' of response expectes
        signal: controller.signal
      }) 
      .then((res) => {
        setGenre(res.data.results)
        setLoading(false)
      }) //.results is also an array, hence updating the games state var of array objs with an array is valid
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)
        setLoading(false) //we can use the finally block for setting isLoading to false after the request has succeeded or falied, but it doesn't work in strict mode for some reason
      });

      return () => controller.abort()
  }, []); //never forget this bracket

  return {genre, error, isLoading}
}

export default useGenre