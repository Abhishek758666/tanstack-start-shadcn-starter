import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

const plans: PricingPlan[] = [
  {
    name: "Starter",
    description: "Perfect for small teams just getting started",
    price: "$29",
    period: "/month",
    features: [
      "Up to 5 team members",
      "Basic analytics dashboard",
      "1,000 customers",
      "Email support",
      "API access",
    ],
  },
  {
    name: "Pro",
    description: "Best for growing businesses",
    price: "$79",
    period: "/month",
    highlighted: true,
    badge: "Most Popular",
    features: [
      "Up to 25 team members",
      "Advanced analytics & reports",
      "10,000 customers",
      "Priority support",
      "API access",
      "Custom integrations",
      "Automation workflows",
    ],
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    price: "$199",
    period: "/month",
    features: [
      "Unlimited team members",
      "Enterprise analytics",
      "Unlimited customers",
      "24/7 dedicated support",
      "Advanced API access",
      "Custom integrations",
      "Advanced security",
      "SLA guarantee",
    ],
  },
];

export function Pricing() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your business. All plans include a 14-day
            free trial with no credit card required.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "relative flex flex-col",
                plan.highlighted &&
                  "border-primary shadow-lg shadow-primary/10 scale-105"
              )}
            >
              {plan.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  {plan.badge}
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.highlighted ? "default" : "outline"}
                  asChild
                >
                  <Link to="/dashboard">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
