import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Goal {
  name: string;
  current: number;
  target: number;
  color: string;
}

const goals: Goal[] = [
  {
    name: "Monthly Revenue",
    current: 85200,
    target: 100000,
    color: "bg-emerald-500",
  },
  { name: "New Customers", current: 423, target: 500, color: "bg-blue-500" },
  {
    name: "Orders Completed",
    current: 892,
    target: 1000,
    color: "bg-violet-500",
  },
  { name: "Support Tickets", current: 28, target: 50, color: "bg-amber-500" },
];

export function GoalsProgress() {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle className="text-xl">Monthly Goals</CardTitle>
        <CardDescription>
          Track your progress towards monthly targets
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {goals.map((goal) => {
            const percentage = Math.min(
              Math.round((goal.current / goal.target) * 100),
              100
            );
            return (
              <div key={goal.name} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{goal.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {percentage}%
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all duration-500",
                      goal.color
                    )}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>
                    {goal.name.includes("Revenue")
                      ? `$${goal.current.toLocaleString()}`
                      : goal.current.toLocaleString()}
                  </span>
                  <span>
                    Target:{" "}
                    {goal.name.includes("Revenue")
                      ? `$${goal.target.toLocaleString()}`
                      : goal.target.toLocaleString()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
