
// TypeScript definitions for Chrome extension API
interface Chrome {
  storage?: {
    local: {
      get: (keys: string[], callback: (result: Record<string, any>) => void) => void;
      set: (items: Record<string, any>, callback?: () => void) => void;
    };
  };
}

// Declare Chrome as a global variable
declare var chrome: Chrome | undefined;
