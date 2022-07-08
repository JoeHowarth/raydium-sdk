import { Structure } from '../marshmallow/index.js';
import * as bn_js from 'bn.js';
import * as _solana_web3_js from '@solana/web3.js';
import { GetStructureSchema } from '../marshmallow/buffer-layout.js';

declare const MARKET_STATE_LAYOUT_V3: Structure<_solana_web3_js.PublicKey | bn_js | Buffer, "", {
    ownAddress: _solana_web3_js.PublicKey;
    vaultSignerNonce: bn_js;
    baseMint: _solana_web3_js.PublicKey;
    quoteMint: _solana_web3_js.PublicKey;
    baseVault: _solana_web3_js.PublicKey;
    baseDepositsTotal: bn_js;
    baseFeesAccrued: bn_js;
    quoteVault: _solana_web3_js.PublicKey;
    quoteDepositsTotal: bn_js;
    quoteFeesAccrued: bn_js;
    quoteDustThreshold: bn_js;
    requestQueue: _solana_web3_js.PublicKey;
    eventQueue: _solana_web3_js.PublicKey;
    bids: _solana_web3_js.PublicKey;
    asks: _solana_web3_js.PublicKey;
    baseLotSize: bn_js;
    quoteLotSize: bn_js;
    feeRateBps: bn_js;
    referrerRebatesAccrued: bn_js;
}>;
declare type MarketStateLayoutV3 = typeof MARKET_STATE_LAYOUT_V3;
declare type MarketStateLayout = MarketStateLayoutV3;
declare type MarketStateV3 = GetStructureSchema<MarketStateLayoutV3>;
declare type MarketState = MarketStateV3;
declare const MARKET_VERSION_TO_STATE_LAYOUT: {
    [version: number]: MarketStateLayout;
};

export { MARKET_STATE_LAYOUT_V3, MARKET_VERSION_TO_STATE_LAYOUT, MarketState, MarketStateLayout, MarketStateLayoutV3, MarketStateV3 };
