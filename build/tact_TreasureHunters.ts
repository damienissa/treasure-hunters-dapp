import {
    ABIGetter,
    ABIReceiver,
    ABIType,
    Address,
    beginCell,
    Builder,
    Cell,
    Contract,
    ContractABI,
    contractAddress,
    ContractProvider,
    Dictionary,
    Sender,
    Slice,
    TupleBuilder
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    const sc_0 = slice;
    const _code = sc_0.loadRef();
    const _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

export type StdAddress = {
    $$type: 'StdAddress';
    workchain: bigint;
    address: bigint;
}

export function storeStdAddress(src: StdAddress) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeInt(src.workchain, 8);
        b_0.storeUint(src.address, 256);
    };
}

export function loadStdAddress(slice: Slice) {
    const sc_0 = slice;
    const _workchain = sc_0.loadIntBig(8);
    const _address = sc_0.loadUintBig(256);
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

export type VarAddress = {
    $$type: 'VarAddress';
    workchain: bigint;
    address: Slice;
}

export function storeVarAddress(src: VarAddress) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeInt(src.workchain, 32);
        b_0.storeRef(src.address.asCell());
    };
}

export function loadVarAddress(slice: Slice) {
    const sc_0 = slice;
    const _workchain = sc_0.loadIntBig(32);
    const _address = sc_0.loadRef().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Slice;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw.asCell());
    };
}

export function loadContext(slice: Slice) {
    const sc_0 = slice;
    const _bounced = sc_0.loadBit();
    const _sender = sc_0.loadAddress();
    const _value = sc_0.loadIntBig(257);
    const _raw = sc_0.loadRef().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    const sc_0 = slice;
    const _bounce = sc_0.loadBit();
    const _to = sc_0.loadAddress();
    const _value = sc_0.loadIntBig(257);
    const _mode = sc_0.loadIntBig(257);
    const _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    const _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    const _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    const _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    const _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    const _queryId = sc_0.loadUintBig(64);
    const _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

export type ChangeOwner = {
    $$type: 'ChangeOwner';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwner(src: ChangeOwner) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(2174598809, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwner(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 2174598809) { throw Error('Invalid prefix'); }
    const _queryId = sc_0.loadUintBig(64);
    const _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

export type ChangeOwnerOk = {
    $$type: 'ChangeOwnerOk';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwnerOk(src: ChangeOwnerOk) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(846932810, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwnerOk(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 846932810) { throw Error('Invalid prefix'); }
    const _queryId = sc_0.loadUintBig(64);
    const _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

export type BuyTicket = {
    $$type: 'BuyTicket';
}

export function storeBuyTicket(src: BuyTicket) {
    console.log('storeBuyTicket', src);
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(3031985754, 32);
    };
}

export function loadBuyTicket(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 3031985754) { throw Error('Invalid prefix'); }
    return { $$type: 'BuyTicket' as const };
}

export type BuyTicketWithDiscount = {
    $$type: 'BuyTicketWithDiscount';
    referrer: Address;
}

export function storeBuyTicketWithDiscount(src: BuyTicketWithDiscount) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(345388864, 32);
        b_0.storeAddress(src.referrer);
    };
}

export function loadBuyTicketWithDiscount(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 345388864) { throw Error('Invalid prefix'); }
    const _referrer = sc_0.loadAddress();
    return { $$type: 'BuyTicketWithDiscount' as const, referrer: _referrer };
}

export type Withdraw = {
    $$type: 'Withdraw';
}

export function storeWithdraw(src: Withdraw) {
    console.log('storeWithdraw', src);
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(593874976, 32);
    };
}

export function loadWithdraw(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 593874976) { throw Error('Invalid prefix'); }
    return { $$type: 'Withdraw' as const };
}

export type TreasureHunters$Data = {
    $$type: 'TreasureHunters$Data';
    owner: Address;
    numberOfPlayers: bigint;
    ticketPrice: bigint;
    players: Dictionary<bigint, Address>;
    playersLength: bigint;
    playedAtLeastOnce: Dictionary<Address, boolean>;
    discountPercent: bigint;
    gameInProgress: boolean;
    lastGameWinners: Dictionary<Address, bigint>;
}

