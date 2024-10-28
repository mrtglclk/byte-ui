import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import MealList from './components/MealList';
import MenuScraper from './components/MenuScraper';
import RecommendationEngine from './components/RecommendationEngine';
import FirebaseAuth from './components/FirebaseAuth';

const App = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app-container">
      <h1>Byte - Personalized Meal Planner</h1>
      {user ? (
        <>
          <MenuScraper />
          <RecommendationEngine />
          <MealList />
        </>
      ) : (
        <FirebaseAuth />
      )}
    </div>
  );
};

export default App;