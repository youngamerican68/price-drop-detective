
// Check if Chrome API is available
const isChromeExtension = typeof chrome !== 'undefined' && chrome.storage;

// Fallback to localStorage for development environment
const saveToStorage = (key: string, value: any): void => {
  if (isChromeExtension) {
    chrome.storage.local.set({ [key]: value });
  } else {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const getFromStorage = async (key: string): Promise<any> => {
  if (isChromeExtension) {
    return new Promise((resolve) => {
      chrome.storage.local.get([key], (result) => {
        resolve(result[key]);
      });
    });
  } else {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }
};

const saveApiKey = (apiKey: string): void => {
  saveToStorage('ebayApiKey', apiKey);
};

const getApiKey = async (): Promise<string | null> => {
  return await getFromStorage('ebayApiKey');
};

export { 
  saveToStorage, 
  getFromStorage, 
  isChromeExtension, 
  saveApiKey, 
  getApiKey 
};

