import RevenueStatisticsCard from "./RevenueStatisticsCard";
import StatisticsCard from "./StatisticsCard";

export default function StatisticsSection() {
  return (
    <div>
      <h2 className="heading-6 mt-3">Ringkasan Statistik Hari Ini</h2>
      <h3 className="body-small mt-3">
        Pantau kondisi pesanan dan pendapatanmu hari ini
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-3">
        <StatisticsCard />
        <RevenueStatisticsCard />
      </div>
    </div>
  );
}
