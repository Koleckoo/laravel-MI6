import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function MissionEditForm() {
    const [mission, setMission] = useState(null);
    // deconstructing id from URL
    const { id } = useParams();

    const loadMission = async () => {
        try {
            let response = await axios.get(`/api/missions/${id}`);
            setMission(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    //binding multiple input with a state
    const handleChange = (event) => {
        setMission((previous_values) => {
            return {
                ...previous_values,
                [event.target.name]: event.target.value,
            };
        });
    };
    // sending data from frontedn to backend api
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let response = await axios.post(`/api/missions/store`, mission);
        } catch (error) {
            console.log(error);
        }
    };

    const handleCheckbox = (event) => {
        setMission((previous_values) => {
            return {
                ...previous_values,
                [event.target.name]: event.target.checked,
            };
        });
    };

    useEffect(() => {
        loadMission();
    }, []);
    return mission ? (
        <div>
            <Link to="/missions">
                <button>&times;</button>
            </Link>
            <h1>Edit Mission #{mission.id}</h1>
            <form action="" method="post" onSubmit={handleSubmit}>
                Name: <br />
                <input
                    type="text"
                    name="name"
                    value={mission.name}
                    onChange={handleChange}
                />{" "}
                <br />
                Year: <br />
                <input
                    type="number"
                    name="year"
                    value={mission.year}
                    onChange={handleChange}
                />{" "}
                <br />
                Year: <br />
                <input
                    type="checkbox"
                    name="outcome"
                    checked={mission.outcome ? true : false}
                    onChange={handleCheckbox}
                />{" "}
                <br />
                <button>SAVE</button>
            </form>
        </div>
    ) : (
        "loading..."
    );
}
