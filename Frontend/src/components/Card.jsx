import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <section
      id="card"
      className="px-2 mx-auto py-2 md:py-4 text-gray bg-amber-400 mb-5 mt-6"
    >
      <div className="container m-auto flex md:text-left text-center md:justify-between justify-center items-center">
        <div>
          <h2 className="text-3xl font-medium ">Popular Categories</h2>
          <div className="mt-2">Choose from a variety of Templates</div>
        </div>
        {/* <Link
          to={`/ProductPage/`}
          className="md:flex hidden items-center uppercase text-gray-500"
        >
          All Categories
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="ml-1 w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link> */}
      </div>
    </section>
  );
};

export default Cart;
