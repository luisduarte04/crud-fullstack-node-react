import axios from "axios";

// Configurações da API
const API_HOST = "http://localhost";
const API_PORT = 3000;
const API_URL = `${API_HOST}:${API_PORT}`;

// Instância do Axios com configurações base
const api = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptador para requisições

// Interceptador para respostas
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.error("Erro de autenticação");
          break;
        case 404:
          console.error("Recurso não encontrado");
          break;
        default:
          console.error("Erro na requisição:", error.response.data);
      }
    }
    return Promise.reject(error);
  }
);

// Funções para requisições HTTP
export const apiService = {
  // GET - Buscar dados
  get: async <T>(url: string) => {
    const response = await api.get<T>(url);
    return response.data;
  },

  // POST - Criar novo recurso
  post: async <T>(url: string, data: any) => {
    const response = await api.post<T>(url, data);
    return response.data;
  },

  // PUT - Atualizar recurso existente
  put: async <T>(url: string, data: any) => {
    const response = await api.put<T>(url, data);
    return response.data;
  },

  // DELETE - Remover recurso
  delete: async <T>(url: string) => {
    const response = await api.delete<T>(url);
    return response.data;
  },
};

export default apiService;
