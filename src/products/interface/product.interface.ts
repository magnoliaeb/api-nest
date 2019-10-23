import { Document } from 'mongoose';

export interface Product extends Document {
    id?: number;
    name: string;
    price: number;
    status: boolean;
}
