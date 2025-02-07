
import { CalendarCheck, Sunrise, Sunset } from "lucide-react";

export function MealPlanner() {
  const meals = [
    {
      type: "Suhoor",
      time: "4:30 AM",
      icon: Sunrise,
      suggestions: ["Oatmeal with dates", "Yogurt with honey", "Fresh fruits", "Whole grain bread"],
    },
    {
      type: "Iftar",
      time: "6:15 PM",
      icon: Sunset,
      suggestions: ["Dates and water", "Vegetable soup", "Grilled chicken", "Fresh vegetables"],
    },
  ];

  return (
    <div className="space-y-8">
      {meals.map((meal) => (
        <div key={meal.type} className="space-y-4 bg-gradient-to-r from-white/40 to-white/20 p-6 rounded-lg border border-white/20">
          <div className="flex items-center gap-3">
            <meal.icon className="w-6 h-6 text-primary" />
            <h4 className="font-semibold text-lg">{meal.type}</h4>
            <span className="text-sm text-muted-foreground">({meal.time})</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {meal.suggestions.map((item) => (
              <span
                key={item}
                className="px-4 py-2 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium transition-transform hover:scale-105 cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
