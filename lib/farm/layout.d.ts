import { Structure, GetStructureFromLayoutSchema } from '../marshmallow/index.js';
import { PublicKey } from '@solana/web3.js';
import bn_js__default from 'bn.js';
import { FarmVersion } from './type.js';
import { GetStructureSchema } from '../marshmallow/buffer-layout.js';
import '../common/json-file.js';
import '../type-b5eab5c3.js';

declare const REAL_FARM_STATE_LAYOUT_V3: Structure<PublicKey | bn_js__default, "", {
    state: bn_js__default;
    nonce: bn_js__default;
    lpVault: PublicKey;
    rewardVault: PublicKey;
    totalReward: bn_js__default;
    perShareReward: bn_js__default;
    lastSlot: bn_js__default;
    perSlotReward: bn_js__default;
}>;
declare const REAL_FARM_STATE_LAYOUT_V5: Structure<number | PublicKey | bn_js__default | Buffer, "", {
    state: bn_js__default;
    nonce: bn_js__default;
    lpVault: PublicKey;
    lastSlot: bn_js__default;
    rewardVaultA: PublicKey;
    totalRewardA: bn_js__default;
    perShareRewardA: bn_js__default;
    perSlotRewardA: bn_js__default;
    option: number;
    rewardVaultB: PublicKey;
    totalRewardB: bn_js__default;
    perShareRewardB: bn_js__default;
    perSlotRewardB: bn_js__default;
}>;
declare const REAL_FARM_STATE_LAYOUT_V6: Structure<PublicKey | bn_js__default | bn_js__default[] | {
    padding: bn_js__default[];
    rewardVault: PublicKey;
    totalReward: bn_js__default;
    rewardState: bn_js__default;
    rewardOpenTime: bn_js__default;
    rewardEndTime: bn_js__default;
    rewardLastUpdateTime: bn_js__default;
    totalRewardEmissioned: bn_js__default;
    rewardClaimed: bn_js__default;
    rewardPerSecond: bn_js__default;
    accRewardPerShare: bn_js__default;
    rewardMint: PublicKey;
    rewardSender: PublicKey;
}[], "", {
    state: bn_js__default;
    nonce: bn_js__default;
    lpMint: PublicKey;
    lpVault: PublicKey;
    padding: bn_js__default[];
    validRewardTokenNum: bn_js__default;
    rewardMultiplier: bn_js__default;
    rewardPeriodMax: bn_js__default;
    rewardPeriodMin: bn_js__default;
    rewardPeriodExtend: bn_js__default;
    rewardInfos: {
        padding: bn_js__default[];
        rewardVault: PublicKey;
        totalReward: bn_js__default;
        rewardState: bn_js__default;
        rewardOpenTime: bn_js__default;
        rewardEndTime: bn_js__default;
        rewardLastUpdateTime: bn_js__default;
        totalRewardEmissioned: bn_js__default;
        rewardClaimed: bn_js__default;
        rewardPerSecond: bn_js__default;
        accRewardPerShare: bn_js__default;
        rewardMint: PublicKey;
        rewardSender: PublicKey;
    }[];
    creator: PublicKey;
}>;
declare const FARM_STATE_LAYOUT_V3: GetStructureFromLayoutSchema<{
    version: 3;
    rewardInfos: {
        rewardVault: PublicKey;
        totalReward: bn_js__default;
        perSlotReward: bn_js__default;
        perShareReward: bn_js__default;
    }[];
} & {
    state: bn_js__default;
    nonce: bn_js__default;
    lpVault: PublicKey;
    rewardVault: PublicKey;
    totalReward: bn_js__default;
    perShareReward: bn_js__default;
    lastSlot: bn_js__default;
    perSlotReward: bn_js__default;
}>;
declare const FARM_STATE_LAYOUT_V5: GetStructureFromLayoutSchema<{
    version: 5;
    rewardInfos: {
        rewardVault: PublicKey;
        totalReward: bn_js__default;
        perSlotReward: bn_js__default;
        perShareReward: bn_js__default;
    }[];
} & {
    state: bn_js__default;
    nonce: bn_js__default;
    lpVault: PublicKey;
    lastSlot: bn_js__default;
    rewardVaultA: PublicKey;
    totalRewardA: bn_js__default;
    perShareRewardA: bn_js__default;
    perSlotRewardA: bn_js__default;
    option: number;
    rewardVaultB: PublicKey;
    totalRewardB: bn_js__default;
    perShareRewardB: bn_js__default;
    perSlotRewardB: bn_js__default;
}>;
declare const FARM_STATE_LAYOUT_V6: GetStructureFromLayoutSchema<{
    version: 6;
    rewardInfos: {
        rewardState: bn_js__default;
        rewardOpenTime: bn_js__default;
        rewardEndTime: bn_js__default;
        rewardLastUpdateTime: bn_js__default;
        totalReward: bn_js__default;
        totalRewardEmissioned: bn_js__default;
        rewardClaimed: bn_js__default;
        rewardPerSecond: bn_js__default;
        accRewardPerShare: bn_js__default;
        rewardVault: PublicKey;
        rewardMint: PublicKey;
        rewardSender: PublicKey;
    }[];
} & {
    state: bn_js__default;
    nonce: bn_js__default;
    lpMint: PublicKey;
    lpVault: PublicKey;
    padding: bn_js__default[];
    validRewardTokenNum: bn_js__default;
    rewardMultiplier: bn_js__default;
    rewardPeriodMax: bn_js__default;
    rewardPeriodMin: bn_js__default;
    rewardPeriodExtend: bn_js__default;
    rewardInfos: {
        padding: bn_js__default[];
        rewardVault: PublicKey;
        totalReward: bn_js__default;
        rewardState: bn_js__default;
        rewardOpenTime: bn_js__default;
        rewardEndTime: bn_js__default;
        rewardLastUpdateTime: bn_js__default;
        totalRewardEmissioned: bn_js__default;
        rewardClaimed: bn_js__default;
        rewardPerSecond: bn_js__default;
        accRewardPerShare: bn_js__default;
        rewardMint: PublicKey;
        rewardSender: PublicKey;
    }[];
    creator: PublicKey;
}>;
declare type FarmStateLayoutV3 = typeof FARM_STATE_LAYOUT_V3;
declare type FarmStateLayoutV5 = typeof FARM_STATE_LAYOUT_V5;
declare type FarmStateLayoutV6 = typeof FARM_STATE_LAYOUT_V6;
declare type FarmStateLayout = FarmStateLayoutV3 | FarmStateLayoutV5 | FarmStateLayoutV6;
declare type FarmStateV3 = GetStructureSchema<FarmStateLayoutV3>;
declare type FarmStateV5 = GetStructureSchema<FarmStateLayoutV5>;
declare type FarmStateV6 = GetStructureSchema<FarmStateLayoutV6>;
declare type FarmState = FarmStateV3 | FarmStateV5 | FarmStateV6;
declare const FARM_LEDGER_LAYOUT_V3_1: Structure<PublicKey | bn_js__default | bn_js__default[], "", {
    owner: PublicKey;
    state: bn_js__default;
    id: PublicKey;
    deposited: bn_js__default;
    rewardDebts: bn_js__default[];
}>;
declare const FARM_LEDGER_LAYOUT_V3_2: Structure<PublicKey | bn_js__default | bn_js__default[], "", {
    owner: PublicKey;
    state: bn_js__default;
    id: PublicKey;
    deposited: bn_js__default;
    rewardDebts: bn_js__default[];
}>;
declare const FARM_LEDGER_LAYOUT_V5_1: Structure<PublicKey | bn_js__default | bn_js__default[], "", {
    owner: PublicKey;
    state: bn_js__default;
    id: PublicKey;
    deposited: bn_js__default;
    rewardDebts: bn_js__default[];
}>;
declare const FARM_LEDGER_LAYOUT_V5_2: Structure<PublicKey | bn_js__default | bn_js__default[], "", {
    owner: PublicKey;
    state: bn_js__default;
    id: PublicKey;
    deposited: bn_js__default;
    rewardDebts: bn_js__default[];
}>;
declare const FARM_LEDGER_LAYOUT_V6_1: Structure<PublicKey | bn_js__default | bn_js__default[], "", {
    owner: PublicKey;
    state: bn_js__default;
    id: PublicKey;
    deposited: bn_js__default;
    rewardDebts: bn_js__default[];
}>;
declare type FarmLedgerLayoutV3_1 = typeof FARM_LEDGER_LAYOUT_V3_1;
declare type FarmLedgerLayoutV3_2 = typeof FARM_LEDGER_LAYOUT_V3_2;
declare type FarmLedgerLayoutV5_1 = typeof FARM_LEDGER_LAYOUT_V5_1;
declare type FarmLedgerLayoutV5_2 = typeof FARM_LEDGER_LAYOUT_V5_2;
declare type FarmLedgerLayoutV6_1 = typeof FARM_LEDGER_LAYOUT_V6_1;
declare type FarmLedgerLayout = FarmLedgerLayoutV3_1 | FarmLedgerLayoutV3_2 | FarmLedgerLayoutV5_1 | FarmLedgerLayoutV5_2 | FarmLedgerLayoutV6_1;
declare type FarmLedgerV3_1 = GetStructureSchema<FarmLedgerLayoutV3_1>;
declare type FarmLedgerV3_2 = GetStructureSchema<FarmLedgerLayoutV3_2>;
declare type FarmLedgerV5_1 = GetStructureSchema<FarmLedgerLayoutV5_1>;
declare type FarmLedgerV5_2 = GetStructureSchema<FarmLedgerLayoutV5_2>;
declare type FarmLedgerV6_1 = GetStructureSchema<FarmLedgerLayoutV6_1>;
declare type FarmLedger = FarmLedgerV3_1 | FarmLedgerV3_2 | FarmLedgerV5_1 | FarmLedgerV5_2 | FarmLedgerV6_1;
declare const FARM_VERSION_TO_STATE_LAYOUT: {
    [version in FarmVersion]?: FarmStateLayout;
} & {
    [version: number]: FarmStateLayout;
};
declare const FARM_VERSION_TO_LEDGER_LAYOUT: {
    [version in FarmVersion]?: FarmLedgerLayout;
} & {
    [version: number]: FarmLedgerLayout;
};

