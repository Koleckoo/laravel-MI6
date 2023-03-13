import { useEffect, useState } from "react";
import PersonDetail from "./PersonDetail";

export default function PeopleOfInterest() {
    const [query, setQuery] = useState("");
    const [people, setPeople] = useState("");
    const [personId, setPersonId] = useState(null);

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
            {personId === null ? (
                <ul>
                    {people === ""
                        ? "loading"
                        : people.map((person, i) => {
                              return (
                                  <li
                                      key={i}
                                      onClick={() => {
                                          setPersonId(person.id);
                                      }}
                                  >
                                      {person.name}
                                  </li>
                              );
                          })}
                </ul>
            ) : (
                <PersonDetail personId={personId} setPersonId={setPersonId} />
            )}
        </div>
    );
}
