import { useState, useEffect } from 'react';
import apiService from '../lib/api';

interface User {
  id?: number;
  name: string;
  email: string;
}

interface UserFormProps {
  userId?: string;
}

const UserForm = ({ userId }: UserFormProps) => {
  const [user, setUser] = useState<User>({
    name: '',
    email: ''
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
      setError('Failed to fetch user');
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
        await apiService.post('/users', user);
      }
      window.location.href = '/';
    } catch (err) {
      setError('Failed to save user');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="user-form">
      <h2>{userId ? 'Edit User' : 'Create User'}</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit" disabled={loading}>
            {userId ? 'Update' : 'Create'}
          </button>
          <button type="button" onClick={() => window.location.href = '/'}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;