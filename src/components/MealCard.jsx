import { Card, Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function MealCard({ meal }) {
  const { id, name, thumb } = meal;
  return (
    <Card className="w-400 bg-gradient-to-t from-primary via-primary50 to-white !rounded-36px box-border shadow-none border-none hover:shadow hover:duration-300 ">
      <div>
        <img className="w-368 h-64 rounded-3xl" src={thumb} alt={name} />
      </div>
      <h5 className="text-2xl font-Inter font-semibold tracking-tight text-gray-900 mt-2  leading-8">
        {name}
      </h5>

      <div className="flex justify-end">
        <Link to={`/meals/${id}`}>
          <Button className="bg-black text-white focus:outline-none focus:ring-0 enabled:hover:bg-secondery ">
            <HiOutlineArrowRight className="h-6 w-6" />
          </Button>
        </Link>
      </div>
    </Card>
  );
}
