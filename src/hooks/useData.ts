// this is a generic hook for use in hooks fetching games, genres etc

import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface FetchDataResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => { //when we use this generic hook we will supply an endpoint eg /games, /genres etc
  const [data, setData] = useState<T[]>([]); //telling the ts compiler that the data stored in the games state var is an array[] of objs of type T
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true); //before fetching data

    apiClient
      .get<FetchDataResponse<T>>(endpoint, { //this T will receive type from the T at useData on line 12 and pass it to the interface on line 7
        signal: controller.signal
      }) 
      .then((res) => {
        setData(res.data.results)
        setLoading(false)
      }) //.results is also an array, hence updating the games state var of array objs with an array is valid
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)
        setLoading(false) //we can use the finally block for setting isLoading to false after the request has succeeded or falied, but it doesn't work in strict mode for some reason
      });

      return () => controller.abort()
  }, []); //never forget this bracket

  return {data, error, isLoading}
}

export default useData