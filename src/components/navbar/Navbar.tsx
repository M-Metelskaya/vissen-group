import { FC } from "react";
import "./navbar.css";

export const NavBar: FC = () => {
  return (
    <nav>
      <p className="logo">Vissen</p>
      <ul className="navbar">
        <li>Home</li>
        <li>Technologies</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
