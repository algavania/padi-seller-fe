import TodayTransactionCard from "./TodayTransactionCard";
import TopCategoriesCard from "./TopCategoriesCard";

export default function TodayTransactionSection() {
  return (
    <div>
      <h2 className="heading-6">Transaksi Hari Ini</h2>
      <h3 className="body-small mt-3">
        Pantau transaksi harianmu dan produk yang banyak dibeli oleh pelanggan
      </h3>
      <div className="w-full mt-3 grid gap-4 grid-cols-2">
        <TodayTransactionCard />
        <TopCategoriesCard />
      </div>
    </div>
  );
}
