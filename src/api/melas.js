import axios from "axios";
const formatCategory = ({
  idCategory,
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}) => ({
  id: idCategory,
  name: strCategory,
  img: strCategoryThumb,
  desc: strCategoryDescription,
});
export const getCategories = async () => {
  const response = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const rawCategories = response.data.categories.map(formatCategory);
  return rawCategories;
};
const formatMealSummery = ({ strMeal, strMealThumb, idMeal }) => ({
  id: idMeal,
  name: strMeal,
  thumb: strMealThumb,
});
export const filterByCategory = async (category) => {
  if (!category) {
    return;
  }

  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );

  return response.data.meals.map(formatMealSummery);
};
const formatMeal = (meal) => {
  const {
    idMeal,
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strTags,
    strYoutube,
  } = meal;
  const ings = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      let ing = [meal[`strIngredient${i}`], meal[`strMeasure${i}`]];
      ings.push(ing);
    }
  }

  meal.ings = ings;

  return {
    id: idMeal,
    name: strMeal,
    category: strCategory,
    area: strArea,
    instructions: strInstructions,
    tags: strTags ? strTags.split(",") : [],
    thumb: strMealThumb,
    youtube: strYoutube,
    ingridents: meal.ings,
  };
};
export const getMealBYId = async (id) => {
  if (!id) {
    return;
  }
  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  return formatMeal(response.data.meals[0]);
};

export const getRandomMeal = async () => {
  const { data } = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  return formatMeal(data.meals[0]);
};
const formatArea = ({ strArea }) => ({ name: strArea });
export const getAreas = async () => {
  const { data } = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  return data.meals.map(formatArea);
};

export const getMealByArea = async (area) => {
  if (!area) {
    return;
  }

  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );

  return response.data.meals.map(formatMealSummery);
};
const formatIngredients = ({ idIngredient, strIngredient }) => ({
  id: idIngredient,
  name: strIngredient,
});
export const getIngredients = async () => {
  const { data } = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
  );
  return data.meals.map(formatIngredients);
};

export const getMealByIngs = async (ing) => {
  if (!ing) {
    return;
  }

  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`
  );

  return response.data.meals.map(formatMealSummery);
};
