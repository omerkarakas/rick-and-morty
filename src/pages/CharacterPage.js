import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
        Gender : <em>{character.gender}</em>
      </div>
      <div className="detail-item">Location :{character?.location?.name}</div>
      <div className="detail-item">Origin :{character?.origin?.name}</div>
      <div className="detail-item">Species :{character.species}</div>
      {/* </div> */}
      <div className="char-image-container">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="char-episodes-container">
        <div className="heading">
          <h2>Seen in Episodes</h2>
        </div>
        <Episodes data={charactersEpisodes} />
      </div>
    </main>
  );
};

export default CharacterPage;
/*

import react, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Characters from '../components/Characters';
import Spinner from '../components/Spinner';
import { AppContext } from '../context';
import './Episode.styles.scss';

const initialEpisode = { id: '-1', name: 'part-1' };
const Episode = () => {
  const { id } = useParams();
  //  const [loading, setLoading] = useState(false);
  const { episodes } = useContext(AppContext);
  const [episode, setEpisode] = useState(initialEpisode);

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCharacters = async (char_ids) => {
    let url = 'https://rickandmortyapi.com/api/character/' + char_ids;
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setCharacters(data);
    setLoading(false);
  };

  useEffect(() => {
    let episode = episodes.find((episode) => episode.id === Number(id));
    setEpisode(episode);
    fetchCharacters(episode.character_ids);
  }, [id]);

  if (loading) return <Spinner />;

  return (
    <main>
      <div className="heading">
        <h2>{episode.name}</h2>
      </div>
      <div className="details">
        <div className="detail-item">
          Episode :<br /> <em>{episode.episode}</em>
        </div>
        <div className="detail-item">
          Air Date :<br /> <em>{episode.air_date}</em>
        </div>
        <div className="detail-item">{episode.season}</div>
      </div>
      <div className="">
        <Characters data={characters} />
      </div>
    </main>
  );
};

export default Episode;
*/
