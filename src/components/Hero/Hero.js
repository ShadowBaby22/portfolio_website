import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello World <br />
        Take a minute or 2 to take a look at what I am up to 
      </SectionTitle>
      <SectionText>
        See how I use tech so I can make a difference 🤓
      </SectionText>
      <Button onClick={()=> window.location = 'https://google.com'}> Learn More </Button> {/*Onclick has a Callback function using arrow function*/}
    </LeftSection>
    </Section>
  

);

export default Hero;