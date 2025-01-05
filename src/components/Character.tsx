interface CharacterComponentProps {
    title: string;
}

const CharacterComponent: React.FC<CharacterComponentProps> = ({ title }) => {
    return (
        <div>
            <div
                className="from-character-mouth game-text-container game-text-box"
                dangerouslySetInnerHTML={{
                    __html: title,
                }}
            ></div>

            <div className="character-image" />
        </div>
    );
};

export default CharacterComponent;
