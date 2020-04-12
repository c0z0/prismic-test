import React from 'react';
import Head from 'next/head';

import { Client } from '../prismic';

const Index = ({ doc: { data } }) => {
  const [{ text: title }] = data.title;
  const [{ text: icon }] = data.icon;
  const [{ text: welcomeText }] = data['welcome-text'];

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link
          rel="icon"
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${icon}</text></svg>`}
        />
      </Head>
      <h1 className="icon">{icon}</h1>
      <h1>{title}</h1>
      <p>{welcomeText}</p>
      <style jsx>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
          h1,
          p {
            font-family: 'Playfair Display', serif;
            color: #484848;
          }

          .icon {
            font-size: 4rem;
          }

          div {
            max-width: 700px;
            margin: 20rem auto;
          }
        `}
      </style>
    </div>
  );
};

export const getStaticProps = async () => {
  const doc = await Client().getSingle('homepage');

  return { props: { doc } };
};

export default Index;
