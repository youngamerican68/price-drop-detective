
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { saveApiKey, getApiKey } from "@/lib/storage";
import { useToast } from "@/hooks/use-toast";

export const ApiKeyManager = () => {
  const [apiKey, setApiKey] = useState('');
  const [storedKey, setStoredKey] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    const fetchStoredKey = async () => {
      const savedKey = await getApiKey();
      if (savedKey) {
        setStoredKey(savedKey.substring(0, 10) + '...');
      }
    };
    fetchStoredKey();
  }, []);

  const handleSaveApiKey = () => {
    if (apiKey.trim()) {
      saveApiKey(apiKey);
      setStoredKey(apiKey.substring(0, 10) + '...');
      toast({
        title: "API Key Saved",
        description: "Your eBay API key has been securely stored."
      });
      setApiKey('');
    }
  };

  return (
    <div className="space-y-2">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          eBay API Key
        </label>
        <div className="flex space-x-2 mt-1">
          <Input 
            type="text" 
            placeholder="Enter your eBay API key" 
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="flex-grow"
          />
          <Button onClick={handleSaveApiKey}>
            Save Key
          </Button>
        </div>
      </div>
      {storedKey && (
        <p className="text-sm text-gray-500">
          Stored Key: {storedKey}
        </p>
      )}
    </div>
  );
};
