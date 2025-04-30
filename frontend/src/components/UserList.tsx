import { useState, useEffect } from "react";
import apiService from "../lib/api";

interface User {
  id?: number;
  nome: string;
  email: string;
  telefone: string;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await apiService.get<User[]>("/users");
      setUsers(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Tem certeza que deseja excluir este usuário?")) return;

    try {
      await apiService.delete(`/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      setError("Failed to delete user");
    }
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div className="error">{error === "Failed to fetch users" ? "Falha ao buscar usuários" : "Falha ao excluir usuário"}</div>;

  return (
    <div className="user-list">
      <h2>Usuários</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.nome}</td>
              <td>{user.email}</td>
              <td>{user.telefone}</td>
              <td>
                <button
                  style={{ marginRight: "10px" }}
                  onClick={() => (window.location.href = `/users/edit/${user.id}`)}
                >
                  Editar
                </button>
                <button onClick={() => handleDelete(user.id!)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => (window.location.href = "/users/new")}>Adicionar Novo Usuário</button>
    </div>
  );
};

export default UserList;
