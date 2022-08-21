import { HomeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.styles.scss';

const AboutPage = () => {
  return (
    <main className="main-about">
      <Link to="/">
        <Button type="link" icon={<HomeOutlined />}>
          Back Home
        </Button>
      </Link>

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
    </main>
  );
};

export default AboutPage;
