import { useQuery } from "react-query";
import useApiClient from "./useApiClient";

const useFetch = (url: string, query: Record<string, any>) => {
  const apiClient = useApiClient();
  let queryString = "";
  Object.keys(query).forEach((key, idx) => {
    if (query[key]) {
      if (idx === 0) {
        queryString += `${key}=${query[key]}`;
      } else {
        queryString += `&${key}=${query[key]}`;
      }
    }
  });

  let newUrl = url;

  if (queryString) {
    newUrl = `${url}?${queryString}`;
  }

  const { data, error, isLoading, isFetching } = useQuery(
    [url, query],
    async () => await apiClient.get(newUrl),
    { keepPreviousData: true }
  );

  return { data, error, isLoading, isFetching };
};

export default useFetch;
