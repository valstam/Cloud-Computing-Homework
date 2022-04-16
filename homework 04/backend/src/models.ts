export interface RecipeItem {
    name: string;
    quantity: number;
}

export interface Recipe {
    id?: string;
    name: string;
    description: string;
    items: RecipeItem[];
    imageBuffer: Buffer;
    tags: string[];
}


