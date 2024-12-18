import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Arial, sans-serif';
  color: #2c3e50;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #4e8bf4;
  text-align: center;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 10px 0;
`;

const Highlight = styled.span`
  font-weight: bold;
  color: #e74c3c;
`;

const List = styled.ul`
  margin: 20px 0;
  padding-left: 20px;
`;

const ListItem = styled.li`
  font-size: 1rem;
  margin: 8px 0;
  color: #34495e;
  &::before {
    content: '•';
    color: #4e8bf4;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

function About() {
  return (
    <Container>
      <Title>About Loanfinder</Title>
      <Paragraph>
        <Highlight>Loanfinder</Highlight> blev grundlagt i 2018 af to visionære iværksættere, Clara Jensen og Michael Sørensen, der ønskede at gøre det nemmere for folk at finde de bedste lån på markedet. Missionen var at skabe en digital platform, hvor brugere kunne sammenligne lån baseret på deres behov, uden at skulle navigere gennem komplekse og skjulte vilkår.
      </Paragraph>
      <Paragraph>
        Virksomheden startede som en lille startup i Aarhus med kun fire medarbejdere, men voksede hurtigt takket være deres brugervenlige teknologi og kundecentrerede tilgang. I dag har Loanfinder over 150 medarbejdere fordelt på kontorer i København, Aarhus og Odense. Virksomheden har desuden udvidet til flere europæiske markeder som Sverige, Norge og Tyskland.
      </Paragraph>
      <Paragraph>
        <strong>Nøgletal:</strong>
      </Paragraph>
      <List>
        <ListItem><strong>Grundlagt:</strong> 2018</ListItem>
        <ListItem><strong>Hovedkontor:</strong> Aarhus, Danmark</ListItem>
        <ListItem><strong>Antal medarbejdere:</strong> 150+</ListItem>
        <ListItem><strong>Markeder:</strong> Danmark, Sverige, Norge, Tyskland</ListItem>
        <ListItem><strong>Mål:</strong> At blive den førende digitale platform for lånesammenligning i Europa inden 2030.</ListItem>
      </List>
    </Container>
  );
}

export default About;
