
import React from 'react';
import BottomBarComponent from './BottomBarComponent';
import BuyTicketComponent from './BuyTiketComponent';

const ConnectedWalletComponent: React.FC = () => {

    return (
        <BottomBarComponent>
            <BuyTicketComponent />
            <div>Page 2 Content</div>
            <div>Page 3 Content</div>
        </BottomBarComponent>

    );
};

export default ConnectedWalletComponent;