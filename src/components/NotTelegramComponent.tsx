import { useTranslation } from "react-i18next";
import '../css/shared.css';
import CharacterComponent from "./Character";




const NotTelegramComponent = () => {
    const { t } = useTranslation();
    return (
        <CharacterComponent title={t('not_a_telegram_message')} />
    );
};
export default NotTelegramComponent;