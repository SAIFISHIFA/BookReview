"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Init1751217190560 = void 0;
class Init1751217190560 {
    name = 'Init1751217190560';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "books" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "author" character varying NOT NULL, "publishedAt" date NOT NULL, CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reviews" ("id" SERIAL NOT NULL, "reviewer" character varying NOT NULL, "body" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "bookId" integer, CONSTRAINT "PK_231ae565c273ee700b283f15c1d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_96a08549b13fe1712467b22314" ON "reviews" ("bookId", "createdAt") `);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_cab4e55252a9c18a27e81415299" FOREIGN KEY ("bookId") REFERENCES "books"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_cab4e55252a9c18a27e81415299"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_96a08549b13fe1712467b22314"`);
        await queryRunner.query(`DROP TABLE "reviews"`);
        await queryRunner.query(`DROP TABLE "books"`);
    }
}
exports.Init1751217190560 = Init1751217190560;
//# sourceMappingURL=1751217190560-Init.js.map