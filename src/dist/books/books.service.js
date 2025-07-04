"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const review_entity_1 = require("../reviews/entities/review.entity");
const books_entity_1 = require("./entities/books.entity");
let BooksService = class BooksService {
    bookRepo;
    reviewRepo;
    constructor(bookRepo, reviewRepo) {
        this.bookRepo = bookRepo;
        this.reviewRepo = reviewRepo;
    }
    findAll() {
        return this.bookRepo.find();
    }
    create(dto) {
        const book = this.bookRepo.create(dto);
        return this.bookRepo.save(book);
    }
    async reviews(bookId) {
        const book = await this.bookRepo.findOneBy({ id: bookId });
        if (!book)
            throw new common_1.NotFoundException(`Book ${bookId} not found.`);
        return this.reviewRepo.find({
            where: { book: { id: bookId } },
            order: { createdAt: 'DESC' },
        });
    }
    async addReview(bookId, dto) {
        const book = await this.bookRepo.findOneBy({ id: bookId });
        if (!book)
            throw new common_1.NotFoundException(`Book ${bookId} not found.`);
        const review = this.reviewRepo.create({ ...dto, book });
        return this.reviewRepo.save(review);
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(books_entity_1.Book)),
    __param(1, (0, typeorm_2.InjectRepository)(review_entity_1.Review)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _b : Object])
], BooksService);
//# sourceMappingURL=books.service.js.map