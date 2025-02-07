
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
        <header className="text-center mb-12 animate-fadeIn relative">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-32 h-32 md:w-40 md:h-40 opacity-80 animate-pulse">
            <img 
              src="/lovable-uploads/ed656654-b9e6-4309-9b08-9fb3af667b01.png" 
              alt="Ramadan Lantern" 
              className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-4 drop-shadow-lg mt-16">
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

          <DashboardCard title="Quran Progress" className="relative group">
            <div className="absolute -top-12 right-4 w-24 h-24 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              <img 
                src="/lovable-uploads/d37e9960-e261-4088-8db7-184bb475a188.png" 
                alt="Quran Mushaf" 
                className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
            <QuranTracker />
          </DashboardCard>

          <DashboardCard title="Meal Planner" className="lg:col-span-3">
            <MealPlanner />
          </DashboardCard>
        </div>

        <footer className="text-center mt-12 pb-4 text-muted-foreground animate-fadeIn">
          <p className="text-sm">
            © {new Date().getFullYear()} Warda Omar. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
