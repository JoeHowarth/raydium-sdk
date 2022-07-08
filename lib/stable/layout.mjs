import{PublicKey as k}from"@solana/web3.js";import g,{isBN as T}from"bn.js";import{bits as I,BitStructure as N,blob as _,Blob as V,cstr as C,f32 as q,f32be as O,f64 as v,f64be as F,greedy as R,Layout as w,ns64 as K,ns64be as M,nu64 as z,nu64be as G,offset as Q,s16 as Y,s16be as j,s24 as H,s24be as J,s32 as X,s32be as $,s40 as W,s40be as Z,s48 as ee,s48be as te,s8 as ne,seq as B,struct as re,Structure as U,u16 as oe,u16be as se,u24 as ae,u24be as ue,u32 as ie,u32be as ce,u40 as ye,u40be as pe,u48 as de,u48be as Pe,u8 as xe,UInt as be,union as me,Union as fe,unionLayoutDiscriminator as le,utf8 as Le}from"@solana/buffer-layout";var d=w,l=U;var L=B;var P=_;var p=class extends d{constructor(t,n,s){super(t,s);this.blob=P(t),this.signed=n}decode(t,n=0){let s=new g(this.blob.decode(t,n),10,"le");return this.signed?s.fromTwos(this.span*8).clone():s}encode(t,n,s=0){return typeof t=="number"&&(t=new g(t)),this.signed&&(t=t.toTwos(this.span*8)),this.blob.encode(t.toArrayLike(Buffer,"le",this.span),n,s)}};function e(o){return new p(8,!1,o)}function c(o){return new p(16,!1,o)}var x=class extends d{constructor(t,n,s,u){super(t.span,u);this.layout=t,this.decoder=n,this.encoder=s}decode(t,n){return this.decoder(this.layout.decode(t,n))}encode(t,n,s){return this.layout.encode(this.encoder(t),n,s)}getSpan(t,n){return this.layout.getSpan(t,n)}};function a(o){return new x(P(32),r=>new k(r),r=>r.toBuffer(),o)}var b=class extends l{decode(r,t){return super.decode(r,t)}};function S(o,r,t){return new b(o,r,t)}function h(o,r,t){let n,s=typeof r=="number"?r:T(r)?r.toNumber():new Proxy(r,{get(u,y){if(!n){let i=Reflect.get(u,"count");n=T(i)?i.toNumber():i,Reflect.set(u,"count",n)}return Reflect.get(u,y)},set(u,y,i){return y==="count"&&(n=i),Reflect.set(u,y,i)}});return L(o,s,t)}var A=S([e("accountType"),e("status"),e("nonce"),e("maxOrder"),e("depth"),e("baseDecimal"),e("quoteDecimal"),e("state"),e("resetFlag"),e("minSize"),e("volMaxCutRatio"),e("amountWaveRatio"),e("baseLotSize"),e("quoteLotSize"),e("minPriceMultiplier"),e("maxPriceMultiplier"),e("systemDecimalsValue"),e("abortTradeFactor"),e("priceTickMultiplier"),e("priceTick"),e("minSeparateNumerator"),e("minSeparateDenominator"),e("tradeFeeNumerator"),e("tradeFeeDenominator"),e("pnlNumerator"),e("pnlDenominator"),e("swapFeeNumerator"),e("swapFeeDenominator"),e("baseNeedTakePnl"),e("quoteNeedTakePnl"),e("quoteTotalPnl"),e("baseTotalPnl"),e("poolOpenTime"),e("punishPcAmount"),e("punishCoinAmount"),e("orderbookToInitTime"),c("swapBaseInAmount"),c("swapQuoteOutAmount"),c("swapQuoteInAmount"),c("swapBaseOutAmount"),e("swapQuote2BaseFee"),e("swapBase2QuoteFee"),a("baseVault"),a("quoteVault"),a("baseMint"),a("quoteMint"),a("lpMint"),a("modelDataAccount"),a("openOrders"),a("marketId"),a("marketProgramId"),a("targetOrders"),a("owner"),h(e("padding"),64,"padding")]),Oe={1:A};export{A as STABLE_STATE_LAYOUT_V1,Oe as STABLE_VERSION_TO_STATE_LAYOUT};
//# sourceMappingURL=layout.mjs.map