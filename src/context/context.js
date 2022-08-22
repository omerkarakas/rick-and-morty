import { useState, useEffect, createContext } from 'react';

const AppContext = createContext(null);
const initialObject = { name: 'omer', id: 1 };
const initialArray = [initialObject];
const initialSeason = 'Season 1';
const initialSeasonArray = [initialSeason];
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [episodes, setEpisodes] = useState(initialArray);
  const [currentEpisodeId, setCurrentEpisodeId] = useState(-1);

  const [seasons, setSeasons] = useState(initialSeasonArray);
  const [selectedSeason, setSelectedSeason] = useState(initialSeason);
  const [selectedSeasonsEpisodes, setSelectedSeasonsEpisodes] =
    useState(episodes);

  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async (char_ids) => {
    let url = 'https://rickandmortyapi.com/api/character/' + char_ids;
    setLoading(true);
    console.log('API call : ' + url);

    const response = await fetch(url);
    let list = await response.json();

    if (!Array.isArray(list)) {
      list = [list];
    }
    // add character ids
    list.forEach((listItem) => {
      let episodeIds = listItem.episode.reduce((str, item) => {
        return str + ',' + item.substring(item.lastIndexOf('/') + 1);
      }, '');
      listItem['episode_ids'] = episodeIds.replace(/^(,)+/, '');
    });

    setCharacters(list);
    setLoading(false);
  };

  useEffect(() => {
    if (currentEpisodeId !== -1) {
      const charIds = episodes.find(
        (ep) => ep.id === currentEpisodeId
      ).character_ids;
      fetchCharacters(charIds);
    }
  }, [currentEpisodeId]);

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
        console.log('API call : ' + nextUrl);
        const response = await fetch(nextUrl);
        data = await response.json();
        list.push(...data.results);
        nextUrl = data.info.next;
      } while (nextUrl);

      // add season field, Season 1, Season 2, Season 3 ...
      list.forEach((listItem) => {
        listItem['season'] = 'Season ' + Number(listItem.episode.slice(1, 3));
      });

      // add character ids
      list.forEach((listItem) => {
        let charIds = listItem.characters.reduce((str, item) => {
          return str + ',' + item.substring(item.lastIndexOf('/') + 1);
        }, '');
        listItem['character_ids'] = charIds.replace(/^(,)+/, '');
      });

      setEpisodes(list);
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
        characters,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
