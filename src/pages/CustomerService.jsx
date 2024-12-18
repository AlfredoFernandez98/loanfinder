import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fdfdfd;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Arial, sans-serif';
  color: #2c3e50;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #3498db;
  text-align: center;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 10px 0;
  color: #34495e;
`;

const ContactInfo = styled.div`
  margin: 20px 0;
  background-color: #f1f8ff;
  padding: 15px;
  border-radius: 10px;
  border-left: 5px solid #3498db;
`;

const Highlight = styled.span`
  font-weight: bold;
  color: #e67e22;
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
    color: #3498db;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

function CustomerService() {
  return (
    <Container>
      <Title>Customer Service</Title>
      <Paragraph>
        Hos <Highlight>Loanfinder</Highlight> er vi her for at hjælpe dig. Vores kundeserviceteam står klar til at svare på dine spørgsmål og sikre, at du får den bedste oplevelse med vores platform.
      </Paragraph>
      <Paragraph>
        Du kan kontakte os via flere kanaler, og vi bestræber os på at vende tilbage til dig inden for <Highlight>24 timer</Highlight>.
      </Paragraph>
      <ContactInfo>
        <strong>Kontaktoplysninger:</strong>
        <List>
          <ListItem><strong>Email:</strong> support@loanfinder.dk</ListItem>
          <ListItem><strong>Telefon:</strong> +45 70 20 30 40</ListItem>
          <ListItem><strong>Åbningstider:</strong> Mandag - Fredag: 09:00 - 17:00</ListItem>
          <ListItem><strong>Adresse:</strong> Loanfinder A/S, Vesterbrogade 1, 8000 Aarhus</ListItem>
        </List>
      </ContactInfo>
      <Paragraph>
        Vi ser frem til at hjælpe dig og gøre din oplevelse så nem og problemfri som muligt.
      </Paragraph>
    </Container>
  );
}

export default CustomerService;
