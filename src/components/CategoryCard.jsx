import { Card, Button } from "flowbite-react";
import { Link } from "react-router-dom";
export default function CategoryCard({ category }) {
  const { id, name, img, desc } = category;
  return (
    <Card className="w-9/12 mx-auto mb-4">
      <div className="flex justify-start items-center gap-x-6">
        {" "}
        <div className="w-56 h-56 ">
          <img src={img} alt={name} className="w-full h-full rounded-full" />
        </div>
        <div className="w-2/3">
          {" "}
          <h5 className="text-3xl font-bold tracking-tight text-gray-900 font-lobester mb-4">
            {name}
          </h5>
          <p className="font-Inter text-black60 text-justify ">{desc}</p>
          <div
            className="flex
           justify-end mt-3 "
          >
            <Link to={`/categories/${name}`}>
              <Button gradientDuoTone="cyanToBlue" className="font-Inter">
                Show Foods
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}
