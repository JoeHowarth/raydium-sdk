import { Structure } from '../marshmallow/index.js';
import * as bn_js from 'bn.js';
import * as _solana_web3_js from '@solana/web3.js';
import { GetStructureSchema } from '../marshmallow/buffer-layout.js';

declare const SPL_MINT_LAYOUT: Structure<number | _solana_web3_js.PublicKey | bn_js, "", {
    decimals: number;
    mintAuthorityOption: number;
    mintAuthority: _solana_web3_js.PublicKey;
    supply: bn_js;
    isInitialized: number;
    freezeAuthorityOption: number;
    freezeAuthority: _solana_web3_js.PublicKey;
}>;
declare type SplMintLayout = typeof SPL_MINT_LAYOUT;
declare type SplMint = GetStructureSchema<SplMintLayout>;
declare const SPL_ACCOUNT_LAYOUT: Structure<number | _solana_web3_js.PublicKey | bn_js, "", {
    mint: _solana_web3_js.PublicKey;
    owner: _solana_web3_js.PublicKey;
    amount: bn_js;
    delegateOption: number;
    delegate: _solana_web3_js.PublicKey;
    state: number;
    isNativeOption: number;
    isNative: bn_js;
    delegatedAmount: bn_js;
    closeAuthorityOption: number;
    closeAuthority: _solana_web3_js.PublicKey;
}>;
declare type SplAccountLayout = typeof SPL_ACCOUNT_LAYOUT;
declare type SplAccount = GetStructureSchema<SplAccountLayout>;

export { SPL_ACCOUNT_LAYOUT, SPL_MINT_LAYOUT, SplAccount, SplAccountLayout, SplMint, SplMintLayout };