export function storeTreasureHunters$Data(src: TreasureHunters$Data) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeAddress(src.owner);
        b_0.storeUint(src.numberOfPlayers, 8);
        b_0.storeUint(src.ticketPrice, 64);
        b_0.storeDict(src.players, Dictionary.Keys.BigInt(257), Dictionary.Values.Address());
        b_0.storeUint(src.playersLength, 8);
        b_0.storeDict(src.playedAtLeastOnce, Dictionary.Keys.Address(), Dictionary.Values.Bool());
        b_0.storeUint(src.discountPercent, 8);
        b_0.storeBit(src.gameInProgress);
        b_0.storeDict(src.lastGameWinners, Dictionary.Keys.Address(), Dictionary.Values.BigInt(257));
    };
}

export function loadTreasureHunters$Data(slice: Slice) {
    const sc_0 = slice;
    const _owner = sc_0.loadAddress();
    const _numberOfPlayers = sc_0.loadUintBig(8);
    const _ticketPrice = sc_0.loadUintBig(64);
    const _players = Dictionary.load(Dictionary.Keys.BigInt(257), Dictionary.Values.Address(), sc_0);
    const _playersLength = sc_0.loadUintBig(8);
    const _playedAtLeastOnce = Dictionary.load(Dictionary.Keys.Address(), Dictionary.Values.Bool(), sc_0);
    const _discountPercent = sc_0.loadUintBig(8);
    const _gameInProgress = sc_0.loadBit();
    const _lastGameWinners = Dictionary.load(Dictionary.Keys.Address(), Dictionary.Values.BigInt(257), sc_0);
    return { $$type: 'TreasureHunters$Data' as const, owner: _owner, numberOfPlayers: _numberOfPlayers, ticketPrice: _ticketPrice, players: _players, playersLength: _playersLength, playedAtLeastOnce: _playedAtLeastOnce, discountPercent: _discountPercent, gameInProgress: _gameInProgress, lastGameWinners: _lastGameWinners };
}

type TreasureHunters_init_args = {
    $$type: 'TreasureHunters_init_args';
}

function initTreasureHunters_init_args(src: TreasureHunters_init_args) {
    return (builder: Builder) => {
        console.log('initTreasureHunters_init_args', builder, src);
    };
}

