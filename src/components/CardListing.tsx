
import { Card, CardContent } from "@/components/ui/card";
import { CardListing as CardListingType, formatPrice, formatTimeSince } from "@/lib/mockData";
import { PriceDropBadge } from "./PriceDropBadge";
import { ExternalLink } from "lucide-react";

interface CardListingProps {
  listing: CardListingType;
}

export function CardListing({ listing }: CardListingProps) {
  const {
    title,
    image,
    currentPrice,
    previousPrice,
    percentDrop,
    link,
    timeDropped
  } = listing;

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="flex flex-col">
          <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute top-2 right-2">
              <PriceDropBadge percentDrop={percentDrop} />
            </div>
          </div>

          <div className="p-4">
            <h3 className="font-medium text-sm line-clamp-2 mb-1 h-10">
              {title}
            </h3>
            
            <div className="flex items-baseline mt-1">
              <span className="text-lg font-bold text-price-drop-700">
                {formatPrice(currentPrice)}
              </span>
              <span className="ml-2 text-xs text-gray-500 line-through">
                {formatPrice(previousPrice)}
              </span>
            </div>
            
            <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
              <span>{formatTimeSince(timeDropped)}</span>
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-price-drop-600 hover:text-price-drop-800 transition-colors"
                aria-label="View on eBay"
              >
                <ExternalLink size={14} className="mr-1" />
                View
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
