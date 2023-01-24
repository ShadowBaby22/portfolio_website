import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
<SectionDivider />
<SectionTitle>Tech </SectionTitle>
<SectionText>
  I am learning web and Game Dev
</SectionText>
<List>
  <ListItem>
    <DiFirebase size="3rem" />
    <ListContainer>
      <ListTitle>
        Front-End
      </ListTitle>
    </ListContainer>
  </ListItem>
</List>
  </Section>
);

export default Technologies;
