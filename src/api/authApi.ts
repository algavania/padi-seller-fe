import apiClient from "./apiClient";

const authEndpoint = "/auth";

export const register = async (email: string, password: string): Promise<{ token: string }> => {
  const response = await apiClient.post<{ token: string }>(`${authEndpoint}/register`, {
    email: email,
    password: password,
  });
  return response.data;
};

export const login = async (email: string, password: string): Promise<{ token: string }> => {
  const response = await apiClient.post<{ token: string }>(`${authEndpoint}/login`, {
    email: email,
    password: password,
  });
  return response.data;
};

export const logout = async (): Promise<void> => {
  await apiClient.post(`${authEndpoint}/logout`);
};
