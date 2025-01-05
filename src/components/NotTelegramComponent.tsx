import { useTranslation } from "react-i18next";


const NotTelegramComponent = () => {
    const { t } = useTranslation();
    return (
        <div className="text-container">
            <p
                className="description"
                dangerouslySetInnerHTML={{
                    __html: t('not_a_telegram_message'),
                }}
            ></p>
            <div className="character-image" />
        </div>
    );
};
export default NotTelegramComponent;