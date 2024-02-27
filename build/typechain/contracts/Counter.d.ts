import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../common";
export interface CounterInterface extends Interface {
    getFunction(nameOrSignature: "count" | "decrement" | "increment"): FunctionFragment;
    encodeFunctionData(functionFragment: "count", values?: undefined): string;
    encodeFunctionData(functionFragment: "decrement", values?: undefined): string;
    encodeFunctionData(functionFragment: "increment", values?: undefined): string;
    decodeFunctionResult(functionFragment: "count", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decrement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increment", data: BytesLike): Result;
}
export interface Counter extends BaseContract {
    connect(runner?: ContractRunner | null): Counter;
    waitForDeployment(): Promise<this>;
    interface: CounterInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    count: TypedContractMethod<[], [bigint], "view">;
    decrement: TypedContractMethod<[], [void], "nonpayable">;
    increment: TypedContractMethod<[], [void], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "count"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "decrement"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "increment"): TypedContractMethod<[], [void], "nonpayable">;
    filters: {};
}