export { FARM_LEDGER_LAYOUT_V3_1, FARM_LEDGER_LAYOUT_V3_2, FARM_LEDGER_LAYOUT_V5_1, FARM_LEDGER_LAYOUT_V5_2, FARM_LEDGER_LAYOUT_V6_1, FARM_STATE_LAYOUT_V3, FARM_STATE_LAYOUT_V5, FARM_STATE_LAYOUT_V6, FARM_VERSION_TO_LEDGER_LAYOUT, FARM_VERSION_TO_STATE_LAYOUT, FarmLedger, FarmLedgerLayout, FarmLedgerLayoutV3_1, FarmLedgerLayoutV3_2, FarmLedgerLayoutV5_1, FarmLedgerLayoutV5_2, FarmLedgerLayoutV6_1, FarmLedgerV3_1, FarmLedgerV3_2, FarmLedgerV5_1, FarmLedgerV5_2, FarmLedgerV6_1, FarmState, FarmStateLayout, FarmStateLayoutV3, FarmStateLayoutV5, FarmStateLayoutV6, FarmStateV3, FarmStateV5, FarmStateV6, REAL_FARM_STATE_LAYOUT_V3, REAL_FARM_STATE_LAYOUT_V5, REAL_FARM_STATE_LAYOUT_V6 };
