import { Address, Sender, SenderArguments } from '@ton/ton';
import { CHAIN, useTonConnectUI, useTonWallet } from '@tonconnect/ui-react';

export function useTonConnect(): {
    sender: Sender;
    connected: boolean;
    wallet: string | null;
    network: CHAIN | null;
} {
    const [tonConnectUI] = useTonConnectUI();
    const wallet = useTonWallet();
    return {
        sender: {
            send: async (args: SenderArguments) => {
                await tonConnectUI.sendTransaction({
                    messages: [{
                        address: args.to.toString(),
                        amount: args.value.toString(),
                        payload: args.body?.toBoc().toString('base64'),
                    }],
                    validUntil: Date.now() + 1000 * 60 * 5,
                });
            },
            address: wallet?.account.address ? Address.parse(wallet.account.address) : undefined,
        },
        connected: !!wallet?.account.address,
        wallet: wallet?.account.address ?? null,
        network: wallet?.account.chain ?? null,
    };
}