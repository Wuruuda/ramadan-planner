
import { CalendarCheck, Sunrise, Sunset } from "lucide-react";

export function MealPlanner() {
  const meals = [
    {
      type: "Suhoor",
      time: "4:30 AM",
      icon: Sunrise,
      image: "https://images.unsplash.com/photo-1593253787226-567eda4ad32d?auto=format&fit=crop&q=80&w=1000",
      suggestions: ["Oatmeal with dates", "Yogurt with honey", "Fresh fruits", "Whole grain bread"],
    },
    {
      type: "Iftar",
      time: "6:15 PM",
      icon: Sunset,
      image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?auto=format&fit=crop&q=80&w=1000",
      suggestions: ["Dates and water", "Vegetable soup", "Grilled chicken", "Fresh vegetables"],
    },
  ];

  return (
    <div className="space-y-8">
      {meals.map((meal) => (
        <div 
          key={meal.type} 
          className="space-y-4 bg-gradient-to-r from-white/40 to-white/20 p-6 rounded-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] relative overflow-hidden group"
        >
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
            <img 
              src={meal.image} 
              alt={meal.type} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <meal.icon className="w-6 h-6 text-primary animate-pulse" />
              <h4 className="font-semibold text-lg">{meal.type}</h4>
              <span className="text-sm text-muted-foreground">({meal.time})</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {meal.suggestions.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 hover:bg-accent/20 cursor-pointer animate-fadeIn"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
