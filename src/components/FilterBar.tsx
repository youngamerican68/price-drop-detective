
import { categories } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface FilterBarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function FilterBar({ selectedCategory, onCategoryChange }: FilterBarProps) {
  return (
    <ScrollArea className="whitespace-nowrap pb-2">
      <div className="flex space-x-2 p-1">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(category)}
            className={
              selectedCategory === category
                ? "bg-price-drop-600 hover:bg-price-drop-700"
                : "hover:bg-price-drop-50 hover:text-price-drop-700"
            }
          >
            {category}
          </Button>
        ))}
      </div>
    </ScrollArea>
  );
}
