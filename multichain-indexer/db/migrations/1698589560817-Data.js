module.exports = class Data1698589560817 {
    name = 'Data1698589560817'

    async up(db) {
        await db.query(`CREATE TABLE "collection" ("id" character varying NOT NULL, "collection_type" character varying(7) NOT NULL, "created_at_block" numeric NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "name" text, CONSTRAINT "PK_ad3f485bbc99d875491f44d7c85" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_3fecce93788f86b3c2d76f5bb2" ON "collection" ("collection_type") `)
        await db.query(`CREATE INDEX "IDX_035df96c8ad5c55e4e49b53705" ON "collection" ("created_at_block") `)
        await db.query(`CREATE INDEX "IDX_f2c977a66579d262693a8cdbcd" ON "collection" ("created_at") `)
        await db.query(`CREATE INDEX "IDX_926e7bdc3f52cd582078a379f1" ON "collection" ("name") `)
        await db.query(`CREATE TABLE "attribute" ("id" character varying NOT NULL, "type" text NOT NULL, "value" text NOT NULL, "rarity" numeric NOT NULL, "collection_id" character varying, CONSTRAINT "PK_b13fb7c5c9e9dff62b60e0de729" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_adaba2bde1f917be8521c42ebc" ON "attribute" ("collection_id") `)
        await db.query(`CREATE INDEX "IDX_0dbafd93b752dcf58fbd7caac6" ON "attribute" ("type") `)
        await db.query(`CREATE INDEX "IDX_953787c7913a93aee4b32e10aa" ON "attribute" ("rarity") `)
        await db.query(`CREATE TABLE "nf_token_attribute" ("id" character varying NOT NULL, "nftoken_id" character varying, "attribute_id" character varying, CONSTRAINT "PK_2b3e18bfee1c703f3356e8ee7d4" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_aa6394b7642a4003da7fe07cf7" ON "nf_token_attribute" ("nftoken_id") `)
        await db.query(`CREATE INDEX "IDX_e8ed82a576c20c5ff6cc09e6a6" ON "nf_token_attribute" ("attribute_id") `)
        await db.query(`CREATE TABLE "nf_token" ("id" character varying NOT NULL, "native_id" text NOT NULL, "name" text, "symbol" text, "image" text, "uri" text, "amount" numeric NOT NULL, "is_burned" boolean NOT NULL, "collection_id" character varying, "current_owner_id" character varying, CONSTRAINT "PK_4b875f332d287d53286f0120060" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_1e9e7fc05f92357bd73f9894e0" ON "nf_token" ("native_id") `)
        await db.query(`CREATE INDEX "IDX_062fda9c8d3cfc052e32dee8e4" ON "nf_token" ("name") `)
        await db.query(`CREATE INDEX "IDX_65b31e75b2f1d27835196b2be0" ON "nf_token" ("symbol") `)
        await db.query(`CREATE INDEX "IDX_edd78f0b817ba4d3f9d239d10d" ON "nf_token" ("collection_id") `)
        await db.query(`CREATE INDEX "IDX_70ed98b811638d56141fecf0fb" ON "nf_token" ("current_owner_id") `)
        await db.query(`CREATE INDEX "IDX_dbc8d2bdb09faa872564c761c2" ON "nf_token" ("amount") `)
        await db.query(`CREATE INDEX "IDX_d557eb6f61c799175d93db5a0d" ON "nf_token" ("is_burned") `)
        await db.query(`CREATE TABLE "account" ("id" character varying NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "uri_update_action" ("id" character varying NOT NULL, "new_value" text, "old_value" text, "block_number" numeric NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "txn_hash" text NOT NULL, "token_id" character varying, CONSTRAINT "PK_0de40fe0fe070f895e84d31ecd0" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_49f300aa0df73f4d20ec04e6bd" ON "uri_update_action" ("token_id") `)
        await db.query(`CREATE TABLE "nft_event" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "txn_hash" text NOT NULL, "event_type" character varying(8) NOT NULL, "marketplace" text NOT NULL, "price" numeric NOT NULL, "chain" text NOT NULL, "nf_token_id" character varying, "from_id" character varying, "to_id" character varying, CONSTRAINT "PK_eca59e3d53ba2009252626e64d9" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_c2de0162e445aa1fb8b750e553" ON "nft_event" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_d73870c870add45d1e6a127f80" ON "nft_event" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_245b2edcc64293cf6cc4538f5c" ON "nft_event" ("txn_hash") `)
        await db.query(`CREATE INDEX "IDX_9f36a9739b49364cb5d438f384" ON "nft_event" ("nf_token_id") `)
        await db.query(`CREATE INDEX "IDX_042a25b0ac2ad607412431f1b4" ON "nft_event" ("event_type") `)
        await db.query(`CREATE INDEX "IDX_def5fef9e6c88052a20d6d598f" ON "nft_event" ("from_id") `)
        await db.query(`CREATE INDEX "IDX_6cf20818a7482297d8da0f2705" ON "nft_event" ("to_id") `)
        await db.query(`CREATE INDEX "IDX_965dcd17b4c88dd66fb39df397" ON "nft_event" ("marketplace") `)
        await db.query(`CREATE INDEX "IDX_ada19c579e2d8bdce8b23dad15" ON "nft_event" ("price") `)
        await db.query(`CREATE INDEX "IDX_dabbd7d695ef95e6ef83f433a1" ON "nft_event" ("chain") `)
        await db.query(`ALTER TABLE "attribute" ADD CONSTRAINT "FK_adaba2bde1f917be8521c42ebc0" FOREIGN KEY ("collection_id") REFERENCES "collection"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "nf_token_attribute" ADD CONSTRAINT "FK_aa6394b7642a4003da7fe07cf74" FOREIGN KEY ("nftoken_id") REFERENCES "nf_token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "nf_token_attribute" ADD CONSTRAINT "FK_e8ed82a576c20c5ff6cc09e6a69" FOREIGN KEY ("attribute_id") REFERENCES "attribute"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "nf_token" ADD CONSTRAINT "FK_edd78f0b817ba4d3f9d239d10d7" FOREIGN KEY ("collection_id") REFERENCES "collection"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "nf_token" ADD CONSTRAINT "FK_70ed98b811638d56141fecf0fb8" FOREIGN KEY ("current_owner_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "uri_update_action" ADD CONSTRAINT "FK_49f300aa0df73f4d20ec04e6bdc" FOREIGN KEY ("token_id") REFERENCES "nf_token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "nft_event" ADD CONSTRAINT "FK_9f36a9739b49364cb5d438f3842" FOREIGN KEY ("nf_token_id") REFERENCES "nf_token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "nft_event" ADD CONSTRAINT "FK_def5fef9e6c88052a20d6d598fa" FOREIGN KEY ("from_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "nft_event" ADD CONSTRAINT "FK_6cf20818a7482297d8da0f27059" FOREIGN KEY ("to_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "collection"`)
        await db.query(`DROP INDEX "public"."IDX_3fecce93788f86b3c2d76f5bb2"`)
        await db.query(`DROP INDEX "public"."IDX_035df96c8ad5c55e4e49b53705"`)
        await db.query(`DROP INDEX "public"."IDX_f2c977a66579d262693a8cdbcd"`)
        await db.query(`DROP INDEX "public"."IDX_926e7bdc3f52cd582078a379f1"`)
        await db.query(`DROP TABLE "attribute"`)
        await db.query(`DROP INDEX "public"."IDX_adaba2bde1f917be8521c42ebc"`)
        await db.query(`DROP INDEX "public"."IDX_0dbafd93b752dcf58fbd7caac6"`)
        await db.query(`DROP INDEX "public"."IDX_953787c7913a93aee4b32e10aa"`)
        await db.query(`DROP TABLE "nf_token_attribute"`)
        await db.query(`DROP INDEX "public"."IDX_aa6394b7642a4003da7fe07cf7"`)
        await db.query(`DROP INDEX "public"."IDX_e8ed82a576c20c5ff6cc09e6a6"`)
        await db.query(`DROP TABLE "nf_token"`)
        await db.query(`DROP INDEX "public"."IDX_1e9e7fc05f92357bd73f9894e0"`)
        await db.query(`DROP INDEX "public"."IDX_062fda9c8d3cfc052e32dee8e4"`)
        await db.query(`DROP INDEX "public"."IDX_65b31e75b2f1d27835196b2be0"`)
        await db.query(`DROP INDEX "public"."IDX_edd78f0b817ba4d3f9d239d10d"`)
        await db.query(`DROP INDEX "public"."IDX_70ed98b811638d56141fecf0fb"`)
        await db.query(`DROP INDEX "public"."IDX_dbc8d2bdb09faa872564c761c2"`)
        await db.query(`DROP INDEX "public"."IDX_d557eb6f61c799175d93db5a0d"`)
        await db.query(`DROP TABLE "account"`)
        await db.query(`DROP TABLE "uri_update_action"`)
        await db.query(`DROP INDEX "public"."IDX_49f300aa0df73f4d20ec04e6bd"`)
        await db.query(`DROP TABLE "nft_event"`)
        await db.query(`DROP INDEX "public"."IDX_c2de0162e445aa1fb8b750e553"`)
        await db.query(`DROP INDEX "public"."IDX_d73870c870add45d1e6a127f80"`)
        await db.query(`DROP INDEX "public"."IDX_245b2edcc64293cf6cc4538f5c"`)
        await db.query(`DROP INDEX "public"."IDX_9f36a9739b49364cb5d438f384"`)
        await db.query(`DROP INDEX "public"."IDX_042a25b0ac2ad607412431f1b4"`)
        await db.query(`DROP INDEX "public"."IDX_def5fef9e6c88052a20d6d598f"`)
        await db.query(`DROP INDEX "public"."IDX_6cf20818a7482297d8da0f2705"`)
        await db.query(`DROP INDEX "public"."IDX_965dcd17b4c88dd66fb39df397"`)
        await db.query(`DROP INDEX "public"."IDX_ada19c579e2d8bdce8b23dad15"`)
        await db.query(`DROP INDEX "public"."IDX_dabbd7d695ef95e6ef83f433a1"`)
        await db.query(`ALTER TABLE "attribute" DROP CONSTRAINT "FK_adaba2bde1f917be8521c42ebc0"`)
        await db.query(`ALTER TABLE "nf_token_attribute" DROP CONSTRAINT "FK_aa6394b7642a4003da7fe07cf74"`)
        await db.query(`ALTER TABLE "nf_token_attribute" DROP CONSTRAINT "FK_e8ed82a576c20c5ff6cc09e6a69"`)
        await db.query(`ALTER TABLE "nf_token" DROP CONSTRAINT "FK_edd78f0b817ba4d3f9d239d10d7"`)
        await db.query(`ALTER TABLE "nf_token" DROP CONSTRAINT "FK_70ed98b811638d56141fecf0fb8"`)
        await db.query(`ALTER TABLE "uri_update_action" DROP CONSTRAINT "FK_49f300aa0df73f4d20ec04e6bdc"`)
        await db.query(`ALTER TABLE "nft_event" DROP CONSTRAINT "FK_9f36a9739b49364cb5d438f3842"`)
        await db.query(`ALTER TABLE "nft_event" DROP CONSTRAINT "FK_def5fef9e6c88052a20d6d598fa"`)
        await db.query(`ALTER TABLE "nft_event" DROP CONSTRAINT "FK_6cf20818a7482297d8da0f27059"`)
    }
}