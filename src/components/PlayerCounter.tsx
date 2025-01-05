import { useEffect, useState } from "react";
import { useTreasureHuntersContract } from "../hooks/useTreasureHuntersContract";

const PlayerCounterComponent = () => {
    const [currentPlayers, setCurrentPlayers] = useState(0);
    const { getNumberOfCurrentPlayers } = useTreasureHuntersContract();

    // Method to fetch the number of current players


    useEffect(() => {
        const fetchNumberOfPlayers = async () => {
            try {
                const number = await getNumberOfCurrentPlayers();
                setCurrentPlayers(Number(number));
            } catch (error) {
                console.error("Error fetching player count:", error);
            }
        };
        // Fetch the number of players immediately on mount
        fetchNumberOfPlayers();

        // Set up an interval to fetch the number of players every 30 seconds
        const intervalId = setInterval(fetchNumberOfPlayers, 3000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, [getNumberOfCurrentPlayers]);

    return (
        <div>
            <div className="game-text-box-bigger">{currentPlayers}/20</div>
        </div>
    );
};

export default PlayerCounterComponent;
