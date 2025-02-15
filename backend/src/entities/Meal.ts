export class Meal {
    id: number;
    name: string;
    description?: string;
    price: number;
    image?: string;
    meal_category_id: number;

    constructor(id: number, name: string, price: number, mealCategoryId: number, description?: string, image?: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.meal_category_id = mealCategoryId;
    }
}
