// Detect if the site is running in Telegram's in-app browser
const isTelegramInAppBrowser = (): boolean => {
    return !!window.TelegramWebviewProxy || !!window.TelegramWebview;
};

// Detect if the user is on a mobile device
const isMobileDevice = (): boolean => {
    return /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
};

// Combine checks to ensure it's Telegram on a mobile device
export const isTelegramMobileApp = (): boolean => {
    return isTelegramInAppBrowser() && isMobileDevice();
};
