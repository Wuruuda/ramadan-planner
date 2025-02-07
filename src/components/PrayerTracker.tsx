
import { Moon, Sun } from "lucide-react";

export function PrayerTracker() {
  const prayers = [
    { name: "Fajr", time: "5:30 AM", completed: true },
    { name: "Dhuhr", time: "1:30 PM", completed: false },
    { name: "Asr", time: "4:45 PM", completed: false },
    { name: "Maghrib", time: "7:30 PM", completed: false },
    { name: "Isha", time: "9:00 PM", completed: false },
  ];

  return (
    <div className="grid gap-4">
      {prayers.map((prayer) => (
        <div
          key={prayer.name}
          className="flex items-center justify-between p-3 bg-background/50 rounded-lg transition-all hover:bg-background/80"
        >
          <div className="flex items-center gap-3">
            {prayer.name === "Fajr" ? (
              <Moon className="w-5 h-5 text-primary" />
            ) : (
              <Sun className="w-5 h-5 text-primary" />
            )}
            <span className="font-medium">{prayer.name}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{prayer.time}</span>
            <input
              type="checkbox"
              checked={prayer.completed}
              className="w-5 h-5 rounded border-2 border-primary text-primary focus:ring-primary"
              onChange={() => {}}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
