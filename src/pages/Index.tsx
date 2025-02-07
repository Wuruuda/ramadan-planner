
import { DashboardCard } from "@/components/DashboardCard";
import { PrayerTracker } from "@/components/PrayerTracker";
import { QuranTracker } from "@/components/QuranTracker";
import { MealPlanner } from "@/components/MealPlanner";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-[url('https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=2000')] bg-cover bg-center bg-fixed before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-background/95 before:to-accent/80 before:backdrop-blur-sm relative p-4 md:p-8"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-4 drop-shadow-lg">
            Ramadan Mubarak
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Track your spiritual journey this blessed month
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slideIn">
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
