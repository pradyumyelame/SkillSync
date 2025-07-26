import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <header className="flex justify-between items-center p-4 text-gray-600 bg-teal-400 body-font h-24">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-amber-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl text-gray">SkillSync : Resume Builder</span>
        </Link>

        {/* Spacer to separate left and right content */}
        <div className="flex-grow"></div>

        {/* Navigation Section */}
        <nav className="md:flex md:items-center md:justify-end">
          <div className="flex flex-wrap items-center text-base text-gray-900">
            {isAuthenticated ? (
              // ✅ ADDED: Fragment to hold multiple links for authenticated users
              <>
                {/* ✅ CHANGED: "Resume Builder" link updated to "Resume Studio" */}
                <Link to={"/"} className="mr-5 hover:text-amber-500">
                  Resume Studio
                </Link>
                <Link to={"/Custom"} className="mr-5 hover:text-amber-500">
                  ATS Analyzer
                </Link>
              </>
            ) : (
              <Link to={"/"} className="mr-5 hover:text-amber-500 text-gray">
                Home
              </Link>
            )}

            <a href="#card" className="mr-5 hover:text-amber-500">
              Templates
            </a>

            <Link to={"/About"} className="mr-5 hover:text-amber-500">
              About
            </Link>

            <Link to={"/Context"} className="mr-5 hover:text-amber-500">
              Contact Us
            </Link>

            <div>
              {isAuthenticated ? (
                <button
                  className="bg-amber-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mr-4"
                  onClick={() =>
                    logout({ logoutParams: { returnTo: window.location.origin } })
                  }
                >
                  Log Out
                </button>
              ) : (
                <button
                  className="bg-amber-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mr-4"
                  onClick={() => loginWithRedirect()}
                >
                  Log In
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
