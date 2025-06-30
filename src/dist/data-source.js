"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const typeorm_1 = require("typeorm");
const books_entity_1 = require("./books/entities/books.entity");
const review_entity_1 = require("./reviews/entities/review.entity");
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [books_entity_1.Book, review_entity_1.Review],
    migrations: ['./dist/migration/*.js'],
});
//# sourceMappingURL=data-source.js.map