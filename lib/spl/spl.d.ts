import { PublicKey, TransactionInstruction, Connection, Commitment, Keypair, Signer } from '@solana/web3.js';
import { BigNumberish } from '../entity/bignumber.js';
import 'bn.js';

declare class Spl {
    static getAssociatedTokenAccount({ mint, owner }: {
        mint: PublicKey;
        owner: PublicKey;
    }): Promise<PublicKey>;
    static makeCreateAssociatedTokenAccountInstruction({ mint, associatedAccount, owner, payer, }: {
        mint: PublicKey;
        associatedAccount: PublicKey;
        owner: PublicKey;
        payer: PublicKey;
    }): TransactionInstruction;
    static makeEnsureWrappedNativeAccountBalanceInstructions({ connection, owner, accountKey, payer, amount, commitment, }: {
        connection: Connection;
        owner: PublicKey;
        accountKey: PublicKey;
        payer: PublicKey;
        amount: BigNumberish;
        commitment?: Commitment;
    }): Promise<TransactionInstruction[]>;
    static makeCreateWrappedNativeAccountInstructions({ connection, owner, payer, amount, commitment, }: {
        connection: Connection;
        owner: PublicKey;
        payer: PublicKey;
        amount: BigNumberish;
        commitment?: Commitment;
    }): Promise<{
        newAccount: Keypair;
        instructions: TransactionInstruction[];
    }>;
    static insertCreateWrappedNativeAccountInstructions({ connection, owner, payer, amount, instructions, signers, commitment, }: {
        connection: Connection;
        owner: PublicKey;
        payer: PublicKey;
        amount: BigNumberish;
        instructions: TransactionInstruction[];
        signers: Signer[];
        commitment?: Commitment;
    }): Promise<PublicKey>;
    static makeInitMintInstruction({ mint, decimals, mintAuthority, freezeAuthority, }: {
        mint: PublicKey;
        decimals: number;
        mintAuthority: PublicKey;
        freezeAuthority?: PublicKey | null;
    }): TransactionInstruction;
    static makeMintToInstruction({ mint, dest, authority, amount, multiSigners, }: {
        mint: PublicKey;
        dest: PublicKey;
        authority: PublicKey;
        amount: BigNumberish;
        multiSigners?: Signer[];
    }): TransactionInstruction;
    static makeInitAccountInstruction({ mint, tokenAccount, owner, }: {
        mint: PublicKey;
        tokenAccount: PublicKey;
        owner: PublicKey;
    }): TransactionInstruction;
    static makeTransferInstruction({ source, destination, owner, amount, multiSigners, }: {
        source: PublicKey;
        destination: PublicKey;
        owner: PublicKey;
        amount: BigNumberish;
        multiSigners?: Signer[];
    }): TransactionInstruction;
    static makeCloseAccountInstruction({ tokenAccount, owner, payer, multiSigners, }: {
        tokenAccount: PublicKey;
        owner: PublicKey;
        payer: PublicKey;
        multiSigners?: Signer[];
    }): TransactionInstruction;
}

export { Spl };
