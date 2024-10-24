import React, { useState, useEffect } from 'react';
import { getMeals } from '../api';

const MealList = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // Fetch meals from the backend API
    getMeals().then((data) => setMeals(data));
  }, []);

  return (
    <div className="meal-list">
      <h2>Recommended Meals</h2>
      {meals.length > 0 ? (
        <ul>
          {meals.map((meal, index) => (
            <li key={index}>{meal.name}</li>
          ))}
        </ul>
      ) : (
        <p>No meals available at the moment.</p>
      )}
    </div>
  );
};

export default MealList;
