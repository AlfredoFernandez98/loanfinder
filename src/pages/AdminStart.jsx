import { useState, useEffect} from 'react'
import styled from 'styled-components'
import facade from '../util/apiFacade'
import { useNavigate } from 'react-router'



// Styled Components
const Container = styled.div`
  padding: 2rem;
  font-family: Arial, sans-serif;
  min-height: 100vh;
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

  th, td {
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



function AdminStart( ) {
  const [dataFromServer, setDataFromServer] = useState("Loading...")

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Hent brugere fra serveren ved component mount
  useEffect(() => {
    fetchUsers();
  }, []);

const fetchUsers = async () => {
    try {
      const fetchedUsers = await facade.fetchData("/users/");
      setUsers(fetchedUsers);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching users:", err);
      setError("Kunne ikke hente brugere");
      setLoading(false);
    }
  };
     


  const deleteUser = async (id) => {
    try {
      await facade.fetchData(`/users/delete/${id}`, "DELETE");
      setUsers(users.filter((user) => user.id !== id));
      alert("Bruger slettet!");
    } catch (err) {
      console.error("Error deleting user:", err);
      alert("Kunne ikke slette brugeren.");
    }
  };

  const updateUser = (id) => {
    navigate(`/update-user/${id}`);
  };

  

  return (
    <Container>
      <Title>Admin Dashboard</Title>

      <Navigation>
        <button onClick={() => navigate("/adminbanks")}>Banker</button>
        <button onClick={() => navigate("/requests")}>Requests</button>
        <button onClick={() => navigate("/loans")}>Loans</button>
      
      </Navigation>

      <SectionTitle>Brugere</SectionTitle>
      {loading ? (
        <LoadingMessage>Loading...</LoadingMessage>
      ) : error ? (
        <LoadingMessage style={{ color: "red" }}>{error}</LoadingMessage>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Fuldnavn</th>
              <th>Handlinger</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>
                  <ActionButton className="update" onClick={() => updateUser(user.id)}>
                    Opdater
                  </ActionButton>
                  <ActionButton className="delete" onClick={() => deleteUser(user.id)}>
                    Slet
                  </ActionButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      
    </Container>
  );
}
export default AdminStart
