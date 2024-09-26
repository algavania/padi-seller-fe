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
import NewTransactionDialog from "./NewTransactionDialog";

export default function DashboardPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

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
