export const fetchBuySellList = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/buySellList/all`);
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Network response was not ok. Status: ${response.status}, Message: ${errorText}`);
    }
    
    // Directly parse JSON from the response
    const data = await response.json();
    
    // Return the parsed data
    return data;
  } catch (error) {
    console.error("Error fetching buy/sell list:", error);
    return [];
  }
};
