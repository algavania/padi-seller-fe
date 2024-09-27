import { useOrder } from "@/context/OrderContext";
import { formatRupiah } from "@/utils/currencyFormatter";
import { Table } from "@legion-ui/core";
import moment from "moment";
import { useEffect, useState } from "react";
import Chip from "../Chip";
import TransactionDetailDialog from "../dialogs/TransactionDetailDialog";

interface OrderTableProps {
  statusFilter: string | null;
  limit?: number;
}

export default function OrderTable({ statusFilter, limit }: OrderTableProps) {
  const { orders, fetchOrders, loading } = useOrder();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleDetailClick = (order: any) => {
    setSelectedOrder(order);
    setIsDialogOpen(true);
  };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Diproses Penjual":
        return {
          textColor: "#F79009",
          bgColor: "#FEEFC6",
        };
      case "Siap Dikirim":
        return {
          textColor: "#257CFD",
          bgColor: "#DCEAFF",
        };
      case "Siap Penagihan":
        return {
          textColor: "#875BF7",
          bgColor: "#ECE9FE",
        };
      case "Pesanan Baru":
        return {
          textColor: "#12B76A",
          bgColor: "#D1FADF",
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
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  const filteredOrders = statusFilter != null
    ? orders?.data.filter((order: any) => order.status.name === statusFilter)
    : orders?.data;

  return (
    <>
      <div className="overflow-x-auto"> {/* Added container for horizontal scrolling */}
        <Table hoverable>
          <thead>
            <tr>
              <th className="text-left">Order ID</th>
              <th className="text-left">Pelanggan</th>
              <th className="text-left">Tanggal Waktu</th>
              <th className="text-left">Total Bayar</th>
              <th className="text-left">Status</th>
              <th className="text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders && filteredOrders.length > 0 ? (
              filteredOrders
                .slice(0, limit || filteredOrders.length)
                .map((order: any) => {
                  const { textColor, bgColor } = getStatusStyles(order.status.name);
                  return (
                    <tr key={order._id} onClick={() => handleDetailClick(order)}>
                      <td>{order.transaction_id}</td>
                      <td>{order.buyer_name}</td>
                      <td>
                        {moment(order.createdAt).utc().format("D MMMM YYYY, HH:mm")}
                      </td>
                      <td>{formatRupiah(order.price_total)}</td>
                      <td>
                        <Chip
                          label={order.status.name}
                          bgColor={bgColor}
                          textColor={textColor}
                        />
                      </td>
                      <td>
                        <div
                          className="cursor-pointer border rounded-lg border-[#DCDFE3] p-1"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent the row click event
                            handleDetailClick(order);
                          }}
                        >
                          <p className="body-very-small font-semibold text-[#667085] text-center">
                            Detail
                          </p>
                        </div>
                      </td>
                    </tr>
                  );
                })
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500">
                  Tidak ada data
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>

      {selectedOrder != null && (
        <TransactionDetailDialog
          isOpen={isDialogOpen}
          order={selectedOrder}
          chipBg={getStatusStyles(selectedOrder.status.name).bgColor}
          chipColor={getStatusStyles(selectedOrder.status.name).textColor}
          onClose={() => setIsDialogOpen(false)}
        />
      )}
    </>
  );
}
