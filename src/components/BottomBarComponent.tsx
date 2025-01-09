// React Component
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/BottomBar.css'; // Import CSS file

interface BottomBarComponentProps {
    children: React.ReactNode[];
}

const BottomBarComponent: React.FC<BottomBarComponentProps> = ({
    children,
}) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const { t } = useTranslation();
    const handleNavigation = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <div className="container">
            <div className="content">{children[selectedIndex]}</div>
            <div className="bottom-bar">
                <button
                    onClick={() => handleNavigation(0)}
                    className={`bottom-bar-item ${selectedIndex === 0 ? 'active' : ''}`}
                >

                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 4H22V5H24V6.5H26V8.5H27V10.5H28V21.5H27V23.5H26V25.5H24V27H22V28H10V27H8V25.5H6V23.5H5V21.5H4V10.5H5V8.5H6V6.5H8V5H10V4ZM12 6H20V7H22V8.5H24V10.5H25V12.5H26V19.5H25V21.5H24V23.5H22V25H20V26H12V25H10V23.5H8V21.5H7V19.5H6V12.5H7V10.5H8V8.5H10V7H12V6ZM15.7187 16.2187L14.4528 18.0472L16.2813 16.7813L17.5472 14.9528L15.7187 16.2187ZM20.9308 10.1778L22.3222 11.5692L17.7187 18.2187L11.0692 22.8222L9.67781 21.4308L14.2813 14.7813L20.9308 10.1778Z" fill={selectedIndex !== 0 ? '#FAFAFA' : '#010101'} />
                    </svg>


                    <span className="label">{t('expedition')}</span>
                </button>
                <button
                    onClick={() => handleNavigation(1)}
                    className={`bottom-bar-item ${selectedIndex === 1 ? 'active' : ''}`}
                >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 5H11V6H9V7.5H7V9.5H6V11.5H5V20.5H6V22.5H7V24.5H9V26H11V27H21V26H23V24.5H25V22.5H26V20.5H27V11.5H26V9.5H25V7.5H23V6H21V5Z" stroke={selectedIndex !== 1 ? '#FAFAFA' : '#010101'} stroke-width="2" />
                        <path d="M15.1429 22V20.2857H10V18.5714H15.1429V16.8571H11.7143V15.1429H10V13.4286H11.7143V11.7143H15.1429V10H16.8571V11.7143H20.2857V13.4286H16.8571V15.1429H20.2857V16.8571H22V18.5714H20.2857V20.2857H16.8571V22H15.1429ZM13.4286 15.1429H15.1429V13.4286H13.4286V15.1429ZM16.8571 18.5714H18.5714V16.8571H16.8571V18.5714Z" fill={selectedIndex !== 1 ? '#FAFAFA' : '#010101'} />
                    </svg>


                    <span className="label">{t('rewards')}</span>
                </button>
                <button
                    onClick={() => handleNavigation(2)}
                    className={`bottom-bar-item ${selectedIndex === 2 ? 'active' : ''}`}
                >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 16H19M21 16H19M19 16V14M19 16V18M18 13V16V19M11 5H21V6H23V7.5H25V9.5H26V11.5H27V20.5H26V22.5H25V24.5H23V26H21V27H11V26H9V24.5H7V22.5H6V20.5H5V11.5H6V9.5H7V7.5H9V6H11V5Z" stroke={selectedIndex !== 2 ? '#FAFAFA' : '#010101'} stroke-width="2" />
                    </svg>
                    <span className="label">{t('referrals')}</span>
                </button>
            </div>
        </div>
    );
};

export default BottomBarComponent;
