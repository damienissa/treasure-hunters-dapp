import { useIsConnectionRestored } from '@tonconnect/ui-react';
import ConnectedWalletComponent from './ConnectedWalletComponent';
import WelcomeComponent from "./WelcomeComponent";


const AppContentComponent: React.FC = () => {
    const connectionRestored = useIsConnectionRestored();
    return (
        <div>
            {connectionRestored ? <ConnectedWalletComponent /> : <WelcomeComponent />}
        </div>
    );
};

export default AppContentComponent;