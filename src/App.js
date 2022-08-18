import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      setEpisodes([]);
      let list = [];
      let data;
      let nextUrl = 'https://rickandmortyapi.com/api/episode';
      do {
        const response = await fetch(nextUrl);
        data = await response.json();
        list.push(...data.results);
        nextUrl = data.info.next;
      } while (nextUrl);

      setEpisodes(list);
      console.log(list.length);
    };

    fetchEpisodes();
  }, []);

  return (
    <>
      <h1>App</h1>
    </>
  );
}

export default App;
