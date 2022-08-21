import { HomeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Episodes from '../components/Episodes';
import Spinner from '../components/Spinner';
import { AppContext } from '../context';
import './CharacterPage.styles.scss';

const initialCharacter = { id: '-1', name: 'omer' };
const initialEpisodes = [{ id: -1, name: 'r&m' }];

const CharacterPage = () => {
  const { id } = useParams();
  const paramId = Number(id);

  const [character, setCharacter] = useState(initialCharacter);
  const [charactersEpisodes, setCharactersEpisodes] = useState(initialEpisodes);
  const [loading, setLoading] = useState(false);

  const { characters } = useContext(AppContext);

  const navigate = useNavigate();

  const fetchCharactersEpisodes = async (episode_ids) => {
    let url = 'https://rickandmortyapi.com/api/episode/' + episode_ids;
    setLoading(true);
    const response = await fetch(url);
    let list = await response.json();

    // convert to array if not
    if (!Array.isArray(list)) {
      list = [list];
    }

    list.forEach((listItem) => {
      let charIds = listItem.characters.reduce((str, item) => {
        return str + ',' + item.substring(item.lastIndexOf('/') + 1);
      }, '');
      listItem['character_ids'] = charIds.replace(/^(,)+/, '');
    });

    setCharactersEpisodes(list);
    setLoading(false);
  };

  useEffect(() => {
    if (characters.length < 1) {
      navigate('/');
      return;
    }

    let char = characters.find((character) => character.id === paramId);
    setCharacter(char);
    fetchCharactersEpisodes(char.episode_ids);
  }, [id]);

  if (loading) return <Spinner />;

  return (
    <main className="main-character">
      <div className="heading">
        <h1>{character.name}</h1>
      </div>
      {/* <div className="details"> */}
      <div className="detail-item">
        Gender: <strong>{character.gender}</strong>
      </div>
      <div className="detail-item">
        Location: <strong>{character?.location?.name}</strong>
      </div>
      <div className="detail-item">
        Origin :<strong>{character?.origin?.name}</strong>
      </div>
      <div className="detail-item">
        Species :<strong>{character.species}</strong>
      </div>
      {/* </div> */}
      <div className="char-image-container">
        <img
          className="char-image"
          src={character.image}
          alt={character.name}
        />
      </div>
      <div className="char-episodes-container">
        <div className="heading">
          <h2>Seen in Episodes</h2>
        </div>
        <Episodes data={charactersEpisodes} />
      </div>
      <Link to="/">
        <Button type="link" icon={<HomeOutlined />}>
          Back Home
        </Button>
      </Link>
    </main>
  );
};

export default CharacterPage;
