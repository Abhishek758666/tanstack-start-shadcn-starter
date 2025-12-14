import {
  ArrowDownToLine,
  DollarSign,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  CategoryChart,
  GoalsProgress,
  RecentActivity,
  RevenueChart,
  SalesChart,
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

      {/* Goals Progress */}
      <GoalsProgress />

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-3">
        <RevenueChart />
        <RecentActivity />
      </div>

      {/* Bottom Charts Row */}
      <div className="grid gap-6 md:grid-cols-2">
        <SalesChart />
        <CategoryChart />
      </div>

      {/* Quick Actions Footer */}
      <div className="rounded-lg border bg-card p-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2">
              <ArrowDownToLine className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Download your monthly report</p>
              <p className="text-sm text-muted-foreground">
                Get a comprehensive breakdown of this month's performance
              </p>
            </div>
          </div>
          <button
            type="button"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Download Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
