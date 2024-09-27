import NavbarCore from "@/features/dashboard/components/NavbarCore";
import Sidebar from "./components/Sidebar";
import TopSection from "./components/top-section/TopSection";
import SellerInfoCard from "./components/seller-info/SellerInfoCard";
import ImportantInfoCard from "./components/important-info/ImportantInfoCard";
import OrderStatusSection from "./components/order-status/OrderStatusSection";
import StatisticsSection from "./components/statistics-section/StatisticsSection";
import NewestTransactionSection from "./components/newest-transaction/NewestTransactionSection";
import TodayTransactionSection from "./components/today-transaction/TodayTransactionSection";
import Footer from "@/components/Footer";
import { useState } from "react";
import NewTransactionDialog from "./components/dialogs/NewTransactionDialog";

export default function DashboardPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <main>
      <nav>
        <NavbarCore />
      </nav>
      <div className="flex pb-10">
        <div className="w-sidebar">
          <Sidebar />
        </div>
        <div className="w-full px-16 md:px-12">
          <TopSection />
          <div className="mt-5"></div>
          <div className="flex flex-col md:flex-row gap-4 mb-5">
            <div className="w-full md:w-2/3 flex flex-col gap-5">
              <SellerInfoCard />
              <OrderStatusSection />
            </div>

            <div className="w-full md:w-1/3">
              <ImportantInfoCard />
            </div>
          </div>

          <StatisticsSection />
          <div className="mt-5"></div>
          <NewestTransactionSection />
          <div className="mt-5"></div>
          <TodayTransactionSection />
          <div className="mt-5"></div>
        </div>
      </div>
      <Footer />

      <NewTransactionDialog isOpen={isDialogOpen} onClose={handleCloseDialog} />
    </main>
  );
}
