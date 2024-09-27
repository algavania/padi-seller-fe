import { Skeleton } from "@/components/ui/skeleton";
import { useOrder } from "@/context/OrderContext";
import { Button, Card } from "@legion-ui/core";
import { ArrowCircleRight2 } from "iconsax-react";
import { HelpCircle, MoveDown, MoveUp } from "lucide-react";
import { useState } from "react";
import OrderLineChart from "./OrderLineChart";
import { fetchGPTResponse } from "@/api/gptApi";

export default function StatisticsCard() {
  const [recommendation, setRecommendation] = useState("");
  const [loadingRecommendation, setLoadingRecommendation] = useState(false);
  const { orderStatus, loading } = useOrder();
  let previousDayComparison = orderStatus?.data.previousDayComparison || "0%";
  const isNegative = previousDayComparison.startsWith("-");
  if (isNegative) {
    previousDayComparison = previousDayComparison.replace("-", "");
  }

  const handleGPTRequest = async () => {
    setLoadingRecommendation(true);
    try {
      const prompt = `Berikan saya analisis tentang data saya dan berikan rekomendasi untuk meningkatkan penjualan saya berdasarkan data (jelaskan dalam 1 paragraf, maksimal 3 kalimat): ${JSON.stringify(
        orderStatus?.data.orders
      )}`;
      const response = await fetchGPTResponse(prompt);
      setRecommendation(response);
    } catch (error) {
      console.error("Failed to fetch recommendation:", error);
      setRecommendation("Failed to get a recommendation.");
    } finally {
      setLoadingRecommendation(false);
    }
  };

  return (
    <Card bordered className="w-full h-fit">
      {loading ? (
        <div className="p-4">
          <Skeleton className="h-6 mb-2" />
          <Skeleton className="h-10 mb-2" />
          <Skeleton className="h-4 mb-1" />
          <Skeleton className="h-4" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          <div className="col-span-1 md:col-span-3 flex flex-col justify-between">
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
                  {parseFloat(previousDayComparison).toString()}%
                </p>
              </div>
              <p className="text-gray-500 body-very-small">dari hari kemarin</p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-4">
            <OrderLineChart orders={orderStatus?.data.orders} />
          </div>
        </div>
      )}
      <div className="mt-4"></div>
      <Button
        className="primary-color text-center"
        block
        onClick={handleGPTRequest}
        disabled={loadingRecommendation}
      >
        <div className="flex justify-center items-center w-full gap-3">
          {loadingRecommendation ? (
            <span className="text-white">Loading...</span>
          ) : (
            <>
              <p className="font-medium">
                Rekomendasi untuk meningkatkan pesanan di toko Anda
              </p>
              <ArrowCircleRight2 size="24" color="white" variant="Bold" />
            </>
          )}
        </div>
      </Button>
      {recommendation && (
        <div className="mt-4 text-gray-900">{recommendation}</div>
      )}
    </Card>
  );
}
