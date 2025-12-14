import { DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react";
import {
  RecentActivity,
  RevenueChart,
  StatsCard,
} from "./components/dashboard";

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-6 p-4 md:p-6">
      {/* Page Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your business.
        </p>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Revenue"
          value="$85,231.89"
          change="+20.1% from last month"
          changeType="positive"
          icon={DollarSign}
        />
        <StatsCard
          title="New Customers"
          value="+2,350"
          change="+180.1% from last month"
          changeType="positive"
          icon={Users}
        />
        <StatsCard
          title="Total Orders"
          value="12,234"
          change="+19% from last month"
          changeType="positive"
          icon={ShoppingCart}
        />
        <StatsCard
          title="Conversion Rate"
          value="3.2%"
          change="-0.4% from last month"
          changeType="negative"
          icon={TrendingUp}
        />
      </div>

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-3">
        <RevenueChart />
        <RecentActivity />
      </div>
    </div>
  );
};

export default DashboardPage;
