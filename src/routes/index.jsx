import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../error Pages/ErrorPage";
import Categories, { loader as CategoriesLoader } from "./Categories";
import MealsByCategory, {
  loader as mealsByCategoryLoader,
} from "./MealsByCategory";
import Meal, { loader as MealLoader } from "./Meal";
import RandomMeal, { loader as RandomMealLoader } from "./RandomMeal";
import AboutUS from "./AboutUs";
import Area, { loader as AreaLoader } from "./Areas";
import MealsByArea, { loader as MealsByAreaLoader } from "./MealsByArea";
import Ingredients, { loader as IngredientsLoader } from "./Ingredients";
import MealsByIng, { loader as MealsByIngsLoader } from "./MealsByIng";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <RandomMeal />,
        errorElement: <ErrorPage />,
        loader: RandomMealLoader,
      },
      {
        path: "categories",
        element: <Categories />,
        errorElement: <ErrorPage />,
        loader: CategoriesLoader,
      },
      {
        path: "categories/:id",
        element: <MealsByCategory />,
        errorElement: <ErrorPage />,
        loader: mealsByCategoryLoader,
      },
      {
        path: "meals/:id",
        element: <Meal />,
        errorElement: <ErrorPage />,
        loader: MealLoader,
      },
      {
        path: "areas",
        element: <Area />,
        errorElement: <ErrorPage />,
        loader: AreaLoader,
      },
      {
        path: "areas/:id",
        element: <MealsByArea />,
        errorElement: <ErrorPage />,
        loader: MealsByAreaLoader,
      },
      {
        path: "ingredient",
        element: <Ingredients />,
        errorElement: <ErrorPage />,
        loader: IngredientsLoader,
      },
      {
        path: "ingredient/:id",
        element: <MealsByIng />,
        errorElement: <ErrorPage />,
        loader: MealsByIngsLoader,
      },
      { path: "aboutus", element: <AboutUS />, errorElement: <ErrorPage /> },
    ],
  },
]);
export default router;
