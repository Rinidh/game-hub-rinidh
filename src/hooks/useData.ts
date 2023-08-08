// this is a generic hook for use in hooks fetching games, genres etc

import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { AxiosRequestConfig, CanceledError } from 'axios';

interface FetchDataResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => { //the requestConfig param (set to optional) will hold the config obj we usually use to send extra info to the server
  //once we pass an optional param in the func declaration above, all ff params should also be optional ie having ? in end

  const [data, setData] = useState<T[]>([]); //telling the ts compiler that the data stored in the games state var is an array[] of objs of type T
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true); //before fetching data

    apiClient
      .get<FetchDataResponse<T>>(endpoint, { //this T will receive type from the T at useData on line 12 and pass it to the interface on line 7
        signal: controller.signal,
        ...requestConfig //spreading / copying the props and values from the requestConfig obj to here ie the params prop and its value (an obj) is copied here
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
  }, deps ? [...deps] : []); //if deps has values, then pass those deps as dependencies to the effect hook, or else pass no dependencies ie  empty []

  return {data, error, isLoading}
}

export default useData