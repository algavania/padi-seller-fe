import NavbarCore from "@/features/dashboard/components/NavbarCore";
import Sidebar from "./components/Sidebar";
import moment from "moment";
import TopSection from "./components/TopSection";
import SellerInfoCard from "./components/SellerInfoCard";
import ImportantInfoCard from "./components/ImportantInfoCard";
import OrderStatusSection from "./components/OrderStatusSection";

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
          <div className="flex gap-4">
            <div className="w-full flex flex-col gap-5">
              <SellerInfoCard />
              <OrderStatusSection/>
            </div>
            <ImportantInfoCard />
          </div>
        </div>
      </div>
    </main>
  );
}
