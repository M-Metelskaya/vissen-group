import { FC, useEffect } from "react";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "./banner.css";

export const Banner: FC = () => {
  return (
    <div className="banner">
      <div className="data">
        <h1>Vissen it group</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel
          nesciunt illum, laudantium quia fuga vitae asperiores in maiores
          nostrum, voluptas blanditiis nemo, praesentium enim quo culpa debitis
          temporibus libero.
        </p>
      </div>
      <div className="cards">
        <BannerCard title={"Software"} img={"./card_back_1.png"} />
        <BannerCard title={"Hardware"} img={"./card_back_2.png"} />
        <BannerCard title={"S&H systems"} img={"./card_back_3.png"} />
      </div>
    </div>
  );
};

export const BannerCard: FC<{ title: string; img: string }> = ({
  title,
  img,
}) => {
  return (
    <div
      className="card"
      style={{
        background: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <h3>{title}</h3>
        <HiOutlineArrowNarrowRight color="#fff" size="40" />
      </div>
    </div>
  );
};
