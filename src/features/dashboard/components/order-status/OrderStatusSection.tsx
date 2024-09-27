import { useEffect } from "react";
import OrderStatusItem from "./OrderStatusItem";
import { useOrder } from "@/context/OrderContext";
import { Skeleton } from "@/components/ui/skeleton";
import { Snackbar } from "@legion-ui/core";
import { OrderTodayStatus } from "@/models/order";
import moment from "moment";

export default function OrderStatusSection() {
  const { orderStatus, loading, error, fetchOrderStatus } = useOrder();

  useEffect(() => {
    const date = moment().format("YYYY-MM-DD");
    // const date = "2024-08-02";
    fetchOrderStatus(date);
  }, []);
  const filteredStatus = orderStatus?.data.today.sort((a: any, b: any) => {
    return a.id - b.id;
  });
  
  return (
    <div>
      <h2 className="heading-6">Jumlah Pesanan Per Status</h2>
      <h3 className="body-small mt-3">
        Pantau jumlah pesananmu di setiap status pesanan untuk menjaga pelayanan
        tokomu
      </h3>

      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} className="h-20 w-full rounded-md" />
          ))}
        </div>
      ) : error ? (
        <Snackbar message={error} />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                    {filteredStatus &&
            filteredStatus.map((status: OrderTodayStatus) => (
              <OrderStatusItem
                key={status.id}
                title={status.status}
                total={status.total}
              />
            ))}

        </div>
      )}
    </div>
  );
}
