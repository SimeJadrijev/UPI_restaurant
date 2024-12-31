import { Request, Response, NextFunction, Router } from 'express';
import { MealsService } from '../services/MealsService';

// --------------------------------------------------------------

export class MealsController {
    private readonly mealsService;
    public readonly mealsRouter;

    constructor() {
        this.mealsRouter = Router();
        this.mealsService = new MealsService();

        this.mealsRouter.get('/meals', this.findAll.bind(this));
        this.mealsRouter.post('/meals', this.createMeal.bind(this));
    }

    private async findAll(_: Request, res: Response, next: NextFunction) {
        try {
            const meals = await this.mealsService.findAll();
            res.status(200).json(meals);
        } catch (error) {
            next(error);
        }
    }

    private async createMeal(req: Request, res: Response, next: NextFunction) {
        try {
            const newMeal = await this.mealsService.createMeal(req.body);

            if (!newMeal) {
                res.status(422).json({ error: 'Invalid input data' });
                return;
            }
            res.status(201).json(newMeal);
        } catch (error) {
            next(error);
        }
    }

}
