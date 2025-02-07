
import { DashboardCard } from "@/components/DashboardCard";
import { PrayerTracker } from "@/components/PrayerTracker";
import { QuranTracker } from "@/components/QuranTracker";
import { MealPlanner } from "@/components/MealPlanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/10 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Ramadan Mubarak
          </h1>
          <p className="text-lg text-muted-foreground">
            Track your spiritual journey this blessed month
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardCard title="Prayer Times" className="lg:col-span-2">
            <PrayerTracker />
          </DashboardCard>

          <DashboardCard title="Quran Progress">
            <QuranTracker />
          </DashboardCard>

          <DashboardCard title="Meal Planner" className="lg:col-span-3">
            <MealPlanner />
          </DashboardCard>
        </div>
      </div>
    </div>
  );
};

export default Index;
