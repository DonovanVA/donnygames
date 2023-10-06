export const POKERLOCALSTORAGEKEYS = {
  app: "app",
  winner: "winner",
};

// Function to load app data from local storage
export const loadAppDataFromLocalStorage = (key: string) => {
  const storedAppData = localStorage.getItem(key);
  if (storedAppData) {
    return JSON.parse(storedAppData);
  }
  return null; // Return null if no data is found in local storage
};

export const saveAppDataIntoLocalStorage = (key: string, item: any) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const deleteAppDataFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
