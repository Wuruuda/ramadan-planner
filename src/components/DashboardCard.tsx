
import { cn } from "@/lib/utils";

interface DashboardCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
}

export function DashboardCard({ title, children, className, ...props }: DashboardCardProps) {
  return (
    <div
      className={cn(
        "bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg animate-fadeIn",
        className
      )}
      {...props}
    >
      <h3 className="text-xl font-semibold mb-4 text-secondary">{title}</h3>
      {children}
    </div>
  );
}
