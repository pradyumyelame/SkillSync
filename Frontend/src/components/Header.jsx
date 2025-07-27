import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useResume } from "../context/ResumeContext"; // 1. IMPORT the context hook

const Header = () => {
  const [theme, setTheme] = useState("light");
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const { clearResume } = useResume(); // 2. GET the clear function from context

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // 3. CREATE a handler for logging out
  const handleLogout = () => {
    // First, clear the resume data from the state
    clearResume();
    // Then, log the user out from Auth0
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

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

        <div className="flex-grow"></div>

        <nav className="md:flex md:items-center md:justify-end">
          <div className="flex flex-wrap items-center text-base text-gray-900">
            {isAuthenticated ? (
              <>
                <Link to={"/User1"} className="mr-5 hover:text-amber-500">
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
                  onClick={handleLogout} 
                >
                  Log Out
                </button>
              ) : (
                <button
                  className="bg-amber-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mr-4"
                  onClick={() =>
                    loginWithRedirect({
                      appState: { returnTo: "/User1" },
                    })
                  }
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
