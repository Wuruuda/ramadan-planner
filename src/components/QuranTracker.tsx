
import { BookOpen } from "lucide-react";

export function QuranTracker() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4 mb-6">
        <BookOpen className="w-6 h-6 text-primary" />
        <div>
          <h4 className="font-medium">Today's Goal</h4>
          <p className="text-sm text-muted-foreground">5 pages</p>
        </div>
      </div>
      
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block text-secondary">
              Progress
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-secondary">
              60%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-secondary/10">
          <div
            style={{ width: "60%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary transition-all duration-500"
          ></div>
        </div>
      </div>
    </div>
  );
}
