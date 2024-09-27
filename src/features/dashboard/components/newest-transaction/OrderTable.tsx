import { Skeleton } from "@/components/ui/skeleton";
import { useOrder } from "@/context/OrderContext";
import { formatRupiah } from "@/utils/currencyFormatter";
import { Table } from "@legion-ui/core";
import moment from "moment";
import { useEffect } from "react";

interface OrderTableProps {
  statusFilter: string | null;
  limit?: number;
}

export default function OrderTable({ statusFilter, limit }: OrderTableProps) {
  const { orders, fetchOrders, loading } = useOrder();

  useEffect(() => {
    fetchOrders();
  }, []);

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Diproses Penjual":
        return {
          textColor: "#F79009",
          bgColor: "#FEEFC6",
        };
      case "Siap Dikirim":
        return {
          textColor: "#D1FADF",
          bgColor: "#FEEFC6",
        };
      case "Siap Penagihan":
        return {
          textColor: "#F04438",
          bgColor: "#FEE4E2",
        };
      case "Pesanan Baru":
        return {
          textColor: "#1851A5",
          bgColor: "#DCEAFF",
        };
      default:
        return {
          textColor: "#000000",
          bgColor: "#FFFFFF",
        };
    }
  };

  if (loading) {
    return (
      <Table hoverable>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Pelanggan</th>
            <th>Tanggal Waktu</th>
            <th>Total Bayar</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, index) => (
            <tr key={index}>
              <td>
                <Skeleton className="h-4 w-24" />
              </td>
              <td>
                <Skeleton className="h-4 w-32" />
              </td>
              <td>
                <Skeleton className="h-4 w-32" />
              </td>
              <td>
                <Skeleton className="h-4 w-24" />
              </td>
              <td>
                <Skeleton className="h-4 w-24" />
              </td>
              <td>
                <Skeleton className="h-4 w-16" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  // Filter orders based on statusFilter
  const filteredOrders = statusFilter
    ? orders?.data.filter((order: any) => order.status.name === statusFilter)
    : orders?.data;

  return (
    <Table hoverable>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Pelanggan</th>
          <th>Tanggal Waktu</th>
          <th>Total Bayar</th>
          <th>Status</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {filteredOrders?.slice(0, limit || filteredOrders.length).map((order: any) => {
          const { textColor, bgColor } = getStatusStyles(order.status.name);

          return (
            <tr key={order._id}>
              <td>{order.transaction_id}</td>
              <td>{order.buyer_name}</td>
              <td>
                {moment(order.createdAt).utc().format("D MMMM YYYY, HH:mm")}
              </td>
              <td>{formatRupiah(order.price_total)}</td>
              <td>
                <div
                  className="font-semibold w-fit rounded-full py-1 px-2"
                  style={{ color: textColor, backgroundColor: bgColor }}
                >
                  {order.status.name}
                </div>
              </td>
              <td>
                <div className="cursor-pointer border rounded-lg border-[#DCDFE3] p-1">
                  <p className="body-very-small font-semibold text-[#667085] text-center">
                    Detail
                  </p>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
