import { SubstrateBlock } from '@subsquid/substrate-processor'
import { CommonContext } from './mappings/types/contexts'
import { getOrCreateAccount } from './mappings/util/entities'
import { Collection, CollectionFlags, CollectionSocials, CollectionStats, MintPolicy, Token, TransferPolicy } from './modelEnjin'
import { isMainnet } from './common/tools'

export async function createEnjToken(ctx: CommonContext, block: SubstrateBlock) {
    const enj = await ctx.store.findOneBy(Token, { id: '0-0' })

    if (!enj) {
        const supply = isMainnet() ? 1_550_001_200_000_000_000_000_000n : 3_000_002_000_000_000_000_000_000n
        const account = await getOrCreateAccount(ctx, new Uint8Array(32).fill(0))
        const collection = new Collection({
            id: '0',
            collectionId: 0n,
            owner: account,
            mintPolicy: new MintPolicy({
                forceSingleMint: false,
            }),
            transferPolicy: new TransferPolicy({
                isFrozen: false,
            }),
            stats: new CollectionStats({
                lastSale: null,
                floorPrice: null,
                highestSale: null,
                tokenCount: 1,
                salesCount: 0,
                supply,
                marketCap: 0n,
                volume: 0n,
            }),
            flags: new CollectionFlags({
                featured: false,
                hiddenForLegalReasons: false,
                verified: false,
            }),
            socials: new CollectionSocials({
                discord: null,
                twitter: null,
                instagram: null,
                medium: null,
                tiktok: null,
                website: null,
            }),
            hidden: false,
            burnPolicy: null,
            attributePolicy: null,
            attributeCount: 0,
            totalDeposit: 0n,
            createdAt: new Date(block.timestamp),
        })

        await ctx.store.insert(Collection, collection as any)

        const token = new Token({
            id: `0-0`,
            tokenId: 0n,
            supply,
            isFrozen: false,
            minimumBalance: 1n,
            cap: null,
            listingForbidden: true,
            unitPrice: 1n,
            mintDeposit: 1n,
            attributeCount: 0,
            collection,
            nonFungible: false,
            createdAt: new Date(block.timestamp),
        })

        await ctx.store.insert(Token, token as any)
    }
}
