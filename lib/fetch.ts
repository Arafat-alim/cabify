import { useCallback, useEffect, useState } from "react";

//! This helper function will help us to call POST method
export const fetchApi = async (url: string, options?: RequestInit) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      return new Error(`HTTP Error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error: any) {
    console.log("Error occured while using fetch method: ", err);
    throw error;
  }
};

//! This helper function will help us to call GET method

export const useFetch = <T>(url: string, options: RequestInit) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setLoading(false);
    setError(null);
    try {
      const result = await useFetch(url, options);
      setData(result.data);
    } catch (err) {
      setLoading(false);
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading, refetch: fetchData };
};
