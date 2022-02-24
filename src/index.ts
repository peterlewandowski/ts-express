import express, { Request, Response } from 'express';
import { carService } from './services/car-services';

const app = express()

app.use(express.json())

app.all('*', (req: Request, res:Response) => {
    const result = carService.getAllCars()

    res.status(200).json(result);
})

const port = 3450 

app.listen(port, () => {
    console.log(`We be listening on port ${port}`)
});