import { Router } from "express";
import { tourController } from "./tour.controller";

const tourRouter=Router()

tourRouter.post("/createTour",tourController.createTour)

tourRouter.get('/all-data', tourController.getTour)

tourRouter.get('/:tourId',tourController.getSingleTour)

tourRouter.patch('/update/:tourId',tourController.updateTour)

tourRouter.delete('/delete/:tourId',tourController.deleteTour)

tourRouter.get('/schedule/:id', tourController.getNextSchedule)


export default tourRouter