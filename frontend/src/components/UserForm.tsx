import { useState, useEffect } from "react";
import apiService from "../lib/api";

interface User {
  id?: number;
  nome: string;
  email: string;
  telefone: string;
}

interface UserFormProps {
  userId?: string;
}

const UserForm = ({ userId }: UserFormProps) => {
  const [user, setUser] = useState<User>({
    nome: "",
    email: "",
    telefone: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (userId) {
      fetchUser(userId);
    }
  }, [userId]);

  const fetchUser = async (id: string) => {
    try {
      setLoading(true);
      const data = await apiService.get<User>(`/users/${id}`);
      setUser(data);
    } catch (err) {
      setError("Falha ao buscar usuário");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (userId) {
        await apiService.put(`/users/${userId}`, user);
      } else {
        console.log(user);
        await apiService.post("/users", user);
      }
      window.location.href = "/";
    } catch (err) {
      setError("Falha ao salvar usuário");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="user-form">
      <h2>{userId ? "Editar Usuário" : "Criar Usuário"}</h2>
      {error && <div className="error">{error === "Failed to fetch user" ? "Falha ao buscar usuário" : "Falha ao salvar usuário"}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" value={user.nome} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={user.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="telefone">Telefone:</label>
          <input type="text" id="telefone" name="telefone" value={user.telefone} onChange={handleChange} required />
        </div>
        <div>
          <button type="submit" disabled={loading}>
            {userId ? "Atualizar" : "Criar"}
          </button>
          <button type="button" onClick={() => (window.location.href = "/")}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
