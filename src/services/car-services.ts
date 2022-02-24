import { Car } from "../models/car"

interface CarService {

    addNewCar(car: Car): Car;
    getAllCars(): Car[];
    getCarById(carId: string): Car;
}

const getAllCars = (): Car[] => {
    const cars: Car[] = [];
    const car1: Car = {make: "Ford", model:"Fiesta", year: 2022, }
    const car2 = { make:"Ford", model: "F-150" } as Car

    cars.push(car1, car2)

    return cars;
}
export const  carService: CarService = { getAllCars } as CarService