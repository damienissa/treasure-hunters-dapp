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

function loadTupleStateInit(source: TupleReader) {
    const _code = source.readCell();
    const _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadGetterTupleStateInit(source: TupleReader) {
    const _code = source.readCell();
    const _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    const builder = new TupleBuilder();
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

function loadTupleStdAddress(source: TupleReader) {
    const _workchain = source.readBigNumber();
    const _address = source.readBigNumber();
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

function loadGetterTupleStdAddress(source: TupleReader) {
    const _workchain = source.readBigNumber();
    const _address = source.readBigNumber();
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

function storeTupleStdAddress(source: StdAddress) {
    const builder = new TupleBuilder();
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

function loadTupleVarAddress(source: TupleReader) {
    const _workchain = source.readBigNumber();
    const _address = source.readCell().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

function loadGetterTupleVarAddress(source: TupleReader) {
    const _workchain = source.readBigNumber();
    const _address = source.readCell().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

function storeTupleVarAddress(source: VarAddress) {
    const builder = new TupleBuilder();
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

function loadTupleContext(source: TupleReader) {
    const _bounced = source.readBoolean();
    const _sender = source.readAddress();
    const _value = source.readBigNumber();
    const _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadGetterTupleContext(source: TupleReader) {
    const _bounced = source.readBoolean();
    const _sender = source.readAddress();
    const _value = source.readBigNumber();
    const _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    const builder = new TupleBuilder();
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

function loadTupleSendParameters(source: TupleReader) {
    const _bounce = source.readBoolean();
    const _to = source.readAddress();
    const _value = source.readBigNumber();
    const _mode = source.readBigNumber();
    const _body = source.readCellOpt();
    const _code = source.readCellOpt();
    const _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadGetterTupleSendParameters(source: TupleReader) {
    const _bounce = source.readBoolean();
    const _to = source.readAddress();
    const _value = source.readBigNumber();
    const _mode = source.readBigNumber();
    const _body = source.readCellOpt();
    const _code = source.readCellOpt();
    const _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    const builder = new TupleBuilder();
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

function loadTupleDeploy(source: TupleReader) {
    const _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadGetterTupleDeploy(source: TupleReader) {
    const _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    const builder = new TupleBuilder();
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

function loadTupleDeployOk(source: TupleReader) {
    const _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadGetterTupleDeployOk(source: TupleReader) {
    const _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    const builder = new TupleBuilder();
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

function loadTupleFactoryDeploy(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadGetterTupleFactoryDeploy(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    const builder = new TupleBuilder();
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

function loadTupleChangeOwner(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _newOwner = source.readAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadGetterTupleChangeOwner(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _newOwner = source.readAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwner(source: ChangeOwner) {
    const builder = new TupleBuilder();
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

function loadTupleChangeOwnerOk(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _newOwner = source.readAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadGetterTupleChangeOwnerOk(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _newOwner = source.readAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwnerOk(source: ChangeOwnerOk) {
    const builder = new TupleBuilder();
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

export type Config = {
    $$type: 'Config';
    numberOfPlayers: bigint;
    ticketPrice: bigint;
    treasurePercent: bigint;
    referrerBonusPercent: bigint;
}

export function storeConfig(src: Config) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeInt(src.numberOfPlayers, 257);
        b_0.storeCoins(src.ticketPrice);
        b_0.storeCoins(src.treasurePercent);
        b_0.storeInt(src.referrerBonusPercent, 257);
    };
}

export function loadConfig(slice: Slice) {
    const sc_0 = slice;
    const _numberOfPlayers = sc_0.loadIntBig(257);
    const _ticketPrice = sc_0.loadCoins();
    const _treasurePercent = sc_0.loadCoins();
    const _referrerBonusPercent = sc_0.loadIntBig(257);
    return { $$type: 'Config' as const, numberOfPlayers: _numberOfPlayers, ticketPrice: _ticketPrice, treasurePercent: _treasurePercent, referrerBonusPercent: _referrerBonusPercent };
}

function loadTupleConfig(source: TupleReader) {
    const _numberOfPlayers = source.readBigNumber();
    const _ticketPrice = source.readBigNumber();
    const _treasurePercent = source.readBigNumber();
    const _referrerBonusPercent = source.readBigNumber();
    return { $$type: 'Config' as const, numberOfPlayers: _numberOfPlayers, ticketPrice: _ticketPrice, treasurePercent: _treasurePercent, referrerBonusPercent: _referrerBonusPercent };
}

function loadGetterTupleConfig(source: TupleReader) {
    const _numberOfPlayers = source.readBigNumber();
    const _ticketPrice = source.readBigNumber();
    const _treasurePercent = source.readBigNumber();
    const _referrerBonusPercent = source.readBigNumber();
    return { $$type: 'Config' as const, numberOfPlayers: _numberOfPlayers, ticketPrice: _ticketPrice, treasurePercent: _treasurePercent, referrerBonusPercent: _referrerBonusPercent };
}

function storeTupleConfig(source: Config) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.numberOfPlayers);
    builder.writeNumber(source.ticketPrice);
    builder.writeNumber(source.treasurePercent);
    builder.writeNumber(source.referrerBonusPercent);
    return builder.build();
}

function dictValueParserConfig(): DictionaryValue<Config> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeConfig(src)).endCell());
        },
        parse: (src) => {
            return loadConfig(src.loadRef().beginParse());
        }
    }
}

export type Winner = {
    $$type: 'Winner';
    treasure: bigint;
    player: Address;
}

export function storeWinner(src: Winner) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeInt(src.treasure, 257);
        b_0.storeAddress(src.player);
    };
}

export function loadWinner(slice: Slice) {
    const sc_0 = slice;
    const _treasure = sc_0.loadIntBig(257);
    const _player = sc_0.loadAddress();
    return { $$type: 'Winner' as const, treasure: _treasure, player: _player };
}

function loadTupleWinner(source: TupleReader) {
    const _treasure = source.readBigNumber();
    const _player = source.readAddress();
    return { $$type: 'Winner' as const, treasure: _treasure, player: _player };
}

function loadGetterTupleWinner(source: TupleReader) {
    const _treasure = source.readBigNumber();
    const _player = source.readAddress();
    return { $$type: 'Winner' as const, treasure: _treasure, player: _player };
}

function storeTupleWinner(source: Winner) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.treasure);
    builder.writeAddress(source.player);
    return builder.build();
}

function dictValueParserWinner(): DictionaryValue<Winner> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeWinner(src)).endCell());
        },
        parse: (src) => {
            return loadWinner(src.loadRef().beginParse());
        }
    }
}

export type AddMemberInternal = {
    $$type: 'AddMemberInternal';
    member: Address;
}

export function storeAddMemberInternal(src: AddMemberInternal) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(1008135862, 32);
        b_0.storeAddress(src.member);
    };
}

export function loadAddMemberInternal(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 1008135862) { throw Error('Invalid prefix'); }
    const _member = sc_0.loadAddress();
    return { $$type: 'AddMemberInternal' as const, member: _member };
}

function loadTupleAddMemberInternal(source: TupleReader) {
    const _member = source.readAddress();
    return { $$type: 'AddMemberInternal' as const, member: _member };
}

function loadGetterTupleAddMemberInternal(source: TupleReader) {
    const _member = source.readAddress();
    return { $$type: 'AddMemberInternal' as const, member: _member };
}

function storeTupleAddMemberInternal(source: AddMemberInternal) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.member);
    return builder.build();
}

function dictValueParserAddMemberInternal(): DictionaryValue<AddMemberInternal> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeAddMemberInternal(src)).endCell());
        },
        parse: (src) => {
            return loadAddMemberInternal(src.loadRef().beginParse());
        }
    }
}

