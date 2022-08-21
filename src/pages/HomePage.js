import { useContext } from 'react';
import { Radio } from 'antd';
import { AppContext } from '../context';
import Episodes from '../components/Episodes';

import './HomePage.styles.scss';
import Spinner from '../components/Spinner';

const HomePage = () => {
  const {
    loading,
    seasons,
    selectedSeason,
    setSelectedSeason,
    selectedSeasonsEpisodes,
  } = useContext(AppContext);

  if (loading) return <Spinner />;

  return (
    <main className="main-home">
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
      <h1>Episodes</h1>
      <Episodes data={selectedSeasonsEpisodes} />
    </main>
  );
};

export default HomePage;
