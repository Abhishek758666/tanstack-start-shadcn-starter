import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "Jan", revenue: 4500, orders: 120 },
  { month: "Feb", revenue: 5200, orders: 145 },
  { month: "Mar", revenue: 4800, orders: 132 },
  { month: "Apr", revenue: 6100, orders: 168 },
  { month: "May", revenue: 5800, orders: 155 },
  { month: "Jun", revenue: 7200, orders: 195 },
  { month: "Jul", revenue: 6800, orders: 182 },
  { month: "Aug", revenue: 7500, orders: 201 },
  { month: "Sep", revenue: 8200, orders: 225 },
  { month: "Oct", revenue: 7800, orders: 215 },
  { month: "Nov", revenue: 8800, orders: 242 },
  { month: "Dec", revenue: 9500, orders: 265 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--primary))",
  },
  orders: {
    label: "Orders",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export function RevenueChart() {
  return (
    <Card className="col-span-full lg:col-span-2">
      <CardHeader>
        <CardTitle className="text-xl">Revenue Overview</CardTitle>
        <CardDescription>
          Monthly revenue and orders for the current year
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              {/** biome-ignore lint/correctness/useUniqueElementIds: <explanation> */}
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-revenue)"
                  stopOpacity={0.4}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-revenue)"
                  stopOpacity={0}
                />
              </linearGradient>
              {/** biome-ignore lint/correctness/useUniqueElementIds: <explanation> */}
              <linearGradient id="ordersGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-orders)"
                  stopOpacity={0.4}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-orders)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `$${value}`}
            />
            <ChartTooltip
              content={<ChartTooltipContent />}
              cursor={{
                stroke: "hsl(var(--primary))",
                strokeWidth: 1,
              }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="var(--color-revenue)"
              strokeWidth={2}
              fill="url(#revenueGradient)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
