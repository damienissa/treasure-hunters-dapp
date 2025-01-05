import '../css/shared.css';

interface PrimaryButtonComponentProps {
    title: string;
    onClick: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonComponentProps> = ({ title, onClick }) => {

    return (
        <button className="primary-button" onClick={onClick} style={{ width: '100%' }}>
            {title}
        </button>
    );
};
export default PrimaryButton;