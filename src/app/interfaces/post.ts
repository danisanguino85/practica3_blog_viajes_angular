import { Category } from "./category";

export interface Post {
    _id: number;
    titulo: string;
    texto: string;
    autor: string;
    imagen: string;
    fecha: Date;
    categoria: string
}

