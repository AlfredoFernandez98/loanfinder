import { useEffect, useState } from "react";
import facade from "../util/apiFacade";

import styled from "styled-components";

// Styling af container
const Container = styled.div`
  color: #333;
  font-family: "Roboto", sans-serif;
  padding: 20px;
`;

// Flexbox til at arrangere kasserne
const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

// Styling til hver LoanOffer-kasse
const Card = styled.div`
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  width: 250px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  h3 {
    margin: 0 0 10px 0;
    font-size: 18px;
  }

  p {
    margin: 5px 0;
  }
`;

function UserStart() {
  const [name, setName] = useState("");
  const [loanOffers, setLoanOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch LoanOffers med async/await
  const fetchLoanOffers = async () => {
    try {
      const fetchedOffers = await facade.fetchData("/offers");
      setLoanOffers(fetchedOffers);
    } catch (err) {
      console.error("Error fetching LoanOffers:", err);
      setError("Kunne ikke hente lån-tilbud.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (facade.loggedIn()) {
      const fetchedName = facade.getName();
      setName(fetchedName || "Bruger");
    }

    fetchLoanOffers();
  }, []);

  return (
    <Container>
      <h1>Welcome {name}</h1>
      <h2>Loan Offers</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <CardGrid>
        {loanOffers.map((offer) => (
          <Card key={offer.id}>
            <h3>{offer.id ? `${offer.id} Lån` : "Ukendt Lån"}</h3>
            <p>
              <strong>Amount:</strong> {offer.amount} DKK
            </p>
            <p>
              <strong>Interest Rate:</strong> {offer.interestRate}%
            </p>
            <p>
              <strong>Duration:</strong> {offer.duration}
            </p>
          </Card>
        ))}
      </CardGrid>
    </Container>
  );
}

export default UserStart;
