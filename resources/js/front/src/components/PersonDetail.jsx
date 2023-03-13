import { useEffect, useState } from "react";

export default function PersonDetail({ personId, setPersonId }) {
    const [person, setPerson] = useState(null);

    const fetchPerson = async () => {
        const response = await fetch(`/api/people/${personId}`);
        const data = await response.json();
        // console.log(data);
        setPerson(data);
    };

    useEffect(() => {
        fetchPerson();
    }, [setPerson]);

    return (
        <div className="person-detail">
            {person === null ? (
                "loading..."
            ) : (
                <div className="person-detail-details">
                    <button
                        onClick={() => {
                            setPersonId(null);
                        }}
                    >
                        Back
                    </button>
                    <img src={`/images/${person.image.path}`} alt="pic" />
                    <div>
                        Name: <span>{person.name}</span>
                    </div>
                    <div>
                        Nationality: <span>{person.nationality}</span>
                    </div>
                    <div>
                        Occupation: <span>{person.occupation}</span>
                    </div>
                    <div>
                        Born: <span>{person.born}</span>
                    </div>
                    <div>
                        Died: <span>{person.died}</span>
                    </div>
                    <div>
                        Age: <span>{person.age}</span>
                    </div>
                    <div>
                        Eyes: <span>{person.eye_color}</span>
                    </div>
                    <div>
                        Features: <span>{person.features}</span>
                    </div>
                    <div>
                        Hair: <span>{person.hair_color}</span>
                    </div>
                    <div>
                        Height: <span>{person.height}</span>
                    </div>
                    <div>
                        Weight: <span>{person.weight}</span>
                    </div>
                </div>
            )}
        </div>
    );
}
