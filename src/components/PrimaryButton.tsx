import '../css/shared.css';

interface PrimaryButtonComponentProps {
    title: string;
    onClick: () => void;
    disabled: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonComponentProps> = ({ title, onClick, disabled }) => {
    return (
        <button
            className={`primary-button ${disabled ? 'primary-button-disabled' : ''}`}
            onClick={!disabled ? onClick : undefined}
            disabled={disabled}
            style={{ width: '100%' }}
        >
            {title}
        </button>
    );
};

export default PrimaryButton;
