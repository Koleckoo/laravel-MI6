import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import LeftMenu from "./components/LeftMenu";
import MainContent from "./components/MainContent";
import UserContext from "./components/UserContext";

function App() {
    const [user, setUser] = useState(null);

    const getUserInformation = async () => {
        try {
            const response = await axios.get("/api/user");
            setUser(response.data);
            console.log(user);
        } catch (error) {
            setUser(false);
            console.log(error);
        }
    };

    useEffect(() => {
        getUserInformation();
    }, []);
    return (
        <UserContext.Provider value={{ user, setUser, getUserInformation }}>
            <BrowserRouter>
                <div className="App">
                    <div className="wrapper">
                        <LeftMenu user={user} />
                        <MainContent user={user} />
                    </div>
                </div>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
