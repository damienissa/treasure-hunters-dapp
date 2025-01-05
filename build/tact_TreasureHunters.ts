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
    DictionaryValue,
    Sender,
    Slice,
    TupleBuilder,
    TupleReader
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadGetterTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type StdAddress = {
    $$type: 'StdAddress';
    workchain: bigint;
    address: bigint;
}

export function storeStdAddress(src: StdAddress) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.workchain, 8);
        b_0.storeUint(src.address, 256);
    };
}

export function loadStdAddress(slice: Slice) {
    let sc_0 = slice;
    let _workchain = sc_0.loadIntBig(8);
    let _address = sc_0.loadUintBig(256);
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

function loadTupleStdAddress(source: TupleReader) {
    let _workchain = source.readBigNumber();
    let _address = source.readBigNumber();
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

function loadGetterTupleStdAddress(source: TupleReader) {
    let _workchain = source.readBigNumber();
    let _address = source.readBigNumber();
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

function storeTupleStdAddress(source: StdAddress) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.workchain);
    builder.writeNumber(source.address);
    return builder.build();
}

function dictValueParserStdAddress(): DictionaryValue<StdAddress> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStdAddress(src)).endCell());
        },
        parse: (src) => {
            return loadStdAddress(src.loadRef().beginParse());
        }
    }
}

export type VarAddress = {
    $$type: 'VarAddress';
    workchain: bigint;
    address: Slice;
}

export function storeVarAddress(src: VarAddress) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.workchain, 32);
        b_0.storeRef(src.address.asCell());
    };
}

export function loadVarAddress(slice: Slice) {
    let sc_0 = slice;
    let _workchain = sc_0.loadIntBig(32);
    let _address = sc_0.loadRef().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

function loadTupleVarAddress(source: TupleReader) {
    let _workchain = source.readBigNumber();
    let _address = source.readCell().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

function loadGetterTupleVarAddress(source: TupleReader) {
    let _workchain = source.readBigNumber();
    let _address = source.readCell().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

function storeTupleVarAddress(source: VarAddress) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.workchain);
    builder.writeSlice(source.address.asCell());
    return builder.build();
}

function dictValueParserVarAddress(): DictionaryValue<VarAddress> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeVarAddress(src)).endCell());
        },
        parse: (src) => {
            return loadVarAddress(src.loadRef().beginParse());
        }
    }
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
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw.asCell());
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadGetterTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw.asCell());
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
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
        let b_0 = builder;
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
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadGetterTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadGetterTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadGetterTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadGetterTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwner = {
    $$type: 'ChangeOwner';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwner(src: ChangeOwner) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2174598809, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwner(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2174598809) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwner(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadGetterTupleChangeOwner(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwner(source: ChangeOwner) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeChangeOwner(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwner(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwnerOk = {
    $$type: 'ChangeOwnerOk';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwnerOk(src: ChangeOwnerOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(846932810, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwnerOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 846932810) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwnerOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadGetterTupleChangeOwnerOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwnerOk(source: ChangeOwnerOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwnerOk(): DictionaryValue<ChangeOwnerOk> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeChangeOwnerOk(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwnerOk(src.loadRef().beginParse());
        }
    }
}

export type BuyTicket = {
    $$type: 'BuyTicket';
}

export function storeBuyTicket(src: BuyTicket) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3031985754, 32);
    };
}

export function loadBuyTicket(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3031985754) { throw Error('Invalid prefix'); }
    return { $$type: 'BuyTicket' as const };
}

function loadTupleBuyTicket(source: TupleReader) {
    return { $$type: 'BuyTicket' as const };
}

function loadGetterTupleBuyTicket(source: TupleReader) {
    return { $$type: 'BuyTicket' as const };
}

function storeTupleBuyTicket(source: BuyTicket) {
    let builder = new TupleBuilder();
    return builder.build();
}

function dictValueParserBuyTicket(): DictionaryValue<BuyTicket> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeBuyTicket(src)).endCell());
        },
        parse: (src) => {
            return loadBuyTicket(src.loadRef().beginParse());
        }
    }
}

export type BuyTicketWithDiscount = {
    $$type: 'BuyTicketWithDiscount';
    referrer: Address;
}

export function storeBuyTicketWithDiscount(src: BuyTicketWithDiscount) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(345388864, 32);
        b_0.storeAddress(src.referrer);
    };
}

export function loadBuyTicketWithDiscount(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 345388864) { throw Error('Invalid prefix'); }
    let _referrer = sc_0.loadAddress();
    return { $$type: 'BuyTicketWithDiscount' as const, referrer: _referrer };
}

