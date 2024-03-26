import { cn } from "@/lib/utils";

export const Loading = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex gap-2", className)}>
      <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
      <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
      <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
    </div>
  );
};
