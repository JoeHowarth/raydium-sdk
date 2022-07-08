import { PublicKey } from '@solana/web3.js';
import * as bn_js from 'bn.js';
import { Structure } from '../marshmallow/index.js';
import '../marshmallow/buffer-layout.js';

declare class Market {
    static getProgramId(version: number): PublicKey;
    static getVersion(programId: PublicKey): 3;
    static getStateLayout(version: number): Structure<PublicKey | bn_js | Buffer, "", {
        ownAddress: PublicKey;
        vaultSignerNonce: bn_js;
        baseMint: PublicKey;
        quoteMint: PublicKey;
        baseVault: PublicKey;
        baseDepositsTotal: bn_js;
        baseFeesAccrued: bn_js;
        quoteVault: PublicKey;
        quoteDepositsTotal: bn_js;
        quoteFeesAccrued: bn_js;
        quoteDustThreshold: bn_js;
        requestQueue: PublicKey;
        eventQueue: PublicKey;
        bids: PublicKey;
        asks: PublicKey;
        baseLotSize: bn_js;
        quoteLotSize: bn_js;
        feeRateBps: bn_js;
        referrerRebatesAccrued: bn_js;
    }>;
    static getLayouts(version: number): {
        state: Structure<PublicKey | bn_js | Buffer, "", {
            ownAddress: PublicKey;
            vaultSignerNonce: bn_js;
            baseMint: PublicKey;
            quoteMint: PublicKey;
            baseVault: PublicKey;
            baseDepositsTotal: bn_js;
            baseFeesAccrued: bn_js;
            quoteVault: PublicKey;
            quoteDepositsTotal: bn_js;
            quoteFeesAccrued: bn_js;
            quoteDustThreshold: bn_js;
            requestQueue: PublicKey;
            eventQueue: PublicKey;
            bids: PublicKey;
            asks: PublicKey;
            baseLotSize: bn_js;
            quoteLotSize: bn_js;
            feeRateBps: bn_js;
            referrerRebatesAccrued: bn_js;
        }>;
    };
    static getAssociatedAuthority({ programId, marketId }: {
        programId: PublicKey;
        marketId: PublicKey;
    }): Promise<{
        publicKey: PublicKey;
        nonce: number;
    }>;
}

export { Market };