function loadTupleBuyTicketWithDiscount(source: TupleReader) {
    let _referrer = source.readAddress();
    return { $$type: 'BuyTicketWithDiscount' as const, referrer: _referrer };
}

function loadGetterTupleBuyTicketWithDiscount(source: TupleReader) {
    let _referrer = source.readAddress();
    return { $$type: 'BuyTicketWithDiscount' as const, referrer: _referrer };
}

function storeTupleBuyTicketWithDiscount(source: BuyTicketWithDiscount) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.referrer);
    return builder.build();
}

function dictValueParserBuyTicketWithDiscount(): DictionaryValue<BuyTicketWithDiscount> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeBuyTicketWithDiscount(src)).endCell());
        },
        parse: (src) => {
            return loadBuyTicketWithDiscount(src.loadRef().beginParse());
        }
    }
}

export type Withdraw = {
    $$type: 'Withdraw';
}

export function storeWithdraw(src: Withdraw) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(593874976, 32);
    };
}

export function loadWithdraw(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 593874976) { throw Error('Invalid prefix'); }
    return { $$type: 'Withdraw' as const };
}

function loadTupleWithdraw(source: TupleReader) {
    return { $$type: 'Withdraw' as const };
}

function loadGetterTupleWithdraw(source: TupleReader) {
    return { $$type: 'Withdraw' as const };
}

function storeTupleWithdraw(source: Withdraw) {
    let builder = new TupleBuilder();
    return builder.build();
}

function dictValueParserWithdraw(): DictionaryValue<Withdraw> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeWithdraw(src)).endCell());
        },
        parse: (src) => {
            return loadWithdraw(src.loadRef().beginParse());
        }
    }
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
        let b_0 = builder;
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
    let sc_0 = slice;
    let _owner = sc_0.loadAddress();
    let _numberOfPlayers = sc_0.loadUintBig(8);
    let _ticketPrice = sc_0.loadUintBig(64);
    let _players = Dictionary.load(Dictionary.Keys.BigInt(257), Dictionary.Values.Address(), sc_0);
    let _playersLength = sc_0.loadUintBig(8);
    let _playedAtLeastOnce = Dictionary.load(Dictionary.Keys.Address(), Dictionary.Values.Bool(), sc_0);
    let _discountPercent = sc_0.loadUintBig(8);
    let _gameInProgress = sc_0.loadBit();
    let _lastGameWinners = Dictionary.load(Dictionary.Keys.Address(), Dictionary.Values.BigInt(257), sc_0);
    return { $$type: 'TreasureHunters$Data' as const, owner: _owner, numberOfPlayers: _numberOfPlayers, ticketPrice: _ticketPrice, players: _players, playersLength: _playersLength, playedAtLeastOnce: _playedAtLeastOnce, discountPercent: _discountPercent, gameInProgress: _gameInProgress, lastGameWinners: _lastGameWinners };
}

function loadTupleTreasureHunters$Data(source: TupleReader) {
    let _owner = source.readAddress();
    let _numberOfPlayers = source.readBigNumber();
    let _ticketPrice = source.readBigNumber();
    let _players = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), Dictionary.Values.Address(), source.readCellOpt());
    let _playersLength = source.readBigNumber();
    let _playedAtLeastOnce = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.Bool(), source.readCellOpt());
    let _discountPercent = source.readBigNumber();
    let _gameInProgress = source.readBoolean();
    let _lastGameWinners = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigInt(257), source.readCellOpt());
    return { $$type: 'TreasureHunters$Data' as const, owner: _owner, numberOfPlayers: _numberOfPlayers, ticketPrice: _ticketPrice, players: _players, playersLength: _playersLength, playedAtLeastOnce: _playedAtLeastOnce, discountPercent: _discountPercent, gameInProgress: _gameInProgress, lastGameWinners: _lastGameWinners };
}

function loadGetterTupleTreasureHunters$Data(source: TupleReader) {
    let _owner = source.readAddress();
    let _numberOfPlayers = source.readBigNumber();
    let _ticketPrice = source.readBigNumber();
    let _players = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), Dictionary.Values.Address(), source.readCellOpt());
    let _playersLength = source.readBigNumber();
    let _playedAtLeastOnce = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.Bool(), source.readCellOpt());
    let _discountPercent = source.readBigNumber();
    let _gameInProgress = source.readBoolean();
    let _lastGameWinners = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigInt(257), source.readCellOpt());
    return { $$type: 'TreasureHunters$Data' as const, owner: _owner, numberOfPlayers: _numberOfPlayers, ticketPrice: _ticketPrice, players: _players, playersLength: _playersLength, playedAtLeastOnce: _playedAtLeastOnce, discountPercent: _discountPercent, gameInProgress: _gameInProgress, lastGameWinners: _lastGameWinners };
}

