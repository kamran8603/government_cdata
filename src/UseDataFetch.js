// useDataFetch.js
import { useState, useEffect } from 'react';

const UseDataFetch = (urls) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all(urls.map(url => fetch(url)));
        const data = await Promise.all(responses.map(res => res.json()));
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [urls]);

  return data;
};

export default UseDataFetch;
