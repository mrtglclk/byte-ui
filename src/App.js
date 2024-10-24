import React from 'react';
import MealList from './components/MealList';
import MenuScraper from './components/MenuScraper';
import RecommendationEngine from './components/RecommendationEngine';

const App = () => {
  return (
    <div className="app-container">
      <h1>Byte - Personalized Meal Planner</h1>
      <MenuScraper />
      <RecommendationEngine />
      <MealList />
    </div>
  );
};

export default App;