function storeTupleTreasureHunters$Data(source: TreasureHunters$Data) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.owner);
    builder.writeNumber(source.numberOfPlayers);
    builder.writeNumber(source.ticketPrice);
    builder.writeCell(source.players.size > 0 ? beginCell().storeDictDirect(source.players, Dictionary.Keys.BigInt(257), Dictionary.Values.Address()).endCell() : null);
    builder.writeNumber(source.playersLength);
    builder.writeCell(source.playedAtLeastOnce.size > 0 ? beginCell().storeDictDirect(source.playedAtLeastOnce, Dictionary.Keys.Address(), Dictionary.Values.Bool()).endCell() : null);
    builder.writeNumber(source.discountPercent);
    builder.writeBoolean(source.gameInProgress);
    builder.writeCell(source.lastGameWinners.size > 0 ? beginCell().storeDictDirect(source.lastGameWinners, Dictionary.Keys.Address(), Dictionary.Values.BigInt(257)).endCell() : null);
    return builder.build();
}

function dictValueParserTreasureHunters$Data(): DictionaryValue<TreasureHunters$Data> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTreasureHunters$Data(src)).endCell());
        },
        parse: (src) => {
            return loadTreasureHunters$Data(src.loadRef().beginParse());
        }
    }
}

type TreasureHunters_init_args = {
    $$type: 'TreasureHunters_init_args';
}

function initTreasureHunters_init_args(src: TreasureHunters_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
    };
}

