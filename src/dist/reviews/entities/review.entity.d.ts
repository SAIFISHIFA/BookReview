import { Book } from '../../books/entities/books.entity';
export declare class Review {
    id: number;
    reviewer: string;
    body: string;
    book: Book;
    createdAt: Date;
}
