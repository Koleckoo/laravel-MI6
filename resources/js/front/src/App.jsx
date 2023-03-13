import { useState } from "react";

import "./App.scss";
import LeftMenu from "./components/LeftMenu";
import MainContent from "./components/MainContent";
function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <LeftMenu />
                <MainContent />
            </div>
        </div>
    );
}

export default App;
