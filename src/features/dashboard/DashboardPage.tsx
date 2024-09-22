import NavbarCore from "@/features/dashboard/components/NavbarCore";
import Sidebar from "./components/Sidebar";
import TopSection from "./components/top-section/TopSection";
import SellerInfoCard from "./components/seller-info/SellerInfoCard";
import ImportantInfoCard from "./components/important-info/ImportantInfoCard";
import OrderStatusSection from "./components/order-status/OrderStatusSection";
import StatisticsSection from "./components/statistics-section/StatisticsSection";

export default function DashboardPage() {
  return (
    <main>
      <nav>
        <NavbarCore />
      </nav>
      <div className="flex">
        <div className="w-sidebar">
          <Sidebar />
        </div>
        <div className="w-full px-12">
          <TopSection />
          <div className="mt-5"></div>
          <div className="flex gap-4 mb-5">
            <div className="w-full flex flex-col gap-5">
              <SellerInfoCard />
              <OrderStatusSection />
            </div>
            <ImportantInfoCard />
          </div>
          <StatisticsSection />
        </div>
      </div>
    </main>
  );
}