async function TreasureHunters_init() {
    const __code = Cell.fromBase64('te6ccgECIwEABZIAART/APSkE/S88sgLAQIBYgIDA3rQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVGNs88uCCIAQFAgEgEhME9AGSMH/gcCHXScIflTAg1wsf3iCCELS4blq6jqEw0x8BghC0uG5auvLggW0xMPhBbyQTXwMnuZLyJd7bPH/gIIIQI2XQILqPKjDTHwGCECNl0CC68uCBbTEw2zz4J28QghA7msoAoVKQcFlwbW1t2zwwf+CCEJRqmLa6BgcQCACQyPhDAcx/AcoAVYBQmCDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFhbLBxTLPxL0AMsHAcj0ABLLBxPKAPQAyQHMye1UAX74QW8kECNfAwSBAQslf3EhbpVbWfRZMJjIAc8AQTP0QeIWgQEBVCBmIG6VMFn0WjCUQTP0FOIEpFMHvuMABAUJABL4QlKQxwXy4IQBWI6n0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4DBwDwK+KFE4UThHM1RmgFIL2zwggQELgQEBWfSCb6UgllAj1wAwWJZsIW0ybQHikI6rfyICgEIQI21tbds8MIEBCyICgQEBQTP0dG+lIJZQI9cAMFiWbCFtMm0B4uhbbVAzBHAKEATcbVR5h1R5h1R5h3XbPG1wgQEBVHHcVH7cVH7cLts8pzKAZKkEIhBFIW6VW1n0WjCYyAHPAEEz9ELigQEBcVR+3FR+3FR+3Ns8px6AZKkEIiFulVtZ9FowmMgBzwBBM/RC4oEBAXJUftxUftxUftwLDQ0MANI3XwQzM21wk1MCuY5YcCT4RG6X+CX4FX/4ZN4hofgRoCWBAQEiWfQMb6ExjjUlgQEBIln0DG+hkjBt3yBu8tCAE4EBAVIyIG6VMFn0WjCUQTP0FOIBpFAlgQEB9FowA6UDBJEw4ugUXwQE8ts8pwqAZKkEIiFulVtZ9FowmMgBzwBBM/RC4oEBAXNUftxUftxUftzbPKcHgGSpBCIhbpVbWfRaMJjIAc8AQTP0QuIQbBBbEEoQOUhwgQEBUNx0DNs8pwOAZKkEJRBHEDYQJSFulVtZ9FowmMgBzwBBM/RC4iKBAQENDQ0OABZfBmwSqKdGgGSpBADI9IRvpSCREpUxbTJtAeKQjlCBAQuBAQFUVABScEEz9AxvoZQB1wAwkltt4iBu8tCAEDcSgQEBIW6VW1n0WTCYyAHPAEEz9EHiAqSBAQFURBZZ9HhvpSCREpUxbTJtAeIQRuhfBQE8bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwwEAHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wgRAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAgEgFBUCASAYGQIRuhI9s82zxskYIBYCEbhR3bPNs8bJGCAXAAIkAAIoAgEgGhsAEbgr7tRNDSAAGAIBZhwdAhG10btnm2eNkjAgIQIQqqvbPNs8bJEgHgIQqKPbPNs8bJEgHwACJQACIAG27UTQ1AH4Y9IAAY5A+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHTB9M/9ATTB9QB0PQE0wfSAPQEMBBJEEgQRxBGEEVsGeAw+CjXCwqDCbry4InbPCIACPgnbxAAMPhBbyQQI18DbYAUghJUC+QAWG1wWHp/bQ==');
    const __system = Cell.fromBase64('te6cckECJQEABZwAAQHAAQEFoZ2ZAgEU/wD0pBP0vPLICwMCAWIEEwN60AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRjbPPLggiEFEgT0AZIwf+BwIddJwh+VMCDXCx/eIIIQtLhuWrqOoTDTHwGCELS4blq68uCBbTEw+EFvJBNfAye5kvIl3ts8f+AgghAjZdAguo8qMNMfAYIQI2XQILry4IFtMTDbPPgnbxCCEDuaygChUpBwWXBtbW3bPDB/4IIQlGqYtroGDRAOAX74QW8kECNfAwSBAQslf3EhbpVbWfRZMJjIAc8AQTP0QeIWgQEBVCBmIG6VMFn0WjCUQTP0FOIEpFMHvuMABAUHAr4oUThROEczVGaAUgvbPCCBAQuBAQFZ9IJvpSCWUCPXADBYlmwhbTJtAeKQjqt/IgKAQhAjbW1t2zwwgQELIgKBAQFBM/R0b6UgllAj1wAwWJZsIW0ybQHi6FttUDMEcAgQBNxtVHmHVHmHVHmHdds8bXCBAQFUcdxUftxUftwu2zynMoBkqQQiEEUhbpVbWfRaMJjIAc8AQTP0QuKBAQFxVH7cVH7cVH7c2zynHoBkqQQiIW6VW1n0WjCYyAHPAEEz9ELigQEBclR+3FR+3FR+3AkLCwoA0jdfBDMzbXCTUwK5jlhwJPhEbpf4JfgVf/hk3iGh+BGgJYEBASJZ9AxvoTGONSWBAQEiWfQMb6GSMG3fIG7y0IATgQEBUjIgbpUwWfRaMJRBM/QU4gGkUCWBAQH0WjADpQMEkTDi6BRfBATy2zynCoBkqQQiIW6VW1n0WjCYyAHPAEEz9ELigQEBc1R+3FR+3FR+3Ns8pweAZKkEIiFulVtZ9FowmMgBzwBBM/RC4hBsEFsQShA5SHCBAQFQ3HQM2zynA4BkqQQlEEcQNhAlIW6VW1n0WjCYyAHPAEEz9ELiIoEBAQsLCwwAFl8GbBKop0aAZKkEAMj0hG+lIJESlTFtMm0B4pCOUIEBC4EBAVRUAFJwQTP0DG+hlAHXADCSW23iIG7y0IAQNxKBAQEhbpVbWfRZMJjIAc8AQTP0QeICpIEBAVREFln0eG+lIJESlTFtMm0B4hBG6F8FABL4QlKQxwXy4IQBWI6n0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4DBwDwE8bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwwEAHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wgRAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAJDI+EMBzH8BygBVgFCYINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WFssHFMs/EvQAywcByPQAEssHE8oA9ADJAczJ7VQCASAUGQIBIBUXAhG6Ej2zzbPGyRghFgACJAIRuFHds82zxskYIRgAAigCASAaJAIBIBsgAgFmHB4CEKqr2zzbPGyRIR0AAiUCEKij2zzbPGyRIR8AAiACEbXRu2ebZ42SMCEjAbbtRNDUAfhj0gABjkD6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdMH0z/0BNMH1AHQ9ATTB9IA9AQwEEkQSBBHEEYQRWwZ4DD4KNcLCoMJuvLgids8IgAw+EFvJBAjXwNtgBSCElQL5ABYbXBYen9tAAj4J28QABG4K+7UTQ0gABg63RAp');
    const builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initTreasureHunters_init_args({ $$type: 'TreasureHunters_init_args' })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const TreasureHunters_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack underflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    11: { message: `'Unknown' error` },
    12: { message: `Fatal error` },
    13: { message: `Out of gas error` },
    14: { message: `Virtualization error` },
    32: { message: `Action list is invalid` },
    33: { message: `Action list is too long` },
    34: { message: `Action is invalid or not supported` },
    35: { message: `Invalid source address in outbound message` },
    36: { message: `Invalid destination address in outbound message` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    39: { message: `Outbound message does not fit into a cell after rewriting` },
    40: { message: `Cannot process a message` },
    41: { message: `Library reference is null` },
    42: { message: `Library change action error` },
    43: { message: `Exceeded maximum number of cells in the library or the maximum depth of the Merkle tree` },
    50: { message: `Account state size exceeded limits` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
}

const TreasureHunters_types: ABIType[] = [
    { "name": "StateInit", "header": null, "fields": [{ "name": "code", "type": { "kind": "simple", "type": "cell", "optional": false } }, { "name": "data", "type": { "kind": "simple", "type": "cell", "optional": false } }] },
    { "name": "StdAddress", "header": null, "fields": [{ "name": "workchain", "type": { "kind": "simple", "type": "int", "optional": false, "format": 8 } }, { "name": "address", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 256 } }] },
    { "name": "VarAddress", "header": null, "fields": [{ "name": "workchain", "type": { "kind": "simple", "type": "int", "optional": false, "format": 32 } }, { "name": "address", "type": { "kind": "simple", "type": "slice", "optional": false } }] },
    { "name": "Context", "header": null, "fields": [{ "name": "bounced", "type": { "kind": "simple", "type": "bool", "optional": false } }, { "name": "sender", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "value", "type": { "kind": "simple", "type": "int", "optional": false, "format": 257 } }, { "name": "raw", "type": { "kind": "simple", "type": "slice", "optional": false } }] },
    { "name": "SendParameters", "header": null, "fields": [{ "name": "bounce", "type": { "kind": "simple", "type": "bool", "optional": false } }, { "name": "to", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "value", "type": { "kind": "simple", "type": "int", "optional": false, "format": 257 } }, { "name": "mode", "type": { "kind": "simple", "type": "int", "optional": false, "format": 257 } }, { "name": "body", "type": { "kind": "simple", "type": "cell", "optional": true } }, { "name": "code", "type": { "kind": "simple", "type": "cell", "optional": true } }, { "name": "data", "type": { "kind": "simple", "type": "cell", "optional": true } }] },
    { "name": "Deploy", "header": 2490013878, "fields": [{ "name": "queryId", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }] },
    { "name": "DeployOk", "header": 2952335191, "fields": [{ "name": "queryId", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }] },
    { "name": "FactoryDeploy", "header": 1829761339, "fields": [{ "name": "queryId", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }, { "name": "cashback", "type": { "kind": "simple", "type": "address", "optional": false } }] },
    { "name": "ChangeOwner", "header": 2174598809, "fields": [{ "name": "queryId", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }, { "name": "newOwner", "type": { "kind": "simple", "type": "address", "optional": false } }] },
    { "name": "ChangeOwnerOk", "header": 846932810, "fields": [{ "name": "queryId", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }, { "name": "newOwner", "type": { "kind": "simple", "type": "address", "optional": false } }] },
    { "name": "BuyTicket", "header": 3031985754, "fields": [] },
    { "name": "BuyTicketWithDiscount", "header": 345388864, "fields": [{ "name": "referrer", "type": { "kind": "simple", "type": "address", "optional": false } }] },
    { "name": "Withdraw", "header": 593874976, "fields": [] },
    { "name": "TreasureHunters$Data", "header": null, "fields": [{ "name": "owner", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "numberOfPlayers", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 8 } }, { "name": "ticketPrice", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }, { "name": "players", "type": { "kind": "dict", "key": "int", "value": "address" } }, { "name": "playersLength", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 8 } }, { "name": "playedAtLeastOnce", "type": { "kind": "dict", "key": "address", "value": "bool" } }, { "name": "discountPercent", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 8 } }, { "name": "gameInProgress", "type": { "kind": "simple", "type": "bool", "optional": false } }, { "name": "lastGameWinners", "type": { "kind": "dict", "key": "address", "value": "int" } }] },
]

