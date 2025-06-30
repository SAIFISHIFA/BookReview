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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheService = void 0;
const common_1 = require("@nestjs/common");
const redis_1 = require("redis");
let CacheService = class CacheService {
    client;
    constructor(client) {
        this.client = client;
    }
    async get(key) {
        const data = await this.client.get(key);
        return data ? JSON.parse(data) : null;
    }
    async set(key, value, ttlSeconds) {
        const serialized = JSON.stringify(value);
        await this.client.set(key, serialized, { EX: ttlSeconds });
    }
    async del(key) {
        await this.client.del(key);
    }
};
exports.CacheService = CacheService;
exports.CacheService = CacheService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('REDIS_CLIENT')),
    __metadata("design:paramtypes", [typeof (_a = typeof redis_1.RedisClientType !== "undefined" && redis_1.RedisClientType) === "function" ? _a : Object])
], CacheService);
//# sourceMappingURL=cache.service.js.map