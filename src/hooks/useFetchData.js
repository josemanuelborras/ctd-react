import { useState, useEffect } from 'react';

export const useFetchData = ({endpoint}) => {
  const baseUrl = `https://jsonplaceholder.typicode.com/${endpoint}`;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      const res = await fetch(baseUrl);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error(error);
    } finally {
        setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return {
    data,
    isLoading,
  };
};
