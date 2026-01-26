import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-red-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
          PTP101
        </Link>

        {/* Links */}
        <div className="flex gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative px-2 py-1 font-medium transition-colors duration-300
                ${location.pathname === link.path 
                  ? "text-yellow-400 before:absolute before:-bottom-1 before:left-0 before:w-full before:h-0.5 before:bg-yellow-400"
                  : "hover:text-yellow-300 hover:before:absolute hover:before:-bottom-1 hover:before:left-0 hover:before:w-full hover:before:h-0.5 hover:before:bg-yellow-300"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
