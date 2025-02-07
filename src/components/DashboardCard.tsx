
import { cn } from "@/lib/utils";

interface DashboardCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
}

export function DashboardCard({ title, children, className, ...props }: DashboardCardProps) {
  return (
    <div
      className={cn(
        "bg-white/80 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-white/20 transition-all hover:bg-white/85 animate-fadeIn",
        className
      )}
      {...props}
    >
      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-secondary border-b pb-2 border-secondary/20">{title}</h3>
      {children}
    </div>
  );
}
