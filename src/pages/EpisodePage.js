import { HomeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import react, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
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

  const navigate = useNavigate();

  useEffect(() => {
    let episode = episodes.find((episode) => episode.id === paramId);
    setEpisode(episode);
    // fetchCharacters(episode.character_ids);
  }, [paramId]);

  if (episodes.length < 1) {
    navigate('/');
    return;
  }

  if (loading) return <Spinner />;

  return (
    <main className="main-episode">
      <div className="heading">
        <h2>
          {episode.season} - {episode.episode}
        </h2>
        <h1>{episode.name}</h1>
        <div className="detail-item">
          Air Date : <strong>{episode.air_date}</strong>
        </div>
      </div>
      <div className="heading">
        <h2>Seen Characters</h2>
      </div>
      <Characters data={characters} />
      <Link to="/">
        <Button type="link" icon={<HomeOutlined />}>
          Back Home
        </Button>
      </Link>
    </main>
  );
};

export default EpisodePage;
