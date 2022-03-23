import "./Navbar.css";
import {
  Link
} from "react-router-dom";

const links = [
  {
    title: "Home",
    link: "/",
    id: "header-link-home",
  }
  //   add the other link as well
];

export const Navbar = () => {
  return (<div className="navbar">
    <h2 className="logo">Shop </h2>
    <div>
      <Link className="Link" to="/">
        <h3 id="header-link-home" >Home</h3>
      </Link>
      <Link className="Link" to="/about">
        <h3 id="header-link-about" >About</h3>
      </Link>

      <Link className="Link" to="/movies">
        <h3 id="header-link-movies" >Movie</h3>
      </Link>
    </div>
  </div>)
};
