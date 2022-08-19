import React, { useState } from 'react';
import react, { useContext } from 'react';
import Episodes from '../components/Episodes';
import { AppContext } from '../context';
import { Radio } from 'antd';
import { useEffect } from 'react';

import './Home.styles.scss';
import Spinner from '../components/Spinner';

const Home = () => {
  const {
    loading,
    episodes,
    seasons,
    selectedSeason,
    setSelectedSeason,
    selectedSeasonsEpisodes,
  } = useContext(AppContext);

  // const [season, setSeason] = useState('Season 1');
  // const [selectedSeasonsEpisodes, setSelectedSeasonsEpisodes] =
  //   useState(episodes);

  // useEffect(() => {
  //   setSelectedSeasonsEpisodes(
  //     episodes.filter((episode) => episode.season === season)
  //   );
  // }, [season]);

  if (loading) return <Spinner />;

  return (
    <main>
      <div className="seasons-container">
        <Radio.Group
          value={selectedSeason}
          onChange={(e) => setSelectedSeason(e.target.value)}
          optionType="button"
          buttonStyle="solid"
          color="red"
          type="primary"
        >
          {seasons.map((season, index) => {
            return (
              <Radio.Button value={season} key={index}>
                {season}
              </Radio.Button>
            );
          })}
        </Radio.Group>
      </div>
      <Episodes data={selectedSeasonsEpisodes} />
    </main>
  );
};

export default Home;