const TreasureHunters_getters: ABIGetter[] = [
    { "name": "requestLastGameWinners", "arguments": [], "returnType": { "kind": "dict", "key": "address", "value": "int" } },
    { "name": "contractBalance", "arguments": [], "returnType": { "kind": "simple", "type": "int", "optional": false, "format": 257 } },
    { "name": "numberOfCurrentPlayers", "arguments": [], "returnType": { "kind": "simple", "type": "int", "optional": false, "format": 257 } },
    { "name": "currentGame", "arguments": [], "returnType": { "kind": "dict", "key": "int", "value": "address" } },
    { "name": "owner", "arguments": [], "returnType": { "kind": "simple", "type": "address", "optional": false } },
]

export const TreasureHunters_getterMapping: { [key: string]: string } = {
    'requestLastGameWinners': 'getRequestLastGameWinners',
    'contractBalance': 'getContractBalance',
    'numberOfCurrentPlayers': 'getNumberOfCurrentPlayers',
    'currentGame': 'getCurrentGame',
    'owner': 'getOwner',
}

const TreasureHunters_receivers: ABIReceiver[] = [
    { "receiver": "internal", "message": { "kind": "typed", "type": "BuyTicket" } },
    { "receiver": "internal", "message": { "kind": "typed", "type": "Withdraw" } },
    { "receiver": "internal", "message": { "kind": "typed", "type": "Deploy" } },
]

