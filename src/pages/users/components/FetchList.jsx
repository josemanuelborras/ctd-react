import { useState, useEffect } from 'react'

const FetchList = ({endpoint}) => {

  const baseUrl = `https://jsonplaceholder.typicode.com/${endpoint}`;
   
    const [items, setItems] = useState([]);
  
    const fetchItems = async () => {
      try {
        const res = await fetch(baseUrl);
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error(error);
      }
  
    };
    useEffect(() => {
      fetchItems();
    }, [endpoint])
  
    return (
      <>
        <ul>
          {items.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
      </>
    );
}

export default FetchList
