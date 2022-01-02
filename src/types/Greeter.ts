/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface GreeterInterface extends utils.Interface {
  functions: {
    "greet()": FunctionFragment;
    "greeting()": FunctionFragment;
    "setGreeting(string)": FunctionFragment;
    "throwError()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "greet", values?: undefined): string;
  encodeFunctionData(functionFragment: "greeting", values?: undefined): string;
  encodeFunctionData(functionFragment: "setGreeting", values: [string]): string;
  encodeFunctionData(
    functionFragment: "throwError",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "greet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "greeting", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setGreeting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "throwError", data: BytesLike): Result;

  events: {};
}

export interface Greeter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GreeterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    greet(overrides?: CallOverrides): Promise<[string]>;

    greeting(overrides?: CallOverrides): Promise<[string]>;

    setGreeting(
      _greeting: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    throwError(overrides?: CallOverrides): Promise<[void]>;
  };

  greet(overrides?: CallOverrides): Promise<string>;

  greeting(overrides?: CallOverrides): Promise<string>;

  setGreeting(
    _greeting: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  throwError(overrides?: CallOverrides): Promise<void>;

  callStatic: {
    greet(overrides?: CallOverrides): Promise<string>;

    greeting(overrides?: CallOverrides): Promise<string>;

    setGreeting(_greeting: string, overrides?: CallOverrides): Promise<void>;

    throwError(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    greet(overrides?: CallOverrides): Promise<BigNumber>;

    greeting(overrides?: CallOverrides): Promise<BigNumber>;

    setGreeting(
      _greeting: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    throwError(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    greet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    greeting(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setGreeting(
      _greeting: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    throwError(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
