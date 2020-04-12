import React from 'react';

import { Client } from '../prismic';

const Index = ({ doc: { data } }) => {
  const [{ text: title }] = data.title;
  const [{ text: welcomeText }] = data['welcome-text'];

  console.log(title, welcomeText);
  return (
    <div>
      <h1>{title}</h1>
      <p>{welcomeText}</p>
    </div>
  );
};

export const getStaticProps = async () => {
  const doc = await Client().getSingle('homepage');

  console.log(doc);

  return { props: { doc } };
};

export default Index;
