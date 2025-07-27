import React from 'react';
import Links from './Links';

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      {bio && bio.trim() !== "" && <p>{bio}</p>}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
