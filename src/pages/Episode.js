import react, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { AppContext } from '../context';
import './Episode.styles.scss';

const initialEpisode = { id: '-1', name: 'part-1' };
const Episode = () => {
  const [episode, setEpisode] = useState(initialEpisode);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const fetchEpisodeDetail = async () => {
    const url = 'https://rickandmortyapi.com/api/episode/' + id;
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setEpisode(data);
    setLoading(false);
    console.log(data.name);
    return data;
  };

  useEffect(() => {
    fetchEpisodeDetail();
  }, []);

  if (loading) return <Spinner />;

  return (
    <div>
      <div class="wrapper">
        <div class="box a">{episode.name}</div>
        <div class="box b">Characters: {episode.characters?.length}</div>
        <div class="box c">
          Episode :<br /> {episode.episode}
        </div>
        <div class="box d">
          Air Date :<br /> {episode.air_date}
        </div>
        <div class="box e">{episode.season}</div>
      </div>
    </div>
  );
};

export default Episode;
