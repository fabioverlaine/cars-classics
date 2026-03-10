
import { Car } from "../types/car";

type Props = {
    car: Car
    onClick: () => void
}
export const CarCard = ({car, onClick}: Props) => {

    return(
        <div onClick={onClick}
            className="cursor-pointer bg-white rounded-xl shadow hover:scale-105 transition"
        >
         <img
            src={car.image}
            alt={car.name}
            className="rounded-t-xl h-55 w-full object-cover"
         />

         <div className="p-4">
            <h2 className="text-xl font-bold">{car.name}</h2>
            <p className="text-gray-600">{car.price}</p>
         </div>
        </div>
    );
}