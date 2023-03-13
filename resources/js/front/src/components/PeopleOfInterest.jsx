import { useEffect, useState } from "react";

export default function PeopleOfInterest() {
    const [query, setQuery] = useState("");
    const [people, setPeople] = useState("");

    const fetchPeople = async () => {
        const response = await fetch(
            `/api/search?search=${encodeURIComponent(query)}`
        );
        const data = await response.json();
        // console.log(data);
        setPeople(data);
    };

    useEffect(() => {
        fetchPeople();
    }, [query]);

    const handleChange = (event) => {
        setQuery(event.target.value);
        // console.log(query);
    };

    return (
        <div className="people-of-interest">
            <input onChange={handleChange} type="text" name="search" id="" />
            <ul>
                {people === ""
                    ? "loading"
                    : people.map((person, i) => {
                          return <li key={i}>{person.name}</li>;
                      })}
            </ul>
        </div>
    );
}
