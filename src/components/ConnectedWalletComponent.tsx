
import React from 'react';
import BottomBarComponent from './BottomBarComponent';
import BuyTicketComponent from './BuyTiketComponent';
import ExpeditionHistoryComponent from './ExpeditionHistoryComponent';

const ConnectedWalletComponent: React.FC = () => {

    return (
        <BottomBarComponent>
            <BuyTicketComponent />
            <ExpeditionHistoryComponent />
            <div>Page 3 Content</div>
        </BottomBarComponent>

    );
};

export default ConnectedWalletComponent;