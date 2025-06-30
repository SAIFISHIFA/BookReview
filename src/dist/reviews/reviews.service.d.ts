import { Repository } from 'typeorm';
import { Review } from './entities/review.entity';
import { CreateReviewDto } from './dto/create-review.dto';
import { Book } from '../books/entities/books.entity';
export declare class ReviewsService {
    private readonly revRepo;
    private readonly bookRepo;
    constructor(revRepo: Repository<Review>, bookRepo: Repository<Book>);
    findByBook(bookId: number): Promise<Review[]>;
    create(bookId: number, dto: CreateReviewDto): Promise<Review>;
}
