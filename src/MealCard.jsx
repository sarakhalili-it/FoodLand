import { Card } from "flowbite-react";

export default function MealCard({ meal }) {
    const { name, instruction, image } = meal;

    return (
        <Card
            imgAlt={name}
            imgSrc={image}
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">{name}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{instruction}</p>
        </Card>
    );
}