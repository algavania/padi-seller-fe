import { createContext, useState, useContext, ReactNode } from "react";
import {
  getAllOrders,
  getOrderStatusCount,
  getProductTypeCount,
  getRevenue,
} from "../api/orderApi";
import {
  OrderStatusResponse,
  ProductTypeCountResponse,
  RevenueResponse,
} from "@/models/order";

type OrderContextType = {
  orders: any | null;
  orderStatus: OrderStatusResponse | null;
  productTypeCount: ProductTypeCountResponse | null;
  revenue: RevenueResponse | null;
  loading: boolean;
  error: string | null;
  fetchOrders: () => Promise<void>;
  fetchOrderStatus: (date: string) => Promise<void>;
  fetchProductTypeCount: (date: string) => Promise<void>;
  fetchRevenue: (date: string) => Promise<void>;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<any>();
  const [orderStatus, setOrderStatus] = useState<OrderStatusResponse | null>(
    null
  );
  const [productTypeCount, setProductTypeCount] =
    useState<ProductTypeCountResponse | null>(null);
  const [revenue, setRevenue] = useState<RevenueResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchOrders = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getAllOrders();
      console.log('response orders',response);
      setOrders(response);
    } catch (err) {
      setError("Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  };

  const fetchOrderStatus = async (date: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await getOrderStatusCount(date);
      setOrderStatus(response);
    } catch (err) {
      setError("Failed to fetch order status");
    } finally {
      setLoading(false);
    }
  };

  const fetchProductTypeCount = async (date: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await getProductTypeCount(date);
      setProductTypeCount(response);
    } catch (err) {
      setError("Failed to fetch product type count");
    } finally {
      setLoading(false);
    }
  };

  const fetchRevenue = async (date: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await getRevenue(date);
      setRevenue(response);
    } catch (err) {
      setError("Failed to fetch revenue data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        orderStatus,
        productTypeCount,
        revenue,
        loading,
        error,
        fetchOrders,
        fetchOrderStatus,
        fetchProductTypeCount,
        fetchRevenue,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
};
