import { useEffect, useState } from "react";
import axios from "axios";

const StatusFilter = ({ selectedStatus, setSelectedStatus }) => {
    const [statuses, setStatuses] = useState([]);

    const loadStatuses = async () => {
        try {
            const response = await axios.get("/api/statuses");
            setStatuses(response.data);
        } catch (error) {
            console.log(error); // information about the error
        }

        // const data = await response.json();
    };

    useEffect(() => {
        loadStatuses();
    }, []);

    return (
        <div className={"status-filter"}>
            This is the status filter
            {statuses == ""
                ? "loading"
                : statuses.map((status) =>
                      selectedStatus === status.id ? (
                          <button
                              key={status.id}
                              onClick={() => setSelectedStatus(status.id)}
                              className={"status-filter__status--selected"}
                          >
                              {" "}
                              {status.name}
                          </button>
                      ) : (
                          <button
                              key={status.id}
                              onClick={() => setSelectedStatus(status.id)}
                              className={"status-filter__status"}
                          >
                              {" "}
                              {status.name}
                          </button>
                      )
                  )}
        </div>
    );
};

export default StatusFilter;
