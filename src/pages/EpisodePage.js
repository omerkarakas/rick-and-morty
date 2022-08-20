import react, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Characters from '../components/Characters';
import Spinner from '../components/Spinner';
import { AppContext } from '../context';
import './EpisodePage.styles.scss';

const initialEpisode = { id: '-1', name: 'part-1' };
const EpisodePage = () => {
  const { id } = useParams();
  const paramId = Number(id);

  const { episodes, characters } = useContext(AppContext);
  const [episode, setEpisode] = useState(initialEpisode);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let episode = episodes.find((episode) => episode.id === paramId);
    setEpisode(episode);
    // fetchCharacters(episode.character_ids);
  }, [paramId]);

  if (loading) return <Spinner />;

  return (
    <main className="main-episode">
      <div className="heading">
        <h2>
          {episode.season} - {episode.episode}
        </h2>
        <h1>{episode.name}</h1>
      </div>
      <div className="details">
        <div className="detail-item">
          Episode :<br /> <em>{episode.episode}</em>
        </div>
        <div className="detail-item">
          Air Date :<br /> <em>{episode.air_date}</em>
        </div>
      </div>
      <div className="">
        <Characters data={characters} />
      </div>
    </main>
  );
};

export default EpisodePage;