export type ExpeditionResultInternal = {
    $$type: 'ExpeditionResultInternal';
    address: Address;
    winners: Dictionary<bigint, Winner>;
}

export function storeExpeditionResultInternal(src: ExpeditionResultInternal) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(3661123138, 32);
        b_0.storeAddress(src.address);
        b_0.storeDict(src.winners, Dictionary.Keys.BigInt(257), dictValueParserWinner());
    };
}

export function loadExpeditionResultInternal(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 3661123138) { throw Error('Invalid prefix'); }
    const _address = sc_0.loadAddress();
    const _winners = Dictionary.load(Dictionary.Keys.BigInt(257), dictValueParserWinner(), sc_0);
    return { $$type: 'ExpeditionResultInternal' as const, address: _address, winners: _winners };
}

function loadTupleExpeditionResultInternal(source: TupleReader) {
    const _address = source.readAddress();
    const _winners = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserWinner(), source.readCellOpt());
    return { $$type: 'ExpeditionResultInternal' as const, address: _address, winners: _winners };
}

function loadGetterTupleExpeditionResultInternal(source: TupleReader) {
    const _address = source.readAddress();
    const _winners = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserWinner(), source.readCellOpt());
    return { $$type: 'ExpeditionResultInternal' as const, address: _address, winners: _winners };
}

