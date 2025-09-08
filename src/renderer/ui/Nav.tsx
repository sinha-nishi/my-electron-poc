import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Nav = () => (
  <nav className="nav card">
    <div className="nav-inner">
      {/* Brand */}
      <div className="brand">
        <Link to="/">SocialScape</Link>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/about">About Us</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/community">Community</Link>
      </div>

      {/* Actions */}
      <div className="nav-actions">
        <Link className="link-btn" to="/signup">
          Sign Up
        </Link>
        <Link className="link-btn" to="/login">
          Login
        </Link>
        <Link  to="/search">
          <FiSearch size={20} /> {/* ✅ React Icon */}
        </Link>
      </div>
    </div>
  </nav>
);

export default Nav;
