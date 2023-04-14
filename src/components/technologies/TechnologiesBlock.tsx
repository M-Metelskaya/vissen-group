import { FC, useEffect, useState } from "react";
import { FaLaptopCode, FaFileDownload } from "react-icons/fa";
import "./technologiesBlock.css";

import { DirectionList } from "../../technologiesData";

export const TechnologiesBlock: FC<{ directionList: DirectionList[] }> = ({
  directionList,
}) => {
  const [isActive, setActive] = useState<number>(0);
  const [isTitle, setTitle] = useState<string>(directionList[0].name);
  const [technologies, setTechnologies] = useState<string[]>(
    directionList[0].technologies
  );
  const [techIconsList, setTechIconsList] = useState<string[]>(
    directionList[0].techIcons
  );

  useEffect(() => {
    setActive(0);
    setTitle(directionList[0].name);
    setTechnologies(directionList[0].technologies);
    setTechIconsList(directionList[0].techIcons);
  }, [directionList]);

  return (
    <div className="techBlock">
      <div className="techCardBack">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div className="sideMenu">
            {directionList.map((devType, index) => (
              <button
                key={index}
                className={isActive === index ? "active-button" : ""}
                onClick={() => {
                  setActive(index);
                  setTitle(devType.name);
                }}
              >
                {devType.name}
              </button>
            ))}
          </div>
          <div className="techInfo">
            <h2>
              <FaLaptopCode color="#8352ec" size={35} /> {isTitle} Development
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              et assumenda temporibus ipsam vero quas aliquid vitae delectus
              aspernatur necessitatibus quisquam itaque asperiores adipisci
              blanditiis beatae ullam repellendus, cupiditate impedit. <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              et assumenda temporibus ipsam vero quas aliquid vitae delectus
              aspernatur necessitatibus quisquam itaque asperiores adipisci
              blanditiis beatae ullam repellendus, cupiditate impedit.
            </p>

            <a href="#">
              <FaFileDownload color="#8352ec" size="35" />
              <p>
                View complete technology stack list <span>(PDF, 120.43Kb)</span>
              </p>
            </a>
          </div>
          <div className="techIcons">
            {techIconsList.map((icon, index) => (
              <img src={`./technologies/${icon}`} key={index} />
            ))}
          </div>
        </div>
        <div className="technologies">
          {technologies.map((technology, index) => (
            <p key={index}>{technology}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
