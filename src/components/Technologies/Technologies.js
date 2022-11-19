import React from 'react';
import { DiFirebase, DiMysql, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id='tech'>
  <SectionDivider />
  <br />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I've worked with a range a technologies in the web development world. Form Back-end to design.
  </SectionText>
  <List>
  <ListItem>
    <DiReact size={"3rem"} />
    <ListContainer>
      <ListTitle>Front-end</ListTitle>
      <ListParagraph>
        Experience with <br />
        React.js
      </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiMysql size={"3rem"} />
    <ListContainer>
      <ListTitle>Back-end</ListTitle>
      <ListParagraph>
        Experience with <br />
        Node and Databases
      </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiZend size={"3rem"} />
    <ListContainer>
      <ListTitle>UI/UX</ListTitle>
      <ListParagraph>
        Experience with <br />
        tools like figma
      </ListParagraph>
    </ListContainer>
  </ListItem>
  </List>
 </Section>
);

export default Technologies;
