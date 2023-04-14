import { FC, useState } from "react";
import { TechnologiesBlock } from "./TechnologiesBlock";
import "./technologiesBlock.css";

import { technologiesData } from "../../technologiesData";
import { DirectionList } from "../../technologiesData";

export const TabCategories: FC = () => {
  const [directionList, setDirectionList] = useState<DirectionList[]>(
    technologiesData[0].directionList
  );
  const [isActiveTab, setActiveTab] = useState<number>(0);

  return (
    <div style={{ position: "relative", paddingTop: "5%" }}>
      <div className="tabs">
        {technologiesData.map((tab, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveTab(index);
              setDirectionList(tab.directionList);
            }}
            className={isActiveTab === index ? "active-tab" : ""}
          >
            {tab.category}
          </button>
        ))}
      </div>
      <TechnologiesBlock directionList={directionList} />
    </div>
  );
};
