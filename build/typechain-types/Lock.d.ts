import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface LockInterface extends Interface {
    getFunction(nameOrSignature: "owner" | "unlockTime" | "withdraw"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Withdrawal"): EventFragment;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "unlockTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlockTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}
export declare namespace WithdrawalEvent {
    type InputTuple = [amount: BigNumberish, when: BigNumberish];
    type OutputTuple = [amount: bigint, when: bigint];
    interface OutputObject {
        amount: bigint;
        when: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface Lock extends BaseContract {
    connect(runner?: ContractRunner | null): Lock;
    waitForDeployment(): Promise<this>;
    interface: LockInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    owner: TypedContractMethod<[], [string], "view">;
    unlockTime: TypedContractMethod<[], [bigint], "view">;
    withdraw: TypedContractMethod<[], [void], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "owner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "unlockTime"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "withdraw"): TypedContractMethod<[], [void], "nonpayable">;
    getEvent(key: "Withdrawal"): TypedContractEvent<WithdrawalEvent.InputTuple, WithdrawalEvent.OutputTuple, WithdrawalEvent.OutputObject>;
    filters: {
        "Withdrawal(uint256,uint256)": TypedContractEvent<WithdrawalEvent.InputTuple, WithdrawalEvent.OutputTuple, WithdrawalEvent.OutputObject>;
        Withdrawal: TypedContractEvent<WithdrawalEvent.InputTuple, WithdrawalEvent.OutputTuple, WithdrawalEvent.OutputObject>;
    };
}