function storeTupleExpeditionResultInternal(source: ExpeditionResultInternal) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.address);
    builder.writeCell(source.winners.size > 0 ? beginCell().storeDictDirect(source.winners, Dictionary.Keys.BigInt(257), dictValueParserWinner()).endCell() : null);
    return builder.build();
}

function dictValueParserExpeditionResultInternal(): DictionaryValue<ExpeditionResultInternal> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeExpeditionResultInternal(src)).endCell());
        },
        parse: (src) => {
            return loadExpeditionResultInternal(src.loadRef().beginParse());
        }
    }
}

export type BuyTicket = {
    $$type: 'BuyTicket';
    referrer: Address | null;
}

export function storeBuyTicket(src: BuyTicket) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(784494667, 32);
        b_0.storeAddress(src.referrer);
    };
}

export function loadBuyTicket(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 784494667) { throw Error('Invalid prefix'); }
    const _referrer = sc_0.loadMaybeAddress();
    return { $$type: 'BuyTicket' as const, referrer: _referrer };
}

function loadTupleBuyTicket(source: TupleReader) {
    const _referrer = source.readAddressOpt();
    return { $$type: 'BuyTicket' as const, referrer: _referrer };
}

function loadGetterTupleBuyTicket(source: TupleReader) {
    const _referrer = source.readAddressOpt();
    return { $$type: 'BuyTicket' as const, referrer: _referrer };
}

function storeTupleBuyTicket(source: BuyTicket) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.referrer);
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

export type Claim = {
    $$type: 'Claim';
}

export function storeClaim(src: Claim) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(4230369229, 32);
    };
}

export function loadClaim(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 4230369229) { throw Error('Invalid prefix'); }
    return { $$type: 'Claim' as const };
}

function loadTupleClaim(source: TupleReader) {
    return { $$type: 'Claim' as const };
}

function loadGetterTupleClaim(source: TupleReader) {
    return { $$type: 'Claim' as const };
}

function storeTupleClaim(source: Claim) {
    const builder = new TupleBuilder();
    return builder.build();
}

function dictValueParserClaim(): DictionaryValue<Claim> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeClaim(src)).endCell());
        },
        parse: (src) => {
            return loadClaim(src.loadRef().beginParse());
        }
    }
}

export type ExpeditionResult = {
    $$type: 'ExpeditionResult';
    address: Address;
    winners: Dictionary<bigint, Winner>;
}

export function storeExpeditionResult(src: ExpeditionResult) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeAddress(src.address);
        b_0.storeDict(src.winners, Dictionary.Keys.BigInt(257), dictValueParserWinner());
    };
}

export function loadExpeditionResult(slice: Slice) {
    const sc_0 = slice;
    const _address = sc_0.loadAddress();
    const _winners = Dictionary.load(Dictionary.Keys.BigInt(257), dictValueParserWinner(), sc_0);
    return { $$type: 'ExpeditionResult' as const, address: _address, winners: _winners };
}

function loadTupleExpeditionResult(source: TupleReader) {
    const _address = source.readAddress();
    const _winners = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserWinner(), source.readCellOpt());
    return { $$type: 'ExpeditionResult' as const, address: _address, winners: _winners };
}

function loadGetterTupleExpeditionResult(source: TupleReader) {
    const _address = source.readAddress();
    const _winners = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserWinner(), source.readCellOpt());
    return { $$type: 'ExpeditionResult' as const, address: _address, winners: _winners };
}

function storeTupleExpeditionResult(source: ExpeditionResult) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.address);
    builder.writeCell(source.winners.size > 0 ? beginCell().storeDictDirect(source.winners, Dictionary.Keys.BigInt(257), dictValueParserWinner()).endCell() : null);
    return builder.build();
}

function dictValueParserExpeditionResult(): DictionaryValue<ExpeditionResult> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeExpeditionResult(src)).endCell());
        },
        parse: (src) => {
            return loadExpeditionResult(src.loadRef().beginParse());
        }
    }
}

export type Withdraw = {
    $$type: 'Withdraw';
}

