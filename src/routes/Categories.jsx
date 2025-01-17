import { useLoaderData } from "react-router-dom";
import { getCategories } from "../api/melas";
import CategoryCard from "../components/CategoryCard";

export async function loader() {
  const categories = await getCategories();
  return { categories };
}
export default function Categories() {
  const { categories } = useLoaderData();
  return (
    <div>
      <h1 className="font-bold p-4 mb-12  font-lobester text-2xl text-black border-b">
        Categories<span className="text-secondery">...</span>
      </h1>

      <div>
        {categories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </div>
  );
}
