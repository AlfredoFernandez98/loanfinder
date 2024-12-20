import  { useState, useEffect } from "react";
import styled from "styled-components";
import facade from "../util/apiFacade";
import { useNavigate } from "react-router";

// --- Styled Components ---
const Container = styled.div`
  padding: 2rem;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #4e8bf4;
  text-align: center;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: black;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;

  button {
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    color: white;
    background-color: #4e8bf4;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #367dd9;
    }
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  th,
  td {
    padding: 1rem;
    border: 1px solid #ddd;
    text-align: center;
  }

  th {
    background-color: #4e8bf4;
    color: white;
    text-transform: uppercase;
  }

  tr:hover {
    background-color: #e9f5ff;
  }
`;
const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input, select {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  button {
    width: fit-content;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: white;
    background-color: #4e8bf4;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #367dd9;
    }
  }
`;


const LoadingMessage = styled.p`
  font-size: 1.2rem;
  color: #666;
  text-align: center;
`;
function Loans() {
    const [loans, setLoans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newLoan, setNewLoan] = useState({ amount: "", duration: "", interestRate: "", loanTypeId: "", bankID: "", loanRequest: "" });
    const navigate = useNavigate();


  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const loansPerPage = 4;

  // Search state
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchLoans();
  }, []);

  const fetchLoans = async () => {
    try {
      const fetchedLoans = await facade.fetchData("/offers/");
      console.log("Fetched loans:", fetchedLoans);
      setLoans(fetchedLoans);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching loans:", err);
      setError("Kunne ikke hente loans");
      setLoading(false);
    }
  };

    // Filter logic
  // Her filtrerer vi efter bankens navn eller låntagers navn (hvis loanRequest findes)
  const filteredLoans = loans.filter((loan) => {
    const bankName = loan.bank?.name?.toLowerCase() || "";
    const borrowerName = loan.loanRequest?.loanUser?.name?.toLowerCase() || "";
    const query = searchQuery.toLowerCase();

    // Lånet vises, hvis enten banknavn eller låntagers navn matcher søgningen
    return bankName.includes(query) || borrowerName.includes(query);
  });

  // Pagination logic
  const indexOfLastLoan = currentPage * loansPerPage;
  const indexOfFirstLoan = indexOfLastLoan - loansPerPage;
  const currentLoans = filteredLoans.slice(indexOfFirstLoan, indexOfLastLoan);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLoan({ ...newLoan, [name]: value });
  };

  const createLoan = async (e) => {
    e.preventDefault();
    // Byg det JSON-objekt, som serveren forventer ved oprettelse
    const loanData = {
      amount: parseInt(newLoan.amount, 10),
      duration: parseInt(newLoan.duration, 10),
      interestRate: parseFloat(newLoan.interestRate),
      loanTypeId: parseInt(newLoan.loanTypeId, 10),
      bankId: parseInt(newLoan.bankId, 10)
    };

    try {
      const response = await facade.fetchData("/loans/create", "POST", loanData);
      if (!response.ok) {
        throw new Error("Could not create loan");
      }
      alert("Loan oprettet!");
      // Fetch den opdaterede liste af loans
      fetchLoans();
      // Nulstil formularen
      setNewLoan({
        amount: "",
        duration: "",
        interestRate: "",
        loanTypeId: "",
        bankId: ""
      });
    } catch (err) {
      console.error("Error creating loan:", err);
      alert("Kunne ikke oprette loan.");
    }
  };




  return (
    <Container>
      <Title>Admin Dashboard</Title>
      <Navigation>
        <button onClick={() => navigate("/login")}>Users</button>
        <button onClick={() => navigate("/requests")}>Requests</button>
        <button onClick={() => navigate("/banks")}>Banks</button>
      </Navigation>

      <SectionTitle>Loans</SectionTitle>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Søg efter bank eller låntagers navn..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          padding: "0.5rem",
          marginBottom: "1rem",
          fontSize: "1rem",
          width: "100%",
          border: "1px solid #ddd",
          borderRadius: "5px",
        }}
      />

      {loading ? (
        <LoadingMessage>Loading...</LoadingMessage>
      ) : error ? (
        <LoadingMessage style={{ color: "red" }}>{error}</LoadingMessage>
      ) : (
        <>
          {/* Table */}
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Amount</th>
                <th>Duration</th>
                <th>Interest Rate (%)</th>
                <th>Loan Type</th>
                <th>Bank Name</th>
                <th>Borrower Name</th>
              </tr>
            </thead>
            <tbody>
              {currentLoans.map((loan) => (
                <tr key={loan.id}>
                  <td>{loan.id}</td>
                  <td>{loan.amount}</td>
                  <td>{loan.duration}</td>
                  <td>{loan.interestRate}</td>
                  <td>{loan.loanType?.loanTypeE}</td>
                  <td>{loan.bank?.name}</td>
                  <td>{loan.loanRequest?.loanUser?.name || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Pagination */}
          <div style={{ textAlign: "center", margin: "1rem 0" }}>
            {Array.from(
              { length: Math.ceil(filteredLoans.length / loansPerPage) },
              (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  style={{
                    margin: "0 0.5rem",
                    padding: "0.5rem 1rem",
                    border: "none",
                    backgroundColor: currentPage === i + 1 ? "#4e8bf4" : "#ddd",
                    color: currentPage === i + 1 ? "#fff" : "#000",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        </>
      )}

      {/* Form til oprettelse af nyt loan */}
      <SectionTitle>Opret nyt loan</SectionTitle>
      <Form onSubmit={createLoan}>
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={newLoan.amount}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="duration"
          placeholder="Duration"
          value={newLoan.duration}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          step="0.1"
          name="interestRate"
          placeholder="Interest Rate"
          value={newLoan.interestRate}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="loanTypeId"
          placeholder="Loan Type ID"
          value={newLoan.loanTypeId}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="bankId"
          placeholder="Bank ID"
          value={newLoan.bankId}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Opret Loan</button>
      </Form>
    </Container>
  );
}

export default Loans;