async function TreasureHunters_init() {
    const __code = Cell.fromBase64('te6ccgECIwEABZIAART/APSkE/S88sgLAQIBYgIDA3rQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVGNs88uCCIAQFAgEgEhME9AGSMH/gcCHXScIflTAg1wsf3iCCELS4blq6jqEw0x8BghC0uG5auvLggW0xMPhBbyQTXwMnuZLyJd7bPH/gIIIQI2XQILqPKjDTHwGCECNl0CC68uCBbTEw2zz4J28QghA7msoAoVKQcFlwbW1t2zwwf+CCEJRqmLa6BgcQCACQyPhDAcx/AcoAVYBQmCDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFhbLBxTLPxL0AMsHAcj0ABLLBxPKAPQAyQHMye1UAX74QW8kECNfAwSBAQslf3EhbpVbWfRZMJjIAc8AQTP0QeIWgQEBVCBmIG6VMFn0WjCUQTP0FOIEpFMHvuMABAUJABL4QlKQxwXy4IQBWI6n0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4DBwDwK+KFE4UThHM1RmgFIL2zwggQELgQEBWfSCb6UgllAj1wAwWJZsIW0ybQHikI6rfyICgEIQI21tbds8MIEBCyICgQEBQTP0dG+lIJZQI9cAMFiWbCFtMm0B4uhbbVAzBHAKEATcbVR5h1R5h1R5h3XbPG1wgQEBVHHcVH7cVH7cLts8pzKAZKkEIhBFIW6VW1n0WjCYyAHPAEEz9ELigQEBcVR+3FR+3FR+3Ns8px6AZKkEIiFulVtZ9FowmMgBzwBBM/RC4oEBAXJUftxUftxUftwLDQ0MANI3XwQzM21wk1MCuY5YcCT4RG6X+CX4FX/4ZN4hofgRoCWBAQEiWfQMb6ExjjUlgQEBIln0DG+hkjBt3yBu8tCAE4EBAVIyIG6VMFn0WjCUQTP0FOIBpFAlgQEB9FowA6UDBJEw4ugUXwQE8ts8pwqAZKkEIiFulVtZ9FowmMgBzwBBM/RC4oEBAXNUftxUftxUftzbPKcHgGSpBCIhbpVbWfRaMJjIAc8AQTP0QuIQbBBbEEoQOUhwgQEBUNx0DNs8pwOAZKkEJRBHEDYQJSFulVtZ9FowmMgBzwBBM/RC4iKBAQENDQ0OABZfBmwSqKdGgGSpBADI9IRvpSCREpUxbTJtAeKQjlCBAQuBAQFUVABScEEz9AxvoZQB1wAwkltt4iBu8tCAEDcSgQEBIW6VW1n0WTCYyAHPAEEz9EHiAqSBAQFURBZZ9HhvpSCREpUxbTJtAeIQRuhfBQE8bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwwEAHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wgRAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAgEgFBUCASAYGQIRuhI9s82zxskYIBYCEbhR3bPNs8bJGCAXAAIkAAIoAgEgGhsAEbgr7tRNDSAAGAIBZhwdAhG10btnm2eNkjAgIQIQqqvbPNs8bJEgHgIQqKPbPNs8bJEgHwACJQACIAG27UTQ1AH4Y9IAAY5A+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHTB9M/9ATTB9QB0PQE0wfSAPQEMBBJEEgQRxBGEEVsGeAw+CjXCwqDCbry4InbPCIACPgnbxAAMPhBbyQQI18DbYAUghJUC+QAWG1wWHp/bQ==');
    const __system = Cell.fromBase64('te6cckECJQEABZwAAQHAAQEFoZ2ZAgEU/wD0pBP0vPLICwMCAWIEEwN60AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRjbPPLggiEFEgT0AZIwf+BwIddJwh+VMCDXCx/eIIIQtLhuWrqOoTDTHwGCELS4blq68uCBbTEw+EFvJBNfAye5kvIl3ts8f+AgghAjZdAguo8qMNMfAYIQI2XQILry4IFtMTDbPPgnbxCCEDuaygChUpBwWXBtbW3bPDB/4IIQlGqYtroGDRAOAX74QW8kECNfAwSBAQslf3EhbpVbWfRZMJjIAc8AQTP0QeIWgQEBVCBmIG6VMFn0WjCUQTP0FOIEpFMHvuMABAUHAr4oUThROEczVGaAUgvbPCCBAQuBAQFZ9IJvpSCWUCPXADBYlmwhbTJtAeKQjqt/IgKAQhAjbW1t2zwwgQELIgKBAQFBM/R0b6UgllAj1wAwWJZsIW0ybQHi6FttUDMEcAgQBNxtVHmHVHmHVHmHdds8bXCBAQFUcdxUftxUftwu2zynMoBkqQQiEEUhbpVbWfRaMJjIAc8AQTP0QuKBAQFxVH7cVH7cVH7c2zynHoBkqQQiIW6VW1n0WjCYyAHPAEEz9ELigQEBclR+3FR+3FR+3AkLCwoA0jdfBDMzbXCTUwK5jlhwJPhEbpf4JfgVf/hk3iGh+BGgJYEBASJZ9AxvoTGONSWBAQEiWfQMb6GSMG3fIG7y0IATgQEBUjIgbpUwWfRaMJRBM/QU4gGkUCWBAQH0WjADpQMEkTDi6BRfBATy2zynCoBkqQQiIW6VW1n0WjCYyAHPAEEz9ELigQEBc1R+3FR+3FR+3Ns8pweAZKkEIiFulVtZ9FowmMgBzwBBM/RC4hBsEFsQShA5SHCBAQFQ3HQM2zynA4BkqQQlEEcQNhAlIW6VW1n0WjCYyAHPAEEz9ELiIoEBAQsLCwwAFl8GbBKop0aAZKkEAMj0hG+lIJESlTFtMm0B4pCOUIEBC4EBAVRUAFJwQTP0DG+hlAHXADCSW23iIG7y0IAQNxKBAQEhbpVbWfRZMJjIAc8AQTP0QeICpIEBAVREFln0eG+lIJESlTFtMm0B4hBG6F8FABL4QlKQxwXy4IQBWI6n0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4DBwDwE8bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwwEAHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wgRAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAJDI+EMBzH8BygBVgFCYINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WFssHFMs/EvQAywcByPQAEssHE8oA9ADJAczJ7VQCASAUGQIBIBUXAhG6Ej2zzbPGyRghFgACJAIRuFHds82zxskYIRgAAigCASAaJAIBIBsgAgFmHB4CEKqr2zzbPGyRIR0AAiUCEKij2zzbPGyRIR8AAiACEbXRu2ebZ42SMCEjAbbtRNDUAfhj0gABjkD6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdMH0z/0BNMH1AHQ9ATTB9IA9AQwEEkQSBBHEEYQRWwZ4DD4KNcLCoMJuvLgids8IgAw+EFvJBAjXwNtgBSCElQL5ABYbXBYen9tAAj4J28QABG4K+7UTQ0gABg63RAp');
    let builder = beginCell();
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
        let builder = new TupleBuilder();
        let source = (await provider.get('requestLastGameWinners', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigInt(257), source.readCellOpt());
        return result;
    }

    async getContractBalance(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('contractBalance', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }

    async getNumberOfCurrentPlayers(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('numberOfCurrentPlayers', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }

    async getCurrentGame(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('currentGame', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), Dictionary.Values.Address(), source.readCellOpt());
        return result;
    }

    async getOwner(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('owner', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }

}