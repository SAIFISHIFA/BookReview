import { Repository } from 'typeorm';
import { Review } from '../reviews/entities/review.entity';
import { CreateReviewDto } from '../reviews/dto/create-review.dto';
import { Book } from './entities/books.entity';
import { CreateBookDto } from '..//reviews/dto/create-book.dto';
export declare class BooksService {
    private readonly bookRepo;
    private readonly reviewRepo;
    constructor(bookRepo: Repository<Book>, reviewRepo: Repository<Review>);
    findAll(): Promise<Book[]>;
    create(dto: CreateBookDto): Promise<Book>;
    reviews(bookId: number): Promise<Review[]>;
    addReview(bookId: number, dto: CreateReviewDto): Promise<Review>;
}
