import apiClient from "./apiClient";

const authEndpoint = "/auth";

export const register = async (email: string, password: string): Promise<{ token: string }> => {
  const response = await apiClient.post<any>(`${authEndpoint}/register`, {
    email: email,
    password: password,
  });
  return response.data;
};

export const login = async (email: string, password: string): Promise<any> => {
  const response = await apiClient.post<any>(`${authEndpoint}/login`, {
    email: email,
    password: password,
  });
  return response.data;
};

export const logout = async (): Promise<void> => {
  await apiClient.post(`${authEndpoint}/logout`);
};