export class TreasureHunters implements Contract {

    static async init() {
        return await TreasureHunters_init();
    }

    static async fromInit() {
        const init = await TreasureHunters_init();
        const address = contractAddress(0, init);
        return new TreasureHunters(address, init);
    }

    static fromAddress(address: Address) {
        return new TreasureHunters(address);
    }

    readonly address: Address;
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types: TreasureHunters_types,
        getters: TreasureHunters_getters,
        receivers: TreasureHunters_receivers,
        errors: TreasureHunters_errors,
    };

    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }

    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean | null | undefined }, message: BuyTicket | Withdraw | Deploy) {

        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'BuyTicket') {
            body = beginCell().store(storeBuyTicket(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Withdraw') {
            body = beginCell().store(storeWithdraw(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }

        await provider.internal(via, { ...args, body: body });

    }

    async getRequestLastGameWinners(provider: ContractProvider) {
        const builder = new TupleBuilder();
        const source = (await provider.get('requestLastGameWinners', builder.build())).stack;
        const result = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigInt(257), source.readCellOpt());
        return result;
    }

    async getContractBalance(provider: ContractProvider) {
        const builder = new TupleBuilder();
        const source = (await provider.get('contractBalance', builder.build())).stack;
        const result = source.readBigNumber();
        return result;
    }

    async getNumberOfCurrentPlayers(provider: ContractProvider) {
        const builder = new TupleBuilder();
        const source = (await provider.get('numberOfCurrentPlayers', builder.build())).stack;
        const result = source.readBigNumber();
        return result;
    }

    async getCurrentGame(provider: ContractProvider) {
        const builder = new TupleBuilder();
        const source = (await provider.get('currentGame', builder.build())).stack;
        const result = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), Dictionary.Values.Address(), source.readCellOpt());
        return result;
    }

    async getOwner(provider: ContractProvider) {
        const builder = new TupleBuilder();
        const source = (await provider.get('owner', builder.build())).stack;
        const result = source.readAddress();
        return result;
    }

}