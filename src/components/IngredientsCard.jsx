import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
export default function IngredientsCard({ ings }) {
  const { id, name } = ings;
  return (
    <Link to={`/ingredient/${name}`}>
      <Card className="w-80 bg-gradient-to-t from-primary via-primary50 to-white rounded-4xl py-5 shadow-none border-none hover:shadow-md hover:duration-300 cursor-pointer">
        <div className="inline-flex justify-center">
          <img
            className="w-52 h-52  rounded-full "
            src={`https://www.themealdb.com/images/ingredients/${name}.png`}
            alt={name}
          />
        </div>
        <h5 className="text-2xl font-Inter font-semibold tracking-tight text-gray-900 text-center">
          {name}
        </h5>
      </Card>
    </Link>
  );
}
