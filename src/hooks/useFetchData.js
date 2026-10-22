import { useState, useEffect } from 'react';
import { fetchData } from '../helpers/fetchData';

export const useFetchData = ({endpoint}) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    const { data, isLoading } = await fetchData({endpoint});
    setData(data);
    setIsLoading(isLoading);
  }

  useEffect(() => {
    // Asincronismo en useEffect: 1. Promesas
    // fetchData({endpoint})
    // .then(res => {
    //     setData(res.data)
    //     setIsLoading(res.isLoading)
    // });

    // Asincronismo en useEffect: 2. Metodo asincrono
    getData();

  }, [endpoint]);

  return {
    data,
    isLoading,
  };
};
