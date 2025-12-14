import { ThemeProvider } from "@/components/providers/theme-provider.client";
import { FAQ, Footer, Hero, Navbar, Pricing, Stats } from "./components";

const LandingPage = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="startkit-theme">
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Pricing />
          <FAQ />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default LandingPage;
