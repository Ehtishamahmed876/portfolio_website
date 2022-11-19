import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
  <LeftSection>
     <SectionTitle main center>
      Welcome to <br/>
      My Personal Portofolio
     </SectionTitle>
     <SectionText>
      I am a full Stack web developer. I develope website using mern stack. My websiter are User-Friendly and have a great SEO.
     </SectionText>
     <Button onClick={()=>window.location = 'https://www.linkedin.com/in/ehtisham-ahmed-3b3517211/'}>Learn More</Button>
  </LeftSection>
 </Section>
);

export default Hero;