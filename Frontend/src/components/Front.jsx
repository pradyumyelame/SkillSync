import { FaSpinner } from 'react-icons/fa';
import { useAuth0 } from "@auth0/auth0-react";

const Front = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        // Flex container with background gradient
        <div className="flex justify-between items-center px-16 py-8 h-full gap-0 relative rounded-sm overflow-hidden bg-gradient-to-bl from-teal-100 to-white">
            {/* Content and icons */}
            <div className="flex flex-col justify-center items-center z-10 w-1/2">
                {/* Content */}
                <div className="text-black max-w-md">
                    <h1 className="text-3xl font-bold mb-4">Craft Your Resume with The Best CV Maker Online.</h1>
                    <h3 className="text-xl mb-4">Fast. Easy. Effective.</h3>
                    <p>If a sheet of paper represents your entire work life, personality, and skills, it better be a pretty amazing piece of paper — Let the builder do the heavy lifting.</p>
                </div>
                {/* Button */}
                <button
                    className="bg-amber-500 hover:bg-green-500 text-white font-bold mt-4 py-2 px-2 rounded-full w-1/3"
                    onClick={() => loginWithRedirect()} >
                    Get Started
                </button>
                {/* Icons */}
                <div className="absolute top-0 right-0 flex justify-center items-center w-full h-full">
                    <div className="absolute top-4 right-4">
                        <FaSpinner className="text-white text-4xl animate-pulse" />
                    </div>
                </div>
            </div>
            {/* Image */}
            <div className="w-1/2">
                <img
                    src="https://www.davidkowalski.nl/gallery/wp-content/uploads/2021/11/do-education-resume-need-skills-section.jpg"
                    alt="Header Image"
                    className="object-cover rounded-lg"
                    style={{ width: "700px", height: "500px" }}
                />
            </div>
        </div>
    );
};

// Export the component
export default Front;
