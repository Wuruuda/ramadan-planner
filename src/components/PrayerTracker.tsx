
import { Moon, Sun } from "lucide-react";

export function PrayerTracker() {
  // Updated prayer times for Somalia (Mogadishu)
  const prayers = [
    { name: "Fajr", time: "4:45 AM", completed: false },
    { name: "Dhuhr", time: "12:15 PM", completed: false },
    { name: "Asr", time: "3:30 PM", completed: false },
    { name: "Maghrib", time: "6:15 PM", completed: false },
    { name: "Isha", time: "7:30 PM", completed: false },
  ];

  return (
    <div className="grid gap-4">
      {prayers.map((prayer) => (
        <div
          key={prayer.name}
          className="flex items-center justify-between p-4 bg-gradient-to-r from-white/40 to-white/20 backdrop-blur-sm rounded-lg transition-all hover:bg-white/30 border border-white/20 shadow-lg"
        >
          <div className="flex items-center gap-3">
            {prayer.name === "Fajr" ? (
              <Moon className="w-6 h-6 text-primary animate-pulse" />
            ) : (
              <Sun className="w-6 h-6 text-primary animate-pulse" />
            )}
            <span className="font-medium text-lg">{prayer.name}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-secondary">{prayer.time}</span>
            <input
              type="checkbox"
              checked={prayer.completed}
              className="w-5 h-5 rounded-full border-2 border-primary text-primary focus:ring-primary transition-transform hover:scale-110"
              onChange={() => {}}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
