import OrderTable from "./components/newest-transaction/OrderTable";
import OrderStatusDropdown from "./components/newest-transaction/OrderStatusDropdown";
import { useState } from "react";
import { Breadcrumb } from "@legion-ui/core";
import { Link } from "react-router-dom";

export default function AllOrderPage() {
    const [statusFilter, setStatusFilter] = useState<string | null>(null);

  return (
    <div className="p-6">
        <Breadcrumb
        className="mb-6"
  items={[
    {
      label: <Link to="/dashboard">Dashboard</Link>
    },
    {
        label: <span className="text-black">Semua Pesanan</span>
      },
  ]}
  separator="/"
/>
      <OrderStatusDropdown onChange={setStatusFilter} />
      <div className="mb-4"></div>
      <OrderTable statusFilter={statusFilter} limit={undefined} />
    </div>
  );
}
