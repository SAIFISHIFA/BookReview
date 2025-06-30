import { RedisClientType } from 'redis';
export declare class CacheService {
    private readonly client;
    constructor(client: RedisClientType);
    get<T>(key: string): Promise<T | null>;
    set<T>(key: string, value: T, ttlSeconds: number): Promise<void>;
    del(key: string): Promise<void>;
}
