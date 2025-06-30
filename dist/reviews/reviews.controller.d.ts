import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
export declare class ReviewsController {
    private readonly reviewsSvc;
    constructor(reviewsSvc: ReviewsService);
    getReviews(id: number): Promise<import("./entities/review.entity").Review[]>;
    addReview(id: number, dto: CreateReviewDto): Promise<import("./entities/review.entity").Review>;
}
