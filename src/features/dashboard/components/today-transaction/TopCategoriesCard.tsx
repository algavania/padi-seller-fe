import { Button, Card } from "@legion-ui/core";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { ArrowCircleRight2 } from "iconsax-react";
import { useEffect, useState } from "react";
import { useOrder } from "@/context/OrderContext";
import { Skeleton } from "@/components/ui/skeleton"; 
import { fetchGPTResponse } from "@/api/gptApi";
import moment from "moment";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function TopCategoriesCard() {
  const [recommendation, setRecommendation] = useState("");
  const [loadingRecommendation, setLoadingRecommendation] = useState(false);
  const { productTypeCount, loading, fetchProductTypeCount } = useOrder();

  useEffect(() => {
    const date = moment().format("YYYY-MM-DD");
    // const date = "2024-08-02";
    fetchProductTypeCount(date);
  }, []);

  const labels = productTypeCount?.data.map((item) => item.product_type) || [];
  const chartData = productTypeCount?.data.map((item) => item.jumlah) || [];

  const data = {
    labels: labels.length > 0 ? labels : ["Loading..."],
    datasets: [
      {
        label: "Total",
        data: chartData.length > 0 ? chartData : [0],
        backgroundColor: [
          "#0092AE",
          "#0092AE",
          "#0092AE",
          "#0092AE",
          "#0092AE",
        ],
        borderColor: [
          "#0092AE",
          "#0092AE",
          "#0092AE",
          "#0092AE",
          "#0092AE",
        ],
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        align: "center",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            return tooltipItem.dataset.label + ": " + tooltipItem.raw; 
          },
        },
      },
    },
  };

  const handleGPTRequest = async () => {
    setLoadingRecommendation(true);
    try {
      const prompt = `Berikan saya analisis tentang data saya dan berdasarkan data produk yang banyak dibeli ini ${JSON.stringify(
        productTypeCount?.data
      )}, berikan rekomendasi cara pengelolaan produk di toko ini (jelaskan dalam 1 paragraf, maksimal 3 kalimat):`;
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
    <Card
      className="w-full h-fit"
      bordered
      header={
        <div>
          <p className="font-bold body-medium">Top 5 Kategori Produk</p>
          <p className="text-[#86909C] body-very-small">
            5 produk yang banyak dibeli oleh pelanggan
          </p>
        </div>
      }
      footer={
        <div>
          <Button
            className="primary-color"
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
                    Rekomendasi cara pengelolaan produk toko Anda
                  </p>
                  <ArrowCircleRight2 size="24" color="white" variant="Bold" />
                </>
              )}
            </div>
          </Button>

          {recommendation && <p className="mt-3">{recommendation}</p>}
        </div>
      }
    >
      {loading ? (
        <div className="p-4">
          <Skeleton className="h-40" /> {/* Adjust height based on your design */}
        </div>
      ) : (
        <Bar data={data} options={options} />
      )}
    </Card>
  );
}
