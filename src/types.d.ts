interface TelegramWebviewProxy {
    postEvent(event: string, data: unknown): void;
}

interface TelegramWebview {
    postEvent(event: string, data: unknown): void;
}
