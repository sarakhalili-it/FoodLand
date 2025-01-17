import { getMealByArea } from "../api/melas";
import { useLoaderData, useParams } from "react-router-dom";
import MealList from "../components/MealList";
export async function loader({ params }) {
  const meals = await getMealByArea(params.id);
  return { meals };
}
export default function MealsByArea() {
  const { meals } = useLoaderData();
  const { id } = useParams();
  return (
    <div>
      <h1 className="font-bold p-4 mb-12  font-lobester text-2xl text-black border-b">
        Foods in <span className="text-secondery">{id}</span> Area
      </h1>
      <MealList meals={meals} />
    </div>
  );
}
