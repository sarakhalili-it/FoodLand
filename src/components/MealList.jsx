import MealCard from "./MealCard";

export default function MealList({ meals }) {
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {meals.map((meal) => (
        <MealCard meal={meal} key={meal.id} />
      ))}
    </div>
  );
}
