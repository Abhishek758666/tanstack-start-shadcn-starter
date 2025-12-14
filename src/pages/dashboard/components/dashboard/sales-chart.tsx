import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
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
  { day: "Mon", sales: 2400, target: 2100 },
  { day: "Tue", sales: 1398, target: 2100 },
  { day: "Wed", sales: 3800, target: 2100 },
  { day: "Thu", sales: 3908, target: 2100 },
  { day: "Fri", sales: 4800, target: 2100 },
  { day: "Sat", sales: 3800, target: 2100 },
  { day: "Sun", sales: 4300, target: 2100 },
];

const chartConfig = {
  sales: {
    label: "Sales",
    color: "hsl(var(--chart-1))",
  },
  target: {
    label: "Target",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function SalesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Weekly Sales</CardTitle>
        <CardDescription>Daily sales performance vs target</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <BarChart
            data={chartData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              className="stroke-muted"
            />
            <XAxis
              dataKey="day"
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
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar
              dataKey="sales"
              fill="var(--color-sales)"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="target"
              fill="var(--color-target)"
              radius={[4, 4, 0, 0]}
              opacity={0.3}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
