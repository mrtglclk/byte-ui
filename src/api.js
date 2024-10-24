export const getMeals = async () => {
    try {
      // Example: Replace this URL with your actual backend endpoint
      const response = await fetch('http://localhost:5000/api/meals');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching meals:', error);
      return [];
    }
  };
  