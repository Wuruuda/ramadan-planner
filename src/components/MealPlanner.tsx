
import { CalendarCheck } from "lucide-react";

export function MealPlanner() {
  const meals = [
    {
      type: "Suhoor",
      time: "4:30 AM",
      suggestions: ["Oatmeal", "Dates", "Yogurt", "Fruits"],
    },
    {
      type: "Iftar",
      time: "7:30 PM",
      suggestions: ["Dates", "Soup", "Grilled Chicken", "Vegetables"],
    },
  ];

  return (
    <div className="space-y-6">
      {meals.map((meal) => (
        <div key={meal.type} className="space-y-3">
          <div className="flex items-center gap-2">
            <CalendarCheck className="w-5 h-5 text-primary" />
            <h4 className="font-medium">{meal.type}</h4>
            <span className="text-sm text-muted-foreground">({meal.time})</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {meal.suggestions.map((item) => (
              <span
                key={item}
                className="px-3 py-1 bg-accent/10 text-accent-foreground rounded-full text-sm"
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
