import { Skeleton } from "@/components/ui/skeleton";
import { useOrder } from "@/context/OrderContext";
import { Button, Card } from "@legion-ui/core";
import { ArrowCircleRight2 } from "iconsax-react";
import { HelpCircle, MoveDown, MoveUp } from "lucide-react";
import { useState } from "react";
import OrderLineChart from "./OrderLineChart";

export default function StatisticsCard() {
  const [recommendation, _] = useState("");
  const { orderStatus, loading } = useOrder();
  let previousDayComparison = orderStatus?.data.previousDayComparison || "0%";
  const isNegative = previousDayComparison.startsWith("-");
  if (isNegative) {
    previousDayComparison = previousDayComparison.replace("-", "");
  }

  return (
    <Card bordered className="min-w-full">
      {loading ? (
        <div className="p-4">
          <Skeleton className="h-6 mb-2" />
          <Skeleton className="h-10 mb-2" />
          <Skeleton className="h-4 mb-1" />
          <Skeleton className="h-4" />
        </div>
      ) : (
        <div className="grid grid-cols-7">
          <div className="col-span-3">
            <div className="h-full  flex flex-col justify-between">
              <div>
                <div className="flex justify-start items-center gap-3">
                  <p className="font-bold body-small text-gray-900">
                    Pesanan Hari Ini
                  </p>
                  <HelpCircle size="20" fill="#C1C4C8" color="white" />
                </div>
                <p className="text-gray-900 heading-5">
                  {orderStatus?.data.today.length || 0}
                </p>
              </div>
              <div className="flex justify-start items-center gap-2 mt-2">
                <div
                  className={`rounded-full px-2 py-1 flex gap-1 w-fit items-center justify-center ${
                    isNegative ? "bg-danger-100" : "bg-success-50 "
                  }`}
                >
                  {isNegative ? (
                    <MoveDown
                      strokeWidth={3}
                      className="text-danger-500"
                      size={14}
                    />
                  ) : (
                    <MoveUp
                      strokeWidth={3}
                      className="text-success-100"
                      size={14}
                    />
                  )}
                  <p
                    className={`body-very-small font-semibold ${
                      isNegative ? "text-danger-500" : "text-success-100"
                    }`}
                  >
                    {previousDayComparison}
                  </p>
                </div>
                <p className="text-gray-500 body-very-small">
                  dari minggu kemarin
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-4 ">
            <OrderLineChart orders={orderStatus?.data.orders} />
          </div>
        </div>
      )}
      <div className="mt-4"></div>
      <Button className="primary-color" block>
        <div className="flex justify-center items-center w-full gap-3">
          <p className="font-medium">
            Rekomendasi untuk meningkatkan pesanan di toko Anda
          </p>
          <ArrowCircleRight2 size="24" color="white" variant="Bold" />
        </div>
      </Button>
      {recommendation && (
        <div className="mt-2 text-gray-900">{recommendation}</div>
      )}
    </Card>
  );
}
