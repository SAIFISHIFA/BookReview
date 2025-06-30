import { BooksService } from './books.service';
import { CacheService } from '../cache/cache.service';
import { CreateReviewDto } from '../reviews/dto/create-review.dto';
import { CreateBookDto } from '../reviews/dto/create-book.dto';
export declare class BooksController {
    private readonly booksSvc;
    private readonly cacheSvc;
    constructor(booksSvc: BooksService, cacheSvc: CacheService);
    list(): Promise<{}>;
    create(dto: CreateBookDto): Promise<import("./entities/books.entity").Book>;
    reviews(id: number): Promise<import("../reviews/entities/review.entity").Review[]>;
    addReview(id: number, dto: CreateReviewDto): Promise<import("../reviews/entities/review.entity").Review>;
}
