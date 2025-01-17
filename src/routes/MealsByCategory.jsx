import { filterByCategory } from "../api/melas";
import MealList from "../components/MealList";
import { useLoaderData, useParams } from "react-router-dom";
export async function loader({ params }) {
  const meals = await filterByCategory(params.id);
  return { meals };
}
export default function MealsByCategory() {
  const { meals } = useLoaderData();
  const { id } = useParams();

  return (
    <div>
      <h1 className="font-bold p-4 mb-12  font-lobester text-2xl text-black border-b">
        Foods in <span className="text-secondery">{id}</span> Category
      </h1>
      <MealList meals={meals} />
    </div>
  );
}
