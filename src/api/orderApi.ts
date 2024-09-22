import {
  OrderStatusResponse,
  ProductTypeCountResponse,
  RevenueResponse,
} from "@/models/order";
import apiClient from "./apiClient";

const orderEndpoint = "/orders";

const getAuthToken = () => {
  return localStorage.getItem("authToken");
};

export const getAllOrders = async (): Promise<any> => {
  const response = await apiClient.get<any>(`${orderEndpoint}`, {
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
  });
  return response.data;
};

export const getOrderStatusCount = async (
  date: string
): Promise<OrderStatusResponse> => {
  const response = await apiClient.get<OrderStatusResponse>(
    `${orderEndpoint}/status-count`,
    {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
      params: { date },
    }
  );
  return response.data;
};

export const getProductTypeCount = async (
  date: string
): Promise<ProductTypeCountResponse> => {
  const response = await apiClient.get<ProductTypeCountResponse>(
    `${orderEndpoint}/product-type-count`,
    {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
      params: { date },
    }
  );
  return response.data;
};

export const getRevenue = async (date: string): Promise<RevenueResponse> => {
  const response = await apiClient.get<RevenueResponse>(
    `${orderEndpoint}/revenue`,
    {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
      params: { date },
    }
  );
  return response.data;
};
