import React, { useState, useEffect } from "react";
import styled from "styled-components";
import facade from "../util/apiFacade";
import { useNavigate } from "react-router";

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
  color: balck;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const SectionNewBank = styled.h3`
background-color: transparent;
    
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

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  font-size: 0.9rem;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &.update {
    background-color: #ffa500;

    &:hover {
      background-color: #e69500;
    }
  }

  &.delete {
    background-color: #ff4d4d;

    &:hover {
      background-color: #e43e3e;
    }
  }
`;

const LoadingMessage = styled.p`
  font-size: 1.2rem;
  color: #666;
  text-align: center;
`;

const Form = styled.form`
  
  align-items: start;
  flex-direction: column;
  margin: 2rem auto;
  height: 100%;

  input {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    padding: 0.5rem;
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


function AdminBanks() {
  const [banks, setBanks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newBank, setNewBank] = useState({ name: "" });
  const navigate = useNavigate();


    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const banksPerPage = 4;
  
    // Search state
    const [searchQuery, setSearchQuery] = useState("");

  // Fetch alle banker ved component mount
  useEffect(() => {
    fetchBanks();
  }, []);

  const fetchBanks = async () => {
    try {
      const fetchedBanks = await facade.fetchData("/banks/");
      setBanks(fetchedBanks);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching banks:", err);
      setError("Kunne ikke hente banker");
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBank({ ...newBank, [name]: value });
  };

  const createBank = async (e) => {
    e.preventDefault();
    try {
      await facade.fetchData("/banks/create", "POST", newBank);
      alert("Bank oprettet!");
      fetchBanks(); // Opdater listen
      setNewBank({ name: ""}); // Nulstil formularen
    } catch (err) {
      console.error("Error creating bank:", err);
      alert("Kunne ikke oprette bank.");
    }
  };

  //Detele bank
  const deleteBank = async (id) => {
    try {
        const response = await facade.fetchData(`/banks/delete/${id}`, "DELETE");
        if (!response.ok) {
            throw new Error("Kunne ikke slette bank.");
        }

        // Genindlæs bank-listen fra API'et
        const updatedBanks = await facade.fetchData("/banks", "GET");
        setBanks(updatedBanks); // Opdater state med de nyeste data

        alert("Bank slettet!");
    } catch (err) {
        console.error("Error deleting bank:", err);
        alert("Kunne ikke slette bank.");
    }
};


    // Handle search
    const filteredBanks = banks.filter((bank) =>
        bank.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
      // Calculate the current banks for the page
      const indexOfLastBank = currentPage * banksPerPage;
      const indexOfFirstBank = indexOfLastBank - banksPerPage;
      const currentBanks = filteredBanks.slice(indexOfFirstBank, indexOfLastBank);
    
      const paginate = (pageNumber) => setCurrentPage(pageNumber);
    

      return (
        <Container>
          <Title>Admin Dashboard</Title>
          <Navigation>
        <button onClick={() => navigate("/login")}>Users</button>
        <button onClick={() => navigate("/requests")}>Requests</button>
        <button onClick={() => navigate("/loans")}>Loans</button>
      
      </Navigation>
          <SectionTitle>Banker</SectionTitle>
    
          {/* Search Input */}
          <input
            type="text"
            placeholder="Søg efter bank..."
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
                    <th>Navn</th>
                    <th>Handling</th>
                  </tr>
                </thead>
                <tbody>
                  {currentBanks.map((bank) => (
                    <tr key={bank.id}>
                      <td>{bank.id}</td>
                      <td>{bank.name}</td>
                      <td>
                        <ActionButton className="update">Opdater</ActionButton>
                        <ActionButton className="delete" onClick={()=>deleteBank(bank.id)}>Slet</ActionButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
    
              {/* Pagination */}
              <div style={{ textAlign: "center", margin: "1rem 0" }}>
                {Array.from(
                  { length: Math.ceil(filteredBanks.length / banksPerPage) },
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
    
          {/* Create Bank Form */}
          <SectionNewBank>Opret Ny Bank</SectionNewBank>
          <Form onSubmit={createBank}>
            <input
              type="text"
              name="name"
              placeholder="Bank Navn"
              value={newBank.name}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Opret Bank</button>
          </Form>
        </Container>
      );
    }
    
    export default AdminBanks;
