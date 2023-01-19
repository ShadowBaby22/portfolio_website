import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello World <br />
        Take a minute or 2 to take a look at what I am up to 
      </SectionTitle>
    </LeftSection>
  </Section>
);

export default Hero;