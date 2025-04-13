
import { useState, useEffect } from "react";
import { CardListing } from "@/components/CardListing";
import { FilterBar } from "@/components/FilterBar";
import { EmptyState } from "@/components/EmptyState";
import { ApiKeyManager } from "@/components/ApiKeyManager";
import { mockListings } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { saveToStorage, getFromStorage } from "@/lib/storage";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [filteredListings, setFilteredListings] = useState(mockListings);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Load saved category from storage if available
  useEffect(() => {
    const loadSavedCategory = async () => {
      const savedCategory = await getFromStorage('selectedCategory');
      if (savedCategory) {
        setSelectedCategory(savedCategory);
      }
    };
    
    loadSavedCategory();
  }, []);

  // Filter listings whenever the selected category changes
  useEffect(() => {
    if (selectedCategory === "All Categories") {
      setFilteredListings(mockListings);
    } else {
      setFilteredListings(
        mockListings.filter((listing) => listing.category === selectedCategory)
      );
    }

    // Save selected category to storage
    saveToStorage('selectedCategory', selectedCategory);
  }, [selectedCategory]);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  // Simulate refresh action
  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate an API call with a timeout
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto py-4 px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-xl font-bold bg-gradient-to-r from-price-drop-700 to-price-drop-500 bg-clip-text text-transparent">
                Price Drop Detective
              </h1>
              <span className="ml-2 px-2 py-0.5 bg-price-drop-100 text-price-drop-800 text-xs rounded-full">
                eBay Cards
              </span>
            </div>
            <Button
              size="sm"
              variant="ghost"
              onClick={handleRefresh}
              className="flex items-center gap-1"
              disabled={isRefreshing}
            >
              <RefreshCw
                size={16}
                className={isRefreshing ? "animate-spin" : ""}
              />
              <span className="text-xs">{isRefreshing ? "Refreshing..." : "Refresh"}</span>
            </Button>
          </div>
          
          {/* Filters */}
          <div className="mt-2">
            <FilterBar
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-4 px-4 space-y-4">
        {/* API Key Manager */}
        <ApiKeyManager />

        {/* Statistics */}
        <div className="mb-4 bg-white rounded-lg p-4 shadow-sm border">
          <h2 className="text-sm font-medium text-gray-500 mb-2">
            25%+ Price Drops in the Last 24 Hours
          </h2>
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold">{filteredListings.length} Items</p>
            <div className="text-xs text-gray-500 flex items-center">
              <span>Min: 25% drop</span>
              <span className="mx-2">•</span>
              <span>Updated 5 min ago</span>
            </div>
          </div>
        </div>

        {/* Listings Grid */}
        {filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-1">
            {filteredListings.map((listing) => (
              <CardListing key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <EmptyState message={`No price drops found in ${selectedCategory}`} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-3 px-4 text-center text-xs text-gray-500">
        <p>Price Drop Detective • Collectible Cards Edition • v1.0</p>
      </footer>
    </div>
  );
};

export default Index;
