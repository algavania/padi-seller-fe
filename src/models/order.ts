import { Meta } from "./api";

// Order status response
export interface OrderTodayStatus {
  status: string;
  id: number;
  total: number;
}

export interface OrderStatus {
  date: string;
  value: number;
}

export interface OrderStatusResponse {
  meta: Meta;
  data: {
    today: OrderTodayStatus[];
    orders: OrderStatus[];
    grandTotal: number;
    previousDayComparison: string;
  };
}

export interface ProductTypeCount {
  jumlah: number;
  product_type: string;
}

export interface ProductTypeCountResponse {
  meta: Meta;
  data: ProductTypeCount[];
}

export interface RevenueResponse {
  meta: Meta;
  data: {
    previousDayComparison: string;
    revenues: OrderStatus[];

  };
}
