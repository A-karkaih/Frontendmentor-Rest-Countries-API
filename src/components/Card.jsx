import { Link } from "react-router-dom";

export function Card({ country }) {
  return (
    <Link 
      to={`/country/${country.name.common}`}
      className="block"
    >
      <div className="w-full h-82.5 flex flex-col gap-3 shadow-lg cursor-pointer shadow-gray-400 bg-white rounded-lg dark:bg-gray-700 dark:shadow-none dark:text-white hover:shadow-xl transition-shadow duration-300">
        <img
          className="w-full h-45 object-cover rounded-t-lg"
          src={country.flags.svg}
          alt={`${country.name.common}`}
        />

        <div className="flex flex-col gap-2 px-4 pb-4">
          <p className="font-bold text-base text-center">
            {country.name.common}
          </p>
          
          <p className="text-sm">
            <span className="font-semibold">Population:</span>{" "}
            <span className="text-gray-600 dark:text-gray-300">
              {country.population?.toLocaleString() || "N/A"}
            </span>
          </p>
          
          <p className="text-sm">
            <span className="font-semibold">Region:</span>{" "}
            <span className="text-gray-600 dark:text-gray-300">
              {country.region || "N/A"}
            </span>
          </p>
          
          <p className="text-sm">
            <span className="font-semibold">Capital:</span>{" "}
            <span className="text-gray-600 dark:text-gray-300">
              {country.capital?.[0] || "N/A"}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}