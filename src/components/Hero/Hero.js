import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      "Full Stack Development utilizing MongoDB, Express.js, React.js, and Node.js for building high-performance, scalable and dynamic web applications"
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com/'}>Download Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;