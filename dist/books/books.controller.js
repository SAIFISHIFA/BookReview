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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const books_service_1 = require("./books.service");
const cache_service_1 = require("../cache/cache.service");
const create_review_dto_1 = require("../reviews/dto/create-review.dto");
const create_book_dto_1 = require("../reviews/dto/create-book.dto");
let BooksController = class BooksController {
    booksSvc;
    cacheSvc;
    constructor(booksSvc, cacheSvc) {
        this.booksSvc = booksSvc;
        this.cacheSvc = cacheSvc;
    }
    async list() {
        const key = 'books:list';
        const cached = await this.cacheSvc.get(key);
        if (cached)
            return cached;
        const list = await this.booksSvc.findAll();
        await this.cacheSvc.set(key, list, 60);
        return list;
    }
    create(dto) {
        return this.booksSvc.create(dto);
    }
    reviews(id) {
        return this.booksSvc.reviews(id);
    }
    addReview(id, dto) {
        return this.booksSvc.addReview(id, dto);
    }
};
exports.BooksController = BooksController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'List all books (cached for 60s)' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "list", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new book' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_book_dto_1.CreateBookDto]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id/reviews'),
    (0, swagger_1.ApiOperation)({ summary: 'Get reviews for a book' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "reviews", null);
__decorate([
    (0, common_1.Post)(':id/reviews'),
    (0, swagger_1.ApiOperation)({ summary: 'Add a review to a book' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_review_dto_1.CreateReviewDto]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "addReview", null);
exports.BooksController = BooksController = __decorate([
    (0, swagger_1.ApiTags)('books'),
    (0, common_1.Controller)('books'),
    __metadata("design:paramtypes", [books_service_1.BooksService,
        cache_service_1.CacheService])
], BooksController);
//# sourceMappingURL=books.controller.js.map