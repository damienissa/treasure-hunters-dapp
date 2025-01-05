export { };

declare global {
    interface Window {
        TelegramWebviewProxy?: {
            postEvent: (event: string, data?: unknown) => void;
        };
        TelegramWebview?: {
            postEvent: (event: string, data?: unknown) => void;
        };
    }
}
