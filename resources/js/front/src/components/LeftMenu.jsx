import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";

const LeftMenu = ({ user }) => {
    const [hide, setHide] = useState("");

    // const leftMenu = document.querySelector(".left-menu");
    // const button = document.querySelector(".left-menu__visibility-toggle");
    // console.log(button);

    const handleClick = () => {
        setHide(!hide);
    };

    return (
        <nav className={"left-menu" + (hide ? " left-menu--hidden" : "")}>
            <div onClick={handleClick} className="left-menu__visibility-toggle">
                {hide ? ">" : "<"}
            </div>

            <div className="left-menu__content">
                <div className="left-menu__header">
                    <img
                        className="left-menu__seal"
                        src="/images/img/mi6-seal.png"
                        alt="MI6 seal"
                    />
                </div>

                <div className="left-menu__links">
                    <Link to="/">Home</Link>
                    <Link to="/people-of-interest">People of interest</Link>
                    <Link to="/missions">Missions</Link>
                    {user === false ? (
                        <>
                            <Link to="/register">Register</Link>
                            <Link to="/login">Login</Link>
                        </>
                    ) : (
                        ""
                    )}

                    {user ? <Logout /> : ""}
                </div>
            </div>
        </nav>
    );
};

export default LeftMenu;
