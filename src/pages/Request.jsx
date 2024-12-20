import React, { useState, useEffect } from "react";
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

const LoadingMessage = styled.p`
  font-size: 1.2rem;
  color: #666;
  text-align: center;
`;

// --- Komponent ---
function Request() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const requestsPerPage = 4;

  // Search state
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const fetchedRequests = await facade.fetchData("/requests/");
      setRequests(fetchedRequests);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching requests:", err);
      setError("Kunne ikke hente requests");
      setLoading(false);
    }
  };

    // Nu bruger vi loanUser.name i stedet for borrowerName
    const filteredRequests = requests.filter((request) =>
        request.loanUser?.name?.toLowerCase().includes(searchQuery.toLowerCase())
      );
  

  // Pagination logic
  const indexOfLastRequest = currentPage * requestsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
  const currentRequests = filteredRequests.slice(indexOfFirstRequest, indexOfLastRequest);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <Title>Admin Dashboard</Title>
      <Navigation>
        <button onClick={() => navigate("/login")}>Users</button>
        <button onClick={() => navigate("/loans")}>Loans</button>
        <button onClick={() => navigate("/adminbanks")}>Banks</button>
      </Navigation>

      <SectionTitle>Forespørgsler</SectionTitle>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Søg efter låntagers navn..."
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
                <th>Borrower Name</th>
                <th>Amount</th>
                <th>Duration</th>
                <th>Loan Type</th>
              </tr>
            </thead>
            <tbody>
              {currentRequests.map((request) => (
                <tr key={request.id}>
                  <td>{request.id}</td>
                  <td>{request.loanUser?.name}</td>
                  <td>{request.amount}</td>
                  <td>{request.duration}</td>
                  <td>{request.loanType?.loanTypeE}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Pagination */}
          <div style={{ textAlign: "center", margin: "1rem 0" }}>
            {Array.from(
              { length: Math.ceil(filteredRequests.length / requestsPerPage) },
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
    </Container>
  );
}

export default Request;
