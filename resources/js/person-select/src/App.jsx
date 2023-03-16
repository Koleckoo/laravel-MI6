import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
    const [people, setPeople] = useState([]);
    const [query, setQuery] = useState("");
    const [clickedPerson, setClickedPerson] = useState([]);
    const loadPeople = async () => {
        try {
            let response = await axios.get(
                `http://www.mi6.test/api/search?search=${encodeURIComponent(
                    query
                )}`
            );
            setPeople(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        loadPeople();
    }, [query]);

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div className="people-list">
            <input type="text" name="input" onChange={handleChange} />
            <ul className="list-nr-1">
                {clickedPerson.map((person) => (
                    <li key={person.id}>
                        <input
                            type="hidden"
                            name={`people[${person.id}]`}
                            value={person.id}
                        />
                        {person.name}
                    </li>
                ))}
            </ul>
            <ul className="list-nr-2">
                {people.map((person) => (
                    <li key={person.id}>
                        <a
                            onClick={() =>
                                setClickedPerson([...clickedPerson, person])
                            }
                            href="#"
                        >
                            {person.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