export function storeWithdraw(src: Withdraw) {
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

function loadTupleWithdraw(source: TupleReader) {
    return { $$type: 'Withdraw' as const };
}

function loadGetterTupleWithdraw(source: TupleReader) {
    return { $$type: 'Withdraw' as const };
}

function storeTupleWithdraw(source: Withdraw) {
    const builder = new TupleBuilder();
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

export type RequestReferralBonus = {
    $$type: 'RequestReferralBonus';
}

export function storeRequestReferralBonus(src: RequestReferralBonus) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(1850063746, 32);
    };
}

export function loadRequestReferralBonus(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 1850063746) { throw Error('Invalid prefix'); }
    return { $$type: 'RequestReferralBonus' as const };
}

function loadTupleRequestReferralBonus(source: TupleReader) {
    return { $$type: 'RequestReferralBonus' as const };
}

function loadGetterTupleRequestReferralBonus(source: TupleReader) {
    return { $$type: 'RequestReferralBonus' as const };
}

function storeTupleRequestReferralBonus(source: RequestReferralBonus) {
    const builder = new TupleBuilder();
    return builder.build();
}

function dictValueParserRequestReferralBonus(): DictionaryValue<RequestReferralBonus> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeRequestReferralBonus(src)).endCell());
        },
        parse: (src) => {
            return loadRequestReferralBonus(src.loadRef().beginParse());
        }
    }
}

export type Expedition$Data = {
    $$type: 'Expedition$Data';
    id: bigint;
    owner: Address;
    config: Config;
    members: Dictionary<bigint, Address>;
    membersLength: bigint;
}

export function storeExpedition$Data(src: Expedition$Data) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeInt(src.id, 257);
        b_0.storeAddress(src.owner);
        const b_1 = new Builder();
        b_1.store(storeConfig(src.config));
        b_1.storeDict(src.members, Dictionary.Keys.BigInt(257), Dictionary.Values.Address());
        b_1.storeInt(src.membersLength, 257);
        b_0.storeRef(b_1.endCell());
    };
}

export function loadExpedition$Data(slice: Slice) {
    const sc_0 = slice;
    const _id = sc_0.loadIntBig(257);
    const _owner = sc_0.loadAddress();
    const sc_1 = sc_0.loadRef().beginParse();
    const _config = loadConfig(sc_1);
    const _members = Dictionary.load(Dictionary.Keys.BigInt(257), Dictionary.Values.Address(), sc_1);
    const _membersLength = sc_1.loadIntBig(257);
    return { $$type: 'Expedition$Data' as const, id: _id, owner: _owner, config: _config, members: _members, membersLength: _membersLength };
}

function loadTupleExpedition$Data(source: TupleReader) {
    const _id = source.readBigNumber();
    const _owner = source.readAddress();
    const _config = loadTupleConfig(source);
    const _members = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), Dictionary.Values.Address(), source.readCellOpt());
    const _membersLength = source.readBigNumber();
    return { $$type: 'Expedition$Data' as const, id: _id, owner: _owner, config: _config, members: _members, membersLength: _membersLength };
}

function loadGetterTupleExpedition$Data(source: TupleReader) {
    const _id = source.readBigNumber();
    const _owner = source.readAddress();
    const _config = loadGetterTupleConfig(source);
    const _members = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), Dictionary.Values.Address(), source.readCellOpt());
    const _membersLength = source.readBigNumber();
    return { $$type: 'Expedition$Data' as const, id: _id, owner: _owner, config: _config, members: _members, membersLength: _membersLength };
}

function storeTupleExpedition$Data(source: Expedition$Data) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.id);
    builder.writeAddress(source.owner);
    builder.writeTuple(storeTupleConfig(source.config));
    builder.writeCell(source.members.size > 0 ? beginCell().storeDictDirect(source.members, Dictionary.Keys.BigInt(257), Dictionary.Values.Address()).endCell() : null);
    builder.writeNumber(source.membersLength);
    return builder.build();
}

function dictValueParserExpedition$Data(): DictionaryValue<Expedition$Data> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeExpedition$Data(src)).endCell());
        },
        parse: (src) => {
            return loadExpedition$Data(src.loadRef().beginParse());
        }
    }
}

export type TreasureHunters$Data = {
    $$type: 'TreasureHunters$Data';
    owner: Address;
    config: Config;
    currentExpedition: Address | null;
    currentExpeditionLength: bigint;
    expeditionResultsLength: bigint;
    expeditionResults: Dictionary<bigint, ExpeditionResult>;
    toBeClaimed: Dictionary<Address, bigint>;
    referralBonus: Dictionary<Address, bigint>;
    oncePlayed: Dictionary<Address, boolean>;
}

