import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const activities = [
  {
    id: 1,
    user: {
      name: "Sarah Johnson",
      avatar: "",
      initials: "SJ",
    },
    action: "created a new order",
    target: "#ORD-7823",
    time: "2 min ago",
    status: "new",
  },
  {
    id: 2,
    user: {
      name: "Mike Chen",
      avatar: "",
      initials: "MC",
    },
    action: "updated inventory for",
    target: 'MacBook Pro 14"',
    time: "15 min ago",
    status: "update",
  },
  {
    id: 3,
    user: {
      name: "Emily Davis",
      avatar: "",
      initials: "ED",
    },
    action: "completed payment for",
    target: "#INV-2341",
    time: "1 hour ago",
    status: "success",
  },
];

const statusColors = {
  new: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20",
  update: "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20",
  success: "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20",
};

export function RecentActivity() {
  return (
    <Card className="col-span-full lg:col-span-1">
      <CardHeader>
        <CardTitle className="text-xl">Recent Activity</CardTitle>
        <CardDescription>Latest actions from your team</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-4 rounded-lg p-3 transition-colors hover:bg-muted/50"
            >
              <Avatar className="h-10 w-10 border-2 border-background shadow-sm">
                <AvatarImage src={activity.user.avatar} />
                <AvatarFallback className="bg-primary/10 text-primary font-medium">
                  {activity.user.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm">
                  <span className="font-medium">{activity.user.name}</span>{" "}
                  <span className="text-muted-foreground">
                    {activity.action}
                  </span>{" "}
                  <span className="font-medium text-primary">
                    {activity.target}
                  </span>
                </p>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className={
                      statusColors[activity.status as keyof typeof statusColors]
                    }
                  >
                    {activity.status}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {activity.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
