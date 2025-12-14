import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          {/* Badge */}
          <Badge variant="secondary" className="gap-1.5 py-1.5 px-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>New: AI-powered analytics now available</span>
          </Badge>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Build Your Business
            <br />
            <span className="text-primary">Faster Than Ever</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            The all-in-one platform for modern businesses. Track your revenue,
            manage customers, and scale your operations with powerful analytics
            and automation tools.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2" asChild>
              <Link to="/dashboard">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#features">See How It Works</a>
            </Button>
          </div>

          {/* Social proof */}
          <div className="flex flex-col items-center gap-3 pt-8">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-background bg-linear-to-br from-primary/60 to-primary flex items-center justify-center text-xs font-medium text-primary-foreground"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">2,000+</span>{" "}
              businesses already growing with StartKit
            </p>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16 md:mt-24 relative">
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="rounded-xl border bg-card/50 shadow-2xl overflow-hidden backdrop-blur">
            <div className="border-b bg-muted/50 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-background/80 rounded-md px-4 py-1 text-xs text-muted-foreground">
                  dashboard.startkit.com
                </div>
              </div>
            </div>
            <img
              src="/dashboard-light.png"
              alt="Dashboard Preview"
              className="w-full dark:hidden"
            />
            <img
              src="/dashboard-dark.png"
              alt="Dashboard Preview"
              className="w-full hidden dark:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
