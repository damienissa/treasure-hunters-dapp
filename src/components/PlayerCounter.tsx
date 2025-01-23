import { useEffect, useState } from "react";
import { useTreasureHuntersContract } from "../hooks/useTreasureHuntersContract";

const PlayerCounterComponent = () => {
    const [currentPlayers, setCurrentPlayers] = useState(0);
    const { getNumberOfCurrentPlayers } = useTreasureHuntersContract();


    useEffect(() => {
        getNumberOfCurrentPlayers().then((number) => {
            setCurrentPlayers(Number(number));
        }).catch((error) => {
            console.error("Error fetching player count:", error);
        }).finally(() => { });

    }, [getNumberOfCurrentPlayers]);

    return (
        <div>
            <div className="game-text-box-bigger">{currentPlayers}/10</div>
        </div>
    );
};

export default PlayerCounterComponent;
