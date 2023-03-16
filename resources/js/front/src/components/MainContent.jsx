import Missions from "./Missions";
import PeopleOfInterest from "./PeopleOfInterest";
import { Route, Routes } from "react-router-dom";
import MissionEditForm from "./MissionEditForm";
import Register from "./Register";
import Login from "./Login";

const MainContent = ({ user }) => {
    return (
        <main className="main">
            <div className="main__content">
                {/* frontend routing  */}
                <Routes>
                    <Route
                        path="/"
                        element={
                            user ? (
                                <h1>Welcome to {user.name}</h1>
                            ) : (
                                <h1>Welcome to MI6</h1>
                            )
                        }
                    />
                    <Route
                        path="/people-of-interest"
                        element={<PeopleOfInterest />}
                    />
                    <Route path="/missions" element={<Missions />} />
                    <Route
                        path="/missions/:id/edit"
                        element={<MissionEditForm />}
                    />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </main>
    );
};

export default MainContent;
