import { useState, useContext, useEffect, createContext } from 'react';
import { useCallback } from 'react';

const AppContext = createContext(null);
const initialObject = { name: 'omer', id: 1 };
const initialArray = [initialObject];
const initialSeason = 'Season 1';
const initialSeasonArray = [initialSeason];
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [episodes, setEpisodes] = useState(initialArray);
  const [currentEpisodeId, setCurrentEpisodeId] = useState(1);

  const [selectedEpisode, setSelectedEpisode] = useState(initialObject);

  const [selectedSeason, setSelectedSeason] = useState(initialSeason);
  const [selectedSeasonsEpisodes, setSelectedSeasonsEpisodes] =
    useState(episodes);
  const [seasons, setSeasons] = useState(initialSeasonArray);

  useEffect(() => {
    setSelectedSeasonsEpisodes(
      episodes.filter((episode) => episode.season === selectedSeason)
    );
  }, [selectedSeason]);

  // useEffect(() => {
  //   fetchEpisodeDetail();
  // }, [currentEpisodeId]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      setEpisodes([]);
      let list = [];
      let data;
      let nextUrl = 'https://rickandmortyapi.com/api/episode';
      setLoading(true);
      do {
        const response = await fetch(nextUrl);
        data = await response.json();
        list.push(...data.results);
        nextUrl = data.info.next;
      } while (nextUrl);

      list.forEach((listItem) => {
        listItem['season'] = 'Season ' + Number(listItem.episode.slice(1, 3));
      });

      setEpisodes(list);
      // console.log(list);
      setSelectedSeasonsEpisodes(
        list.filter((episode) => episode.season === selectedSeason)
      );
      setSeasons(Array.from(new Set(list.map((obj) => obj.season))));

      setLoading(false);
    };

    fetchEpisodes();
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        episodes,
        seasons,
        currentEpisodeId,
        setCurrentEpisodeId,
        selectedSeason,
        setSelectedSeason,
        selectedSeasonsEpisodes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
