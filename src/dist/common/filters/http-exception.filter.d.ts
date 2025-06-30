import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
export declare class AllExceptionsFilter implements ExceptionFilter {
    catch(e: unknown, host: ArgumentsHost): void;
}
