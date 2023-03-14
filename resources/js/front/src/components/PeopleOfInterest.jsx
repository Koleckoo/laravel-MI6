import { useEffect, useState } from "react";
import PersonDetail from "./PersonDetail";
import StatusFilter from "./StatusFilter";

export default function PeopleOfInterest() {
    const [query, setQuery] = useState("");
    const [people, setPeople] = useState([]);
    const [personId, setPersonId] = useState(null);
    const [page, setPage] = useState(1);
    const [selectedStatus, setSelectedStatus] = useState("");

    const fetchPeople = async () => {
        const response = await fetch(
            `/api/search?search=${encodeURIComponent(
                query
            )}&page=${page}&status=${encodeURIComponent(selectedStatus)}`
        );
        const data = await response.json();
        // console.log(data);
        setPeople(data);
    };

    useEffect(() => {
        fetchPeople();
    }, [query, page, selectedStatus]);

    const handleChange = (event) => {
        setQuery(event.target.value);
        // console.log(query);
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    return (
        <div className="people-of-interest">
            <StatusFilter
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
            />
            <input onChange={handleChange} type="text" name="search" id="" />
            {personId === null ? (
                <ul>
                    {people.length === 0 ? (
                        <li>No results found</li>
                    ) : (
                        people.map((person, i) => {
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
                        })
                    )}
                </ul>
            ) : (
                <PersonDetail personId={personId} setPersonId={setPersonId} />
            )}
            <div className="pagination">
                {page > 1 && (
                    <button onClick={() => handlePageChange(page - 1)}>
                        Previous
                    </button>
                )}
                <span className="page-number">{page}</span>
                {people.length === 20 && (
                    <button onClick={() => handlePageChange(page + 1)}>
                        Next
                    </button>
                )}
            </div>
        </div>
    );
}
