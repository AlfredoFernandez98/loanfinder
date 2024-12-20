import { useEffect, useState } from "react";
import facade from "../util/apiFacade";
import styled from "styled-components";

const Container = styled.div`
  color: #333;
  font-family: "Roboto", sans-serif;
  padding: 20px;
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

const Card = styled.div`
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  width: 250px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  cursor: pointer;

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

const ApplicationContainer = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  width: 250px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InputField = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  margin: 10px 0 5px;
  font-weight: bold;
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  background-color: #4e8bf4;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #367dd9;
  }
`;

function UserStart() {
  const [name, setName] = useState("");
  const [loanOffers, setLoanOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  const [selectedLoanId, setSelectedLoanId] = useState(null);
  const [depositum, setDepositum] = useState("");
  const [selfAmount, setSelfAmount] = useState("");

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

  const handleCardClick = (id) => {
    // Hvis man klikker på samme kort igen, lukker vi formularen
    if (selectedLoanId === id) {
      setSelectedLoanId(null);
      setDepositum("");
      setSelfAmount("");
    } else {
      setSelectedLoanId(id);
      // Nulstil felter hver gang man åbner en ny formular
      setDepositum("");
      setSelfAmount("");
    }
  };

  const handleSubmitApplication = () => {
    // Her kan du tilføje logik for at sende ansøgningen til backend
    // fx facade.fetchData("/apply", "POST", {loanId: selectedLoanId, depositum, selfAmount});
    alert(`Ansøgning sendt!\nLoan ID: ${selectedLoanId}\nDepositum: ${depositum}\nBeløb du selv skal bruge: ${selfAmount}`);
    // Nulstil formularen og luk den
    setSelectedLoanId(null);
    setDepositum("");
    setSelfAmount("");
  };

  return (
    <Container>
      <h1>Welcome {name}</h1>
      <h2>Loan Offers</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <CardGrid>
        {loanOffers.map((offer) => (
          <CardWrapper key={offer.id}>
            <Card onClick={() => handleCardClick(offer.id)}>
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
            {selectedLoanId === offer.id && (
              <ApplicationContainer>
                <h3>Ansøg om lån</h3>
                <Label>Depositum (DKK)</Label>
                <InputField
                  type="number"
                  value={depositum}
                  onChange={(e) => setDepositum(e.target.value)}
                />
                <Label>Beløb du selv skal bruge (DKK)</Label>
                <InputField
                  type="number"
                  value={selfAmount}
                  onChange={(e) => setSelfAmount(e.target.value)}
                />
                <SubmitButton onClick={handleSubmitApplication}>Ansøg</SubmitButton>
              </ApplicationContainer>
            )}
          </CardWrapper>
        ))}
      </CardGrid>
    </Container>
  );
}

export default UserStart;
