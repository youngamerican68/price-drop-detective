
import { cn } from "@/lib/utils";

interface PriceDropBadgeProps {
  percentDrop: number;
  className?: string;
}

export function PriceDropBadge({ percentDrop, className }: PriceDropBadgeProps) {
  // Determine the color based on the percentage drop
  const getBadgeColor = (percent: number) => {
    if (percent >= 50) return "bg-red-100 text-red-800 border-red-200";
    if (percent >= 30) return "bg-orange-100 text-orange-800 border-orange-200";
    return "bg-green-100 text-green-800 border-green-200";
  };

  return (
    <div
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        getBadgeColor(percentDrop),
        className
      )}
    >
      -{percentDrop.toFixed(percentDrop % 1 === 0 ? 0 : 1)}%
    </div>
  );
}
