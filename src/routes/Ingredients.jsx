import { useLoaderData, useNavigate } from "react-router-dom";
import { getIngredients } from "../api/melas";
import IngredientsCard from "../components/IngredientsCard";
import { Button } from "flowbite-react";
export async function loader({ request }) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page")) || 1;
  const limit = parseInt(url.searchParams.get("limit")) || 12;

  const ings = await getIngredients();

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  return {
    ingridiants: ings.slice(startIndex, endIndex),
    total: ings.length,
    page,
    limit,
  };
}
export default function Ingredients() {
  const { ingridiants, total, page, limit } = useLoaderData();
  const navigate = useNavigate();

  const totalPages = Math.ceil(total / limit);

  const handlePageChange = (p) => {
    if (p > 0 && p <= totalPages) {
      navigate(`?page=${p}&limit=${limit}`);
    }
  };
  return (
    <>
      <h1 className="font-bold p-4 mb-12  font-lobester text-2xl text-black border-b">
        Ingredients<span className="text-secondery">...</span>
      </h1>
      <div className="flex flex-wrap gap-10 justify-center">
        {ingridiants.map((ing) => (
          <IngredientsCard key={ing.id} ings={ing} />
        ))}
      </div>
      <div className="mt-8 flex justify-center gap-4">
        <Button
          gradientMonochrome="cyan"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Previous
        </Button>
        <span className="px-4 py-2">
          Page {page} of {totalPages}
        </span>
        <Button
          gradientMonochrome="cyan"
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </Button>
      </div>
    </>
  );
}
