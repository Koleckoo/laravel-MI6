import axios from "axios";
import { useEffect, useState } from "react";
import MissionEditForm from "./MissionEditForm";
import { Link } from "react-router-dom";

export default function Missions() {
    const [missions, setMissions] = useState([]);

    const loadMissions = async () => {
        try {
            let response = await axios.get("api/missions");
            setMissions(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadMissions();
    }, []);

    // this function is fetching the mission id onto the endpoint
    // which was created in api.php as route
    const sendEmail = async (missionId) => {
        try {
            let response = await axios.get(
                `/api/missions/get-details/${missionId}`
            );
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="missions-container">
            {missions.map((mission) => {
                return (
                    <div
                        key={mission.id}
                        className="missions-container__mission"
                    >
                        <p>Name: {mission.name}</p>
                        <p>Year: {mission.year}</p>
                        <p>Outcome: {mission.outcome}</p>
                        <Link to={`/missions/${mission.id}/edit`}>Edit</Link>
                        {/* on click you call the sendEmail function inside anonymous function and pass the mission.id inside it */}
                        <button onClick={() => sendEmail(mission.id)}>
                            Send to my mail
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
