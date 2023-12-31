import React, { useEffect, useState } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
// import useHttp from "../../hooks/use-http";

const AvailableMeals = () => {
  // fetch version
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://custom-react-d7dca-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);
  // fetch version end

  //custom Hook version
  // const [meals, setMeals] = useState([]);
  // const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  // useEffect(() => {
  //   const transformMeals = (mealsObj) => {
  //     const loadedMeals = [];

  //     for (const mealsKey in mealsObj) {
  //       loadedMeals.push({
  //         id: mealsKey,
  //         name: mealsObj[mealsKey].name,
  //         description: mealsObj[mealsKey].description,
  //         price: mealsObj[mealsKey].price,
  //       });
  //     }

  //     setMeals(loadedMeals);
  //     console.log(loadedMeals);
  //   };

  //   fetchMeals(
  //     {
  //       url: "https://custom-react-d7dca-default-rtdb.firebaseio.com/meals.json",
  //     },
  //     transformMeals
  //   );
  // }, [fetchMeals]);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes.MealsError}>
        <p>{error}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      // loading={isLoading}
      // error={error}
      // onFetch={fetchMeals}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
