import { getAreas } from "../api/melas";
import { useLoaderData } from "react-router-dom";
import AreaCard from "../components/AreaCard";

export async function loader() {
  const areas = await getAreas();
  return { areas };
}
export default function Area() {
  const { areas } = useLoaderData();
  return (
    <div>
      <h1 className="font-bold p-4 mb-12  font-lobester text-2xl text-black border-b">
        Countries<span className="text-secondery">...</span>
      </h1>

      <div className="flex flex-wrap gap-10 justify-center">
        {areas.map((area) => (
          <AreaCard key={area.name} area={area} />
        ))}
      </div>
    </div>
  );
}
