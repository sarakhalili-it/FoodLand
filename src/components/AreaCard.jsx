import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
export default function AreaCard({ area }) {
  const { name } = area;
  return (
    <Link to={`/areas/${name}`}>
      <Card className="w-80 bg-gradient-to-t from-primary via-primary50 to-white rounded-4xl py-5 shadow-none border-none hover:shadow-md hover:duration-300 cursor-pointer">
        <div className="inline-flex justify-center mb-10">
          <div className="w-52 h-28 rounded-3xl">
            <img
              className="w-full h-full rounded-3xl"
              src={`src/assets/img/Countrys/${name}.gif`}
              alt={name}
            />
          </div>
        </div>
        <h5 className="text-2xl font-Inter font-semibold tracking-tight text-gray-900 text-center">
          {name}
        </h5>
      </Card>
    </Link>
  );
}
