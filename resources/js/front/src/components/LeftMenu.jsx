import { useEffect, useState } from "react";

const LeftMenu = () => {
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
            src="img/mi6-seal.png"
            alt="MI6 seal"
          />
        </div>

        <div className="left-menu__links">
          <a href="#">Home</a>
          <a href="#">People of interest</a>
        </div>
      </div>
    </nav>
  );
};

export default LeftMenu;
