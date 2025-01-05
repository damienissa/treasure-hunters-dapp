import '../css/shared.css';

interface CharacterComponentProps {
    title: string;
}

const CharacterComponent: React.FC<CharacterComponentProps> = ({ title }) => {
    return (
        <div className='character-container'>
            <div
                className="from-character-mouth game-container game-text-box"
                dangerouslySetInnerHTML={{
                    __html: title,
                }}
            ></div>

            <div className="character-image" />
        </div>
    );
};

export default CharacterComponent;