export function storeTreasureHunters$Data(src: TreasureHunters$Data) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeAddress(src.owner);
        const b_1 = new Builder();
        b_1.store(storeConfig(src.config));
        const b_2 = new Builder();
        b_2.storeAddress(src.currentExpedition);
        b_2.storeInt(src.currentExpeditionLength, 257);
        b_2.storeInt(src.expeditionResultsLength, 257);
        b_2.storeDict(src.expeditionResults, Dictionary.Keys.BigInt(257), dictValueParserExpeditionResult());
        b_2.storeDict(src.toBeClaimed, Dictionary.Keys.Address(), Dictionary.Values.BigInt(257));
        b_2.storeDict(src.referralBonus, Dictionary.Keys.Address(), Dictionary.Values.BigInt(257));
        b_2.storeDict(src.oncePlayed, Dictionary.Keys.Address(), Dictionary.Values.Bool());
        b_1.storeRef(b_2.endCell());
        b_0.storeRef(b_1.endCell());
    };
}

export function loadTreasureHunters$Data(slice: Slice) {
    const sc_0 = slice;
    const _owner = sc_0.loadAddress();
    const sc_1 = sc_0.loadRef().beginParse();
    const _config = loadConfig(sc_1);
    const sc_2 = sc_1.loadRef().beginParse();
    const _currentExpedition = sc_2.loadMaybeAddress();
    const _currentExpeditionLength = sc_2.loadIntBig(257);
    const _expeditionResultsLength = sc_2.loadIntBig(257);
    const _expeditionResults = Dictionary.load(Dictionary.Keys.BigInt(257), dictValueParserExpeditionResult(), sc_2);
    const _toBeClaimed = Dictionary.load(Dictionary.Keys.Address(), Dictionary.Values.BigInt(257), sc_2);
    const _referralBonus = Dictionary.load(Dictionary.Keys.Address(), Dictionary.Values.BigInt(257), sc_2);
    const _oncePlayed = Dictionary.load(Dictionary.Keys.Address(), Dictionary.Values.Bool(), sc_2);
    return { $$type: 'TreasureHunters$Data' as const, owner: _owner, config: _config, currentExpedition: _currentExpedition, currentExpeditionLength: _currentExpeditionLength, expeditionResultsLength: _expeditionResultsLength, expeditionResults: _expeditionResults, toBeClaimed: _toBeClaimed, referralBonus: _referralBonus, oncePlayed: _oncePlayed };
}

function loadTupleTreasureHunters$Data(source: TupleReader) {
    const _owner = source.readAddress();
    const _config = loadTupleConfig(source);
    const _currentExpedition = source.readAddressOpt();
    const _currentExpeditionLength = source.readBigNumber();
    const _expeditionResultsLength = source.readBigNumber();
    const _expeditionResults = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserExpeditionResult(), source.readCellOpt());
    const _toBeClaimed = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigInt(257), source.readCellOpt());
    const _referralBonus = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigInt(257), source.readCellOpt());
    const _oncePlayed = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.Bool(), source.readCellOpt());
    return { $$type: 'TreasureHunters$Data' as const, owner: _owner, config: _config, currentExpedition: _currentExpedition, currentExpeditionLength: _currentExpeditionLength, expeditionResultsLength: _expeditionResultsLength, expeditionResults: _expeditionResults, toBeClaimed: _toBeClaimed, referralBonus: _referralBonus, oncePlayed: _oncePlayed };
}

function loadGetterTupleTreasureHunters$Data(source: TupleReader) {
    const _owner = source.readAddress();
    const _config = loadGetterTupleConfig(source);
    const _currentExpedition = source.readAddressOpt();
    const _currentExpeditionLength = source.readBigNumber();
    const _expeditionResultsLength = source.readBigNumber();
    const _expeditionResults = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserExpeditionResult(), source.readCellOpt());
    const _toBeClaimed = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigInt(257), source.readCellOpt());
    const _referralBonus = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigInt(257), source.readCellOpt());
    const _oncePlayed = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.Bool(), source.readCellOpt());
    return { $$type: 'TreasureHunters$Data' as const, owner: _owner, config: _config, currentExpedition: _currentExpedition, currentExpeditionLength: _currentExpeditionLength, expeditionResultsLength: _expeditionResultsLength, expeditionResults: _expeditionResults, toBeClaimed: _toBeClaimed, referralBonus: _referralBonus, oncePlayed: _oncePlayed };
}

function storeTupleTreasureHunters$Data(source: TreasureHunters$Data) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.owner);
    builder.writeTuple(storeTupleConfig(source.config));
    builder.writeAddress(source.currentExpedition);
    builder.writeNumber(source.currentExpeditionLength);
    builder.writeNumber(source.expeditionResultsLength);
    builder.writeCell(source.expeditionResults.size > 0 ? beginCell().storeDictDirect(source.expeditionResults, Dictionary.Keys.BigInt(257), dictValueParserExpeditionResult()).endCell() : null);
    builder.writeCell(source.toBeClaimed.size > 0 ? beginCell().storeDictDirect(source.toBeClaimed, Dictionary.Keys.Address(), Dictionary.Values.BigInt(257)).endCell() : null);
    builder.writeCell(source.referralBonus.size > 0 ? beginCell().storeDictDirect(source.referralBonus, Dictionary.Keys.Address(), Dictionary.Values.BigInt(257)).endCell() : null);
    builder.writeCell(source.oncePlayed.size > 0 ? beginCell().storeDictDirect(source.oncePlayed, Dictionary.Keys.Address(), Dictionary.Values.Bool()).endCell() : null);
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

type Expedition_init_args = {
    $$type: 'Expedition_init_args';
    id: bigint;
    config: Config;
}

function initExpedition_init_args(src: Expedition_init_args) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeInt(src.id, 257);
        b_0.store(storeConfig(src.config));
    };
}

