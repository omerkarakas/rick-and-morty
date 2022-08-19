import React from 'react';
import './About.styles.scss';

const About = () => {
  return (
    <section>
      <h1 className="section-title">About R&M API and This Website</h1>
      <p>
        The Rick and Morty API (https://rickandmortyapi.com/) is a REST(ish) and
        GraphQL API based on the television show Rick and Morty. You will have
        access to about hundreds of characters, images, locations and episodes.
        The Rick and Morty API is filled with canonical information as seen on
        the TV show.
      </p>
      <p>
        This web app is just a simple consumer of this API designed by Omer
        Karakas.
      </p>
    </section>
  );
};

export default About;