async function Expedition_init(id: bigint, config: Config) {
    const __code = Cell.fromBase64('te6ccgECHQEABScAART/APSkE/S88sgLAQIBYgIDA3rQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVF9s88uCCGQQFAgEgERICngGSMH/gcCHXScIflTAg1wsf3iCCEDwW7ra64wKCEJRqmLa6jqfTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J+EIBcG3bPH/gMHAGBwCuyPhDAcx/AcoAVXBQeIEBAc8AUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbIVTAFUDSBAQHPAAH6AgH6AoEBAc8AEvQAEoEBAc8AyQHMye1UAugw0x8BghA8Fu62uvLggfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgxVXDbPIIA1dNTFrny9IEBAVQgCiBulTBZ9FowlEEz9BTiB6RTBLqOkhBnEFYQRRA0QTDbPBcWFRRDMN4QZxBWEEUQNEEwfwgJATxtbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPDAPABL4QlJwxwXy4IQCsFR1Q1R1NNs8+CdvEIIImJaAoYIImJaAoYMGcPgoFAHIWYIQ2jhOQlADyx8BINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8W9ADJKlBEFEMwbW3bPDAKDwPcEI0QfBBrEFoQSRA9TLBtc1DS2zwabVCucA7bPIEBAVPBpzKAZKkEIgQREAQhbpVbWfRaMJjIAc8AQTP0QuKBAQFxLqcegGSpBCIhbpVbWfRaMJjIAc8AQTP0QuKBAQFyDqcUgGSpBCEQNBAjEC8LDA0AyG1wk1MEuY5YcCT4RG6X+CX4FX/4ZN4hofgRoCOBAQEiWfQMb6ExjjUjgQEBIln0DG+hkjBt3yBu8tCAE4EBAVIyIG6VMFn0WjCUQTP0FOIBpFAjgQEB9FowA6VDE5Ew4ugUXwQAEjBZqAGogGSpBAFmIW6VW1n0WjCYyAHPAEEz9ELiJ4EBAfSEb6UgkRKVMW0ybQHikIroXwM2OBA4R2UQJEMADgDqgQEBVFMAUvBBM/QMb6GUAdcAMJJbbeIgbvLQgAEBgQEBAshZAoEBAc8AASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFsktED0BIG6VMFn0WjCUQTP0FeILpIEBAVRJHFn0eG+lIJESlTFtMm0B4hDNAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7CBAAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwCAVgTFAIBIBcYAhG0o7tnm2eNkDAZFQIRtFa7Z5tnjZAwGRYAAiYAAiACEbmUHbPNs8bIGBkaABG4K+7UTQ0gABgByu1E0NQB+GPSAAGOTYEBAdcA+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHUAdCBAQHXAPoA+gCBAQHXAFUwBPQEgQEB1wAwEGgQZxBFEDQQI2wY4Pgo1wsKgwm68uCJGwACIQE6gQEB1wCBAQHXAPoA+gCBAQHXAFUwEEUF0VUD2zwcABj4QW8kECNfA1UwbXA=');
    const __system = Cell.fromBase64('te6cckECHwEABTEAAQHAAQEFoXfJAgEU/wD0pBP0vPLICwMCAWIEEgN60AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRfbPPLgghoFEQKeAZIwf+BwIddJwh+VMCDXCx/eIIIQPBbutrrjAoIQlGqYtrqOp9MfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8f+AwcAYOAugw0x8BghA8Fu62uvLggfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgxVXDbPIIA1dNTFrny9IEBAVQgCiBulTBZ9FowlEEz9BTiB6RTBLqOkhBnEFYQRRA0QTDbPBcWFRRDMN4QZxBWEEUQNEEwfwcIABL4QlJwxwXy4IQCsFR1Q1R1NNs8+CdvEIIImJaAoYIImJaAoYMGcPgoFAHIWYIQ2jhOQlADyx8BINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8W9ADJKlBEFEMwbW3bPDAJDwPcEI0QfBBrEFoQSRA9TLBtc1DS2zwabVCucA7bPIEBAVPBpzKAZKkEIgQREAQhbpVbWfRaMJjIAc8AQTP0QuKBAQFxLqcegGSpBCIhbpVbWfRaMJjIAc8AQTP0QuKBAQFyDqcUgGSpBCEQNBAjEC8KCwwAyG1wk1MEuY5YcCT4RG6X+CX4FX/4ZN4hofgRoCOBAQEiWfQMb6ExjjUjgQEBIln0DG+hkjBt3yBu8tCAE4EBAVIyIG6VMFn0WjCUQTP0FOIBpFAjgQEB9FowA6VDE5Ew4ugUXwQAEjBZqAGogGSpBAFmIW6VW1n0WjCYyAHPAEEz9ELiJ4EBAfSEb6UgkRKVMW0ybQHikIroXwM2OBA4R2UQJEMADQDqgQEBVFMAUvBBM/QMb6GUAdcAMJJbbeIgbvLQgAEBgQEBAshZAoEBAc8AASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFsktED0BIG6VMFn0WjCUQTP0FeILpIEBAVRJHFn0eG+lIJESlTFtMm0B4hDNATxtbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPDAPAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7CBAAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwArsj4QwHMfwHKAFVwUHiBAQHPAFAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WyFUwBVA0gQEBzwAB+gIB+gKBAQHPABL0ABKBAQHPAMkBzMntVAIBIBMYAgFYFBYCEbSju2ebZ42QMBoVAAImAhG0Vrtnm2eNkDAaFwACIAIBIBkeAhG5lB2zzbPGyBgaHQHK7UTQ1AH4Y9IAAY5NgQEB1wD6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdQB0IEBAdcA+gD6AIEBAdcAVTAE9ASBAQHXADAQaBBnEEUQNBAjbBjg+CjXCwqDCbry4IkbATqBAQHXAIEBAdcA+gD6AIEBAdcAVTAQRQXRVQPbPBwAGPhBbyQQI18DVTBtcAACIQARuCvu1E0NIAAYk2SzqQ==');
    const builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initExpedition_init_args({ $$type: 'Expedition_init_args', id, config })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const Expedition_errors: { [key: number]: { message: string } } = {
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
    7477: { message: `You have no prize claim` },
    8086: { message: `Not enough funds` },
    34660: { message: `Only owner can check contract balance` },
    36445: { message: `Only owner can check available for withdraw` },
    39439: { message: `You have no referral bonus` },
    43564: { message: `Only winner can claim` },
    54739: { message: `Expedition is already started` },
}

const Expedition_types: ABIType[] = [
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
    { "name": "Config", "header": null, "fields": [{ "name": "numberOfPlayers", "type": { "kind": "simple", "type": "int", "optional": false, "format": 257 } }, { "name": "ticketPrice", "type": { "kind": "simple", "type": "uint", "optional": false, "format": "coins" } }, { "name": "treasurePercent", "type": { "kind": "simple", "type": "uint", "optional": false, "format": "coins" } }, { "name": "referrerBonusPercent", "type": { "kind": "simple", "type": "int", "optional": false, "format": 257 } }] },
    { "name": "Winner", "header": null, "fields": [{ "name": "treasure", "type": { "kind": "simple", "type": "int", "optional": false, "format": 257 } }, { "name": "player", "type": { "kind": "simple", "type": "address", "optional": false } }] },
    { "name": "AddMemberInternal", "header": 1008135862, "fields": [{ "name": "member", "type": { "kind": "simple", "type": "address", "optional": false } }] },
    { "name": "ExpeditionResultInternal", "header": 3661123138, "fields": [{ "name": "address", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "winners", "type": { "kind": "dict", "key": "int", "value": "Winner", "valueFormat": "ref" } }] },
    { "name": "BuyTicket", "header": 784494667, "fields": [{ "name": "referrer", "type": { "kind": "simple", "type": "address", "optional": true } }] },
    { "name": "Claim", "header": 4230369229, "fields": [] },
    { "name": "ExpeditionResult", "header": null, "fields": [{ "name": "address", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "winners", "type": { "kind": "dict", "key": "int", "value": "Winner", "valueFormat": "ref" } }] },
    { "name": "Withdraw", "header": 593874976, "fields": [] },
    { "name": "RequestReferralBonus", "header": 1850063746, "fields": [] },
    { "name": "Expedition$Data", "header": null, "fields": [{ "name": "id", "type": { "kind": "simple", "type": "int", "optional": false, "format": 257 } }, { "name": "owner", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "config", "type": { "kind": "simple", "type": "Config", "optional": false } }, { "name": "members", "type": { "kind": "dict", "key": "int", "value": "address" } }, { "name": "membersLength", "type": { "kind": "simple", "type": "int", "optional": false, "format": 257 } }] },
    { "name": "TreasureHunters$Data", "header": null, "fields": [{ "name": "owner", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "config", "type": { "kind": "simple", "type": "Config", "optional": false } }, { "name": "currentExpedition", "type": { "kind": "simple", "type": "address", "optional": true } }, { "name": "currentExpeditionLength", "type": { "kind": "simple", "type": "int", "optional": false, "format": 257 } }, { "name": "expeditionResultsLength", "type": { "kind": "simple", "type": "int", "optional": false, "format": 257 } }, { "name": "expeditionResults", "type": { "kind": "dict", "key": "int", "value": "ExpeditionResult", "valueFormat": "ref" } }, { "name": "toBeClaimed", "type": { "kind": "dict", "key": "address", "value": "int" } }, { "name": "referralBonus", "type": { "kind": "dict", "key": "address", "value": "int" } }, { "name": "oncePlayed", "type": { "kind": "dict", "key": "address", "value": "bool" } }] },
]

const Expedition_getters: ABIGetter[] = [
    { "name": "numberOfMembers", "arguments": [], "returnType": { "kind": "simple", "type": "int", "optional": false, "format": 257 } },
    { "name": "members", "arguments": [], "returnType": { "kind": "dict", "key": "int", "value": "address" } },
    { "name": "owner", "arguments": [], "returnType": { "kind": "simple", "type": "address", "optional": false } },
]

export const Expedition_getterMapping: { [key: string]: string } = {
    'numberOfMembers': 'getNumberOfMembers',
    'members': 'getMembers',
    'owner': 'getOwner',
}

const Expedition_receivers: ABIReceiver[] = [
    { "receiver": "internal", "message": { "kind": "typed", "type": "AddMemberInternal" } },
    { "receiver": "internal", "message": { "kind": "typed", "type": "Deploy" } },
]

export class Expedition implements Contract {

    static async init(id: bigint, config: Config) {
        return await Expedition_init(id, config);
    }

    static async fromInit(id: bigint, config: Config) {
        const init = await Expedition_init(id, config);
        const address = contractAddress(0, init);
        return new Expedition(address, init);
    }

    static fromAddress(address: Address) {
        return new Expedition(address);
    }

    readonly address: Address;
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types: Expedition_types,
        getters: Expedition_getters,
        receivers: Expedition_receivers,
        errors: Expedition_errors,
    };

    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }

    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean | null | undefined }, message: AddMemberInternal | Deploy) {

        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'AddMemberInternal') {
            body = beginCell().store(storeAddMemberInternal(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }

        await provider.internal(via, { ...args, body: body });

    }

    async getNumberOfMembers(provider: ContractProvider) {
        const builder = new TupleBuilder();
        const source = (await provider.get('numberOfMembers', builder.build())).stack;
        const result = source.readBigNumber();
        return result;
    }

    async getMembers(provider: ContractProvider) {
        const builder = new TupleBuilder();
        const source = (await provider.get('members', builder.build())).stack;